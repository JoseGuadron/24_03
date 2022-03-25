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

function bot(pregunta){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-start", "mb-4");
    var div1 = document.createElement("div");
    //Div col-auto
    div1.classList.add("col-auto");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    div1.appendChild(div2);
    //div card con gradiente azul
    div2.classList.add("card");
    var div3 = document.createElement("div");
    //div card-body
    div3.classList.add("card-body", "p-2");
    div2.appendChild(div3); 
    //Div texto
    var p= document.createElement("p");
    p.innerText = pregunta;
    div3.appendChild(p);
    definirHora(p);
    document.getElementById("chat-body").appendChild(divMain);
}


function usuario(){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-4", "mt-2");
    //Div col-auto
    var div1 = document.createElement("div");
    div1.classList.add("col-auto", "bg-gradient-info", "card","text-white", "p-0");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    //div card-body
    div2.classList.add("card-body", "p-2");
    div2.setAttribute("id", "preguntas");
    div1.appendChild(div2);
    //Div texto
    var p = document.createElement("p");
    p.setAttribute("style", "margin-bottom:0;")
    p.innerText = "";
    div2.appendChild(p);
    
    document.getElementById("chat-body").appendChild(divMain);
    
    categorias.forEach(function(dato, index){
        var li = document.createElement("li");
        li.classList.add("li-" + (index + 1), "pointer", "btn-style");
        li.setAttribute("id", "li-" + (index + 1));
        li.setAttribute("style", "list-style: none;");
        li.innerText= dato;
        document.getElementById("preguntas").appendChild(li);
        li.addEventListener("click",function(){

            switch(index + 1){
                case 1:
                 bot(dato + ": Selecciona una opción para brindarte ayuda.");
                 var liActual = document.getElementById("li-1");
                 liActual.classList.remove("pointer");
                 liActual.setAttribute("disable", "true");
                 liActual.removeAttribute("id");
                 document.getElementById("li-2").remove();
                 document.getElementById("li-3").remove();
                 document.getElementById("li-4").remove();
                 var borrarP = document.getElementById("preguntas");
                 borrarP.removeAttribute("id");
                 usuario1(subPreguntas);
                break;
                case 2:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    var liActual = document.getElementById("li-2");
                    liActual.classList.remove("pointer");
                    liActual.setAttribute("disable", "true");
                    liActual.removeAttribute("id");
                    document.getElementById("li-1").remove();
                    document.getElementById("li-3").remove();
                    document.getElementById("li-4").remove();
                    var borrarP = document.getElementById("preguntas");
                    borrarP.removeAttribute("id");
                    usuario1(conPreguntas);
                break;
                case 3:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    var liActual = document.getElementById("li-3");
                    liActual.classList.remove("pointer");
                    liActual.setAttribute("disable", "true");
                    liActual.removeAttribute("id");
                    document.getElementById("li-1").remove();
                    document.getElementById("li-2").remove();
                    document.getElementById("li-4").remove();
                    var borrarP = document.getElementById("preguntas");
                    borrarP.removeAttribute("id");
                    usuario1(puPreguntas);
                break;
                case 4:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    var liActual = document.getElementById("li-4");
                    liActual.classList.remove("pointer");
                    liActual.setAttribute("disable", "true");
                    liActual.removeAttribute("id");
                    document.getElementById("li-1").remove();
                    document.getElementById("li-2").remove();
                    document.getElementById("li-3").remove();
                    var borrarP = document.getElementById("preguntas");
                    borrarP.removeAttribute("id");
                    usuario1(noPreguntas);
                break;
    
            }
            
        });
    });

    var informacion= document.createElement("p");
    document.getElementById("preguntas").appendChild(informacion); 
    definirHora(informacion);
    
}

