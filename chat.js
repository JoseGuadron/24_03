const categorias = ["Subcripciones", "Consultas", "Publicaciones", "Nosotros"];

const subPreguntas = [  "¿Cuál es el proceso para subscribirme?", 
                        "¿Cuál es el precio de la subscripción?", 
                        "¿Cuales son los beneficios de subscribirme?", 
                        "¿Con que frecuencia se realiza el cobro de la subscripción?"];

const conPreguntas = [  "Pregunta con 1", 
                        "Pregunta con 2", 
                        "Pregunta con 3", 
                        "Pregunta con 4"]

const puPreguntas = [   "Pregunta pu 1", 
                        "Pregunta pu 2", 
                        "Pregunta pu 3", 
                        "Pregunta pu 4"]
                        
const noPreguntas = [   "Pregunta no 1", 
                        "Pregunta no 2", 
                        "Pregunta no 3", 
                        "Pregunta no 4"]

function borrarInicio(){
    var comenzar = document.getElementById("inicio-consulta");
    var chatBody = document.getElementById("chat-body");
    chatBody.classList.remove("align-items-center", "justify-content-center" ,"text-center");
    comenzar.remove();
}

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
    p.classList.add("enunciado");
    p.setAttribute("style", "margin-bottom:0;")
    p.innerText = enunciado;
    div3.appendChild(p);
    var informacion= document.createElement("p");
    document.getElementById("chat-body").appendChild(divMain);
    crearOpciones1(datos);
    document.getElementById("preguntas").appendChild(informacion)
    definirHora(informacion);
}

function crearContenedorRespuestas(respuesta){
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-4");
    var div1 = document.createElement("div");
    div1.classList.add("col-auto", "bg-gradient-info", "card","text-white");
    divMain.appendChild(div1);
    var informacion = document.createElement("p");
    informacion.innerText = respuesta;
    div1.appendChild(informacion);
    definirHora(informacion);
    document.getElementById("chat-body").appendChild(divMain);
    var borrarP = document.getElementById("preguntas");
    borrarP.removeAttribute("id");
}

function crearOpciones1(datos){
 datos.forEach(function(dato, index){
    var li = document.createElement("li");
    li.classList.add("li-" + (index + 1), "pointer", "btn-style");
    li.setAttribute("style", "list-style: none;");
    li.innerText= dato;
    li.addEventListener("click",function(){

        switch(index + 1){
            case 1:
                crearContenedorRespuestas(dato);
                crearContenedorPreguntas("Elige tu opciones de " + dato, subPreguntas);

            break;
            case 2:
                crearContenedorRespuestas(dato);
                crearContenedorPreguntas("Elige tu opciones " + dato, conPreguntas);
            break;
            case 3:
                crearContenedorRespuestas(dato);
                crearContenedorPreguntas("Elige tu opciones " + dato, puPreguntas);
            break;
            case 4:
                crearContenedorRespuestas(dato);
                crearContenedorPreguntas("Elige tu opciones " + dato, noPreguntas);
            break;

        }
        
        
    });
    document.getElementById("preguntas").appendChild(li);

 });
 
}


function iniciarConsulta(){
    borrarInicio();
    crearContenedorPreguntas("Elige una de las opciones para brindarte la informacion correspondiente.", categorias);
}

var btnComenzar = document.getElementById("comenzar");
btnComenzar.addEventListener("click", iniciarConsulta);
