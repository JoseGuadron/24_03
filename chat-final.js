const categorias = ["Subcripciones", "Contactos", "Nosotros", "Noticias"];

const subPreguntas = [  "¿Cuál es el proceso para subscribirme?", 
                        "¿Cuál es el precio de la subscripción?", 
                        "¿Cuales son los beneficios de subscribirme?", 
                        "¿Con que frecuencia se realiza el cobro de la subscripción?"]

const subRespuestas = [ "<h6>Proceso de suscripción:</h6><ol><li>Realizar el pago en moneda nacional en la cuenta de la DGI – La Gaceta, seleccionando el banco de su predilección, como ingreso no tributario por el tipo de suscripción seleccionada.</li><li> Una vez pagada la suscripción, presentar el comprobante de pago en la ventanilla de servicio a suscriptores, realiza el llenado de formato de apertura de nueva suscripción o renovación para actualizar su información general, habilitandole a lo inmediato el retiro a diario de los ejemplares de manera personal.</li><li>Horario de atención es de Lunes a viernes en horario de 8:00 am a 12:30 pm y de 1:30 pm a 4:00 pm.</li><li>Horario deDisponible a la vez de forma opcional el servicio de envío de sus ejemplares por Correos de Nicaragua. Siendo este un costo adicional, el cual deberá realizarse en efectivo de moneda nacional, en la ventanilla de Correos de Nicaragua, ubicada en nuestras oficinas.</li>", 
                        "<h6>Precios:</h6>Actualmente contamos con dos tipos de subscripción. <ul><li>Por envio: Recibe un copia de La Gaceta mediante correo Nacional. <ul><li>Semestral: C$ 2,718.00</li><li>Anual: C$ 5,236.00</li></ul><li>Premium: puedes acceder a nuestra página web y ver el ejemplar de La Gaceta.<ul><li>Semestral: C$ 1,518.00</li><li>Anual: C$ 3,036.00</li></ul></li></ul>", 
                        "<h6>Beneficios:</h6>Poder descargar cualquier edicion de la gaceta(suscripción premium) y recibirlos hasta la puerta de tu casa(Por envío)", 
                        "<h6>Tipos de pago:</h6><ul><li>Semestral</li><li>Anual</li></ul>"]

const conPreguntas = [  "¿Cómo puedo comunicarse con la gaceta?", 
                        "Cuáles son los horarios de atención?", 
                        "¿Dónde estamos ubicados?"]


const conRespuestas = [ "Puedes comunicarte con nosotros a traves de los números <ul><li><a href='tel:+505 2228-3791'>+505 2228-3791</a></li><li><a href='tel:+505 2222-7344'>+505 2222-7344</a></li></ul> También puedes hacerlo mediante el correo electronico <a href='mailto:infolagaceta@sepres.gob.ni'>infolagaceta@sepres.gob.ni</a>", 
                        "Los horarios de atencion son desde las 8:00 am hasta 4:00 pm", 
                        "Puedes visitarnos en las oficinas que se encuentran ubicadas en: Avenida de Bolívar a Chávez, Entrada por parqueo de SERVIGOB, Delegación INSS José Benito Escobar Managua, Nicaragua, 11107. <br><div class='ratio ratio-16x9'><iframe frameborder='0' style='border:0; padding:1rem;' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBcyaGsnPXET3u4jeqQp9hs_MMaT7g4CWE&amp;q=place_id:ChIJLR2-jw1WcY8RO9l2kakC2-E'></iframe></div>"]

const nosPreguntas = [  "¿Quiénes somos?", 
                        "¿En que año se fundó La Gaceta?"]

const nosRespuestas = [ "La Gaceta Diario Oficial del gobierno de la republica de Nicaragua encargados de la publicidad de leyes, decretos y acuerdos", 
                        "La Gaceta se constituyó en el inicio mismo del periodismo impreso en Nicaragua, luego de la introducción de la imprenta, en el año 1830. El 19 de enero de 1830, el gobierno puso en funcionamiento la Imprenta del Gobierno, ubicada en la ciudad de Granada y la primera edición de La Gaceta de Nicaragua, fue publicada el 31 de agosto de 1830, convirtiéndose en el primer periódico que circuló en el país, aunque probablemente no logró pasar de una primera edición"]
                        