function insertarButtonConsulta(){
    var buttonConsultaNueva = document.createElement("button");
    buttonConsultaNueva.setAttribute("id", "comenzar");
    buttonConsultaNueva.classList.add("btn","bg-gradient-info","btn-lg");
    buttonConsultaNueva.setAttribute("style", "max-width:300px;");
    buttonConsultaNueva.setAttribute("style", "padding-bottom: 2rem;");
    buttonConsultaNueva.innerText= "Otra consulta";
    document.getElementById("chat-body").appendChild(buttonConsultaNueva);
}

function usuario1(array){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-4", "mt-2");
    //Div col-auto
    var div1 = document.createElement("div");
    div1.classList.add("col-auto", "bg-gradient-info", "card","text-white", "p-0");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    //div card-body
    div2.classList.add("card-body", "p-2");
    div2.setAttribute("id", "preguntas");
    div1.appendChild(div2);
    //Div texto
    var p = document.createElement("p");
    p.setAttribute("style", "margin-bottom:0;")
    p.innerText = "";
    div2.appendChild(p);
    var informacion= document.createElement("p");
    document.getElementById("chat-body").appendChild(divMain);
    
    array.forEach(function(dato, index){
        var li = document.createElement("li");
        li.classList.add("li-" + (index + 1), "pointer", "btn-style");
        li.setAttribute("id", "li-" + (index + 1));
        li.setAttribute("style", "list-style: none;");
        li.innerText= dato;
        document.getElementById("preguntas").appendChild(li);
        li.addEventListener("click",function(){
            if (dato == subPreguntas[0]){
                bot("Debes acceder a la pagina de subcripciones");
                document.getElementById("li-1").remove();
                document.getElementById("li-2").remove();
                document.getElementById("li-3").remove();
                document.getElementById("li-4").remove();
                var borrarP = document.getElementById("preguntas");
                var despues = document.createElement("p");
                despues.innerText = dato;
                borrarP.appendChild(despues);
                document.getElementById("preguntas").appendChild(informacion); 
                definirHora(informacion);
                borrarP.removeAttribute("id");
                insertarButtonConsulta();
            }else if(dato == subPreguntas[1]){
                bot("Respuesta: ¿Cuál es el precio de la subscripción?");
                var liActual = document.getElementById("li-2");
                liActual.classList.remove("pointer");
                liActual.setAttribute("disable", "true");
                liActual.removeAttribute("id");
                document.getElementById("li-1").remove();
                document.getElementById("li-3").remove();
                document.getElementById("li-4").remove();
                var borrarP = document.getElementById("preguntas");
                borrarP.removeAttribute("id");
                insertarButtonConsulta();
            }else if(dato == subPreguntas[2]){
                bot("Respuesta: ¿Cuales son los beneficios de subscribirme?");
                var liActual = document.getElementById("li-3");
                liActual.classList.remove("pointer");
                liActual.setAttribute("disable", "true");
                liActual.removeAttribute("id");
                document.getElementById("li-1").remove();
                document.getElementById("li-2").remove();
                document.getElementById("li-4").remove();
                var borrarP = document.getElementById("preguntas");
                borrarP.removeAttribute("id");
                insertarButtonConsulta();
            }else if(dato == subPreguntas[3]){
                bot("Respuesta: ¿Con que frecuencia se realiza el cobro de la subscripción?");
                var liActual = document.getElementById("li-4");
                liActual.classList.remove("pointer");
                liActual.setAttribute("disable", "true");
                liActual.removeAttribute("id");
                document.getElementById("li-1").remove();
                document.getElementById("li-2").remove();
                document.getElementById("li-3").remove();
                var borrarP = document.getElementById("preguntas");
                borrarP.removeAttribute("id");
                insertarButtonConsulta();
                
            }
        });
    
    });
    
}


function iniciarConsulta(){
    borrarInicio();
    bot("Selecciona una opción para brindarte ayuda.");
    usuario();
}
var btnComenzar = document.getElementById("comenzar");
btnComenzar.addEventListener("click", iniciarConsulta);

