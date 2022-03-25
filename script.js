const categorias = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5"];
const categoria1Preguntas = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4"];
// const conPreguntas = ["Preguntas 12", "Preguntas 13", "Preguntas 14", "Preguntas 15"];
// const conRespuestas = ["Respuestas 12", "Respuestas 13", "Respuestas 14","Respuestas 15"];

function definirHora(p){
    var divHora = document.createElement("div");
    divHora.classList.add("d-flex", "align-items-center", "text-sm", "opacity-6");
    p.append(divHora);
    p.setAttribute("style", "margin-bottom: 0;")
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

function crearContenedorPreguntas(pregunta){
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
    div3.setAttribute("id", "preguntas-" +count);
    div2.appendChild(div3); 
    //Div texto
    var p = document.createElement("p");
    div3.appendChild(p);
    p.innerText= pregunta;
    div3.appendChild(p);
    definirHora(p);
    document.getElementById("chat-body").appendChild(divMain);
}

function crearContenedorRespuestas(respuesta){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-4", "mt-2");
    var div1 = document.createElement("div");
    //Div col-auto
    div1.classList.add("col-auto");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    div1.appendChild(div2);
    //div card con gradiente azul
    div2.classList.add("card", "bg-gradient-info", "text-white");
    var div3 = document.createElement("div");
    //div card-body
    div3.classList.add("card-body", "p-2");
    div2.appendChild(div3); 
    //Div texto
    var p= document.createElement("p");
    p.innerText = respuesta;
    div3.appendChild(p);
    definirHora(p);
    document.getElementById("chat-body").appendChild(divMain);
}

function crearElementoLista(texto, index){
    
    li.addEventListener("click",function(){
        switch(index + 1){
            case 1:
                crearContenedorRespuestas(texto); 
                crearContenedorPreguntas("Preguntas frequentes para la categoria: " + texto);  
                categoria1Preguntas.forEach(function(categoria){
                    var text = document.createElement("li");
                    text.setAttribute("style", "list-style: none;");
                    text.innerText = categoria;
                    document.getElementById("preguntas").appendChild(text);
                });
            break;
            case 2:
                crearContenedorRespuestas(texto);
                setTimeout(function(){
                    crearContenedorPreguntas(categoria1Preguntas);
                },1000);
            break;
            case 3:
                crearContenedorRespuestas(texto);
                setTimeout(function(){
                    crearContenedorPreguntas(categoria1Preguntas);
                },1000);
            break;
            case 4:
                crearContenedorRespuestas(texto);
                setTimeout(function(){
                    crearContenedorPreguntas(categoria1Preguntas);
                },1000);
            break;
            case 5:
                crearContenedorRespuestas(texto);
                setTimeout(function(){
                    crearContenedorPreguntas(categoria1Preguntas);
                },1000);
            break;
        }
    });
    document.getElementById("chat-a").appendChild(li);
}

function crearPreguntaLi(){
    categorias.forEach(function(categoria, index){
        crearElementoLista(categoria, index);
    });
}

window.onload = crearPreguntaLi;