const noPreguntas = [   "¿Podría agregar noticias a la pagina de la gaceta como usuario?", 
                        "¿Puedo recibir las noticias en mi correo?", 
                        "¿Con qué frequencia se actualizan las noticias?", 
                        "¿Cuáles son las fuentes de las noticas mostradas en la página?"]


const noRespuestas = [  "No. Solamente el personal autorizado de La Gaceta puede agregar noticias a nuestro sitio.", 
                        "No. Actualmente no contamos con un servicio de newsletter. La única forma de poder ver las noticias es desde nuestra página.", 
                        "Las noticias son actualizadas por nuestro personal periodicamente(Según la necesidad).", 
                        "Las noticias mostradas en nuestro sitio web son de organismos gubernamentes aliados."]


function definirHora(informacion){
    var divHora = document.createElement("div");
    divHora.classList.add("d-flex", "align-items-center", "text-sm", "opacity-6");
    informacion.appendChild(divHora);
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

function borrarInfo(dato){
    var borrarP = document.getElementById("preguntas");
    borrarP.removeAttribute("id");
    var liAntiguos = document.querySelectorAll('li.pointer');
    liAntiguos.forEach(function(li, index){
        var borrarLi = document.getElementById("li-"+ (index + 1));
        borrarLi.remove();
    });
    var seleccionado = document.getElementById("dato");
    seleccionado.innerText = dato;
    seleccionado.removeAttribute("id");
}

function borrarInicio(){
    var comenzar = document.getElementById("inicio-consulta");
    var chatBody = document.getElementById("chat-body");
    chatBody.classList.remove("align-items-center", "justify-content-center" ,"text-center");
    var mostrarDescarga = document.getElementById("btnDescargarPDF");
    mostrarDescarga.setAttribute("style", "display: block !important;")
    comenzar.remove();
}

function posicionarScroll(){
    var div = document.getElementById('chat-body');
    div.scrollTop = '9999';
}

function bot(pregunta){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-start", "mb-2");
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
    p.innerHTML = pregunta;
    div3.appendChild(p);
    definirHora(p);
    document.getElementById("chat-body").appendChild(divMain);
    posicionarScroll();
}

function usuario(){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-3", "mt-1");
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
    p.setAttribute("style", "margin-bottom:0;");
    p.setAttribute("id", "dato");
    p.innerText = "";
    div2.appendChild(p);
    document.getElementById("chat-body").appendChild(divMain);
    
    categorias.forEach(function(dato, index){
        var li = document.createElement("li");
        li.classList.add("li-" + (index + 1), "pointer", "btn-style");
        li.setAttribute("id", "li-" + (index + 1));
        li.setAttribute("style", "list-style: none; padding: 5px");
        li.innerText= dato;
        document.getElementById("preguntas").appendChild(li);
        li.addEventListener("click",function(){

            switch(index + 1){
                case 1:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    borrarInfo(dato);
                    usuario1(subPreguntas);
                break;
                case 2:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    borrarInfo(dato);
                    usuario1(conPreguntas);
                break;
                case 3:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    borrarInfo(dato);
                    usuario1(nosPreguntas);
                break;
                case 4:
                    bot(dato + ": Selecciona una opción para brindarte ayuda.");
                    borrarInfo(dato);
                    usuario1(noPreguntas);
                break;
            }
        });
    });

    var informacion= document.createElement("p");
    document.getElementById("preguntas").appendChild(informacion); 
    definirHora(informacion);
    posicionarScroll();
    
}

function mensajeFinal(){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-3", "mt-1");
    //Div col-auto
    var div1 = document.createElement("div");
    div1.classList.add("col-auto", "bg-gradient-info", "card","text-white", "p-0");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    //div card-body
    div2.classList.add("card-body", "p-2");
    div1.appendChild(div2);
    //Div texto
    var p = document.createElement("p");
    p.setAttribute("style", "margin-bottom:0;")
    p.innerText = "Gracias por preferirnos";
    div2.appendChild(p);
    var informacion= document.createElement("p");
    informacion.setAttribute("style", "text-align: right")
    p.appendChild(informacion); 
    definirHora(informacion);
    document.getElementById("chat-body").appendChild(divMain);
    posicionarScroll();
}

function nuevaConsulta(){
    var botones = document.createElement("div");
    botones.setAttribute("id", "botones");
    botones.classList.add("d-flex", "justify-content-center", "mt-3");
    var chatBody = document.getElementById("chat-body");
    chatBody.appendChild(botones);
    var nuevaConsulta = document.createElement("button");
    nuevaConsulta.setAttribute("id", "nuevaConsulta");
    nuevaConsulta.setAttribute("style", "margin: 0px 10px");
    nuevaConsulta.classList.add("btn","bg-gradient-success","btn-lg");
    nuevaConsulta.innerText= "Nueva consulta";
    document.getElementById("botones").appendChild(nuevaConsulta);
    var btnNueva = document.getElementById("nuevaConsulta");
    btnNueva.addEventListener("click", usuario);
    btnNueva.addEventListener("click", borrarBotones);
    posicionarScroll();
}

function terminarConsulta(){
    var terminarConsulta = document.createElement("button");
    terminarConsulta.setAttribute("id", "terminarConsulta");
    terminarConsulta.setAttribute("style", "margin: 0px 10px");
    terminarConsulta.classList.add("btn","bg-gradient-danger","btn-lg");
    terminarConsulta.innerText= "Terminar consulta";
    document.getElementById("botones").appendChild(terminarConsulta);
    var btnTerminar = document.getElementById("terminarConsulta");
    btnTerminar.addEventListener("click", borrarBotones);
    btnTerminar.addEventListener("click", mensajeFinal);
    posicionarScroll();
}

function borrarBotones(){
    var bButones = document.getElementById("botones");
    bButones.remove();
    var btnTerminar = document.getElementById("terminarConsulta");
    btnTerminar.remove();
    var btnNueva = document.getElementById("nuevaConsulta");
    btnNueva.remove();
}

function usuario1(array){
    //Div principal
    var divMain = document.createElement("div");
    divMain.classList.add("row", "justify-content-end", "text-right", "mb-2", "mt-2");
    //Div col-auto
    var div1 = document.createElement("div");
    div1.classList.add("col-auto", "bg-gradient-info", "card","text-white", "p-0");
    divMain.appendChild(div1);
    var div2 = document.createElement("div");
    //div card-body
    div2.classList.add("card-body", "p-2");
    div2.setAttribute("id", "preguntas");
    div1.appendChild(div2);
    var informacion= document.createElement("p");  
    //Div texto
    var p = document.createElement("p");
    p.setAttribute("style", "margin-bottom:0;")
    p.setAttribute("id", "dato");
    p.innerText = "";
    div2.appendChild(p);  
    div2.appendChild(informacion);
    definirHora(informacion);
    document.getElementById("chat-body").appendChild(divMain);

    array.forEach(function(dato, index){
        var li = document.createElement("li");
        li.classList.add("li-" + (index + 1), "pointer", "btn-style");
        li.setAttribute("id", "li-" + (index + 1));
        li.setAttribute("style", "list-style: none;");
        li.innerText= dato;
        document.getElementById("dato").appendChild(li);
        li.addEventListener("click",function(){
            if(array == subPreguntas){
                bot(subRespuestas[index]);
                borrarInfo(dato);
                nuevaConsulta();
                terminarConsulta();
            }else if(array == conPreguntas){
                bot(conRespuestas[index]);
                borrarInfo(dato);
                nuevaConsulta();
                terminarConsulta();
            }else if(array == nosPreguntas){
                bot(nosRespuestas[index]);
                borrarInfo(dato);
                nuevaConsulta();
                terminarConsulta();
            }else if(array == noPreguntas){
                bot(noRespuestas[index]);
                borrarInfo(dato);
                nuevaConsulta();
                terminarConsulta();
            }
        });
    });
    posicionarScroll();
}

function iniciarConsulta(){
    borrarInicio();
    bot("Selecciona una opción para brindarte ayuda.");
    usuario();
}
var btnComenzar = document.getElementById("btnComenzar");
btnComenzar.addEventListener("click", iniciarConsulta);