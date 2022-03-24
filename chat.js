const categorias = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5"];
const categoria1Preguntas = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4"];

function definirHora(informacion){
    var divHora = document.createElement("div");
    divHora.classList.add("d-flex", "align-items-center", "text-sm", "opacity-6");
    informacion.append(divHora);
    informacion.setAttribute("style", "margin-bottom: 0;")
    var iElemento = document.createElement("i");
    iElemento.classList.add("material-icons", "text-sm", "me-1" );
    iElemento.innerText = "Hora:";
    divHora.appendChild(iElemento);
    var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        
        // Check whether AM or PM
        var newformat = hours >= 12 ? 'pm' : 'am'; 
        
        // Find current hour in AM-PM Format
        hours = hours % 12; 
        
        // To display "0" as "12"
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;
                
    var small = document.createElement("small");
    small.innerText = ' ' + hours + ':' + minutes + ' ' + newformat;
    iElemento.appendChild(small);
}

function crearContenedorPreguntas(enunciado, datos){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-start", "mb-4");
    //Div col-auto
    var div1 = document.createElement("div");
    div1.classList.add("col-auto");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    div1.appendChild(div2);
    //div card
    div2.classList.add("card");
    var div3 = document.createElement("div");
    //div card-body
    div3.classList.add("card-body", "p-2");
    div3.setAttribute("id", "preguntas");
    div2.appendChild(div3); 
    //Div texto
    var p = document.createElement("p");
    p.setAttribute("style", "margin-bottom:0;")
    p.innerText = enunciado;
    div3.appendChild(p);
    var informacion= document.createElement("p")
    informacion.innerText = datos;
    div3.appendChild(informacion);
    definirHora(informacion);
    document.getElementById("chat-body").appendChild(divMain);
}

function borrarInicio(){
 var comenzar = document.getElementById("inicio-consulta");
 var chatBody = document.getElementById("chat-body");
 chatBody.classList.remove("align-items-center", "justify-content-center", "flex-column" ,"text-center");
 comenzar.remove();
}

function iniciarConsulta(){
    borrarInicio();
    crearContenedorPreguntas("Elige una de las opciones para brindarte la informacion correspondiente.", categorias);
}
const btnComenzar = document.getElementById("comenzar");
btnComenzar.addEventListener("click", iniciarConsulta);