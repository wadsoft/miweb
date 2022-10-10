//funcion que aplica el estilo a la opcion seleccionada en el manu y quita el anterior
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"
    
    //desaparece el menu una vez seleccionada la opcione en responsive
    var x = document.getElementById("nav");
    x.className
}


//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// se detecta el scrolling para aplica animación a las barras de habilidades
window.onscroll = function (){
    animarBarra()
};

//animar las barras de habilidades
function animarBarra(){
    var skills = document.getElementById("skills");

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("php").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("vb").classList.add("barra-progreso5");
        document.getElementById("ps").classList.add("barra-progreso6");
    }
}

//español
$(function() {
    $(".es").click(function() {
        $(".nav-menu ul:nth-child(1) li:nth-child(1) a").text("INICIO");
        $(".nav-menu ul:nth-child(1) li:nth-child(2) a").text("SOBRE MI");
        $(".nav-menu ul:nth-child(1) li:nth-child(3) a").text("SERVICIOS");
        $(".nav-menu ul:nth-child(1) li:nth-child(4) a").text("PORTAFOLIO");
        $(".nav-menu ul:nth-child(1) li:nth-child(5) a").text("CONTACTO");
        $(".lenguaje-selected").text("ln-ES");
        $(".lenguaje-selected").addClass("change-es");
        $(".lenguaje-selected").removeClass("change-en");
        $(".lenguaje-selected").removeClass("change-br");

        $("#bienvenida").text("Bienvenidos");
        $("#nombre").html("Soy <span>WaDoS</span>, Ingeniero Informático");
        $("#titulo").text("Diseño y codifico lo simple de la vida y me gusta lo que hago");
        $("#ir").text("Ir al portafolio");
        
        
        $("#aboutme").text("Sobre Mi");
        
        $("#minombre").html("Hola, soy <span>Wilton Domínguez</span>");
        $("#ing").html("Ingeniero Informático - Desarrollador Web");
        $("#txt1").html("Desde que comencé mi viaje como desarrollador y relator, he realizado trabajos para algunas empresas del país y he colaborado con personas talentosas para crear productos digitales tanto para comercio como personales.");
        $("#txt2").html("Soy naturalmente curioso, siempre trabajo y me capacito para mejorar mis habilidades, y me encuentro capaz de enfrentar nuevos desafíos.");
        $("#cv").text("Descargar CV");

        $(".titulo-servicios").text("Mis Servicios");
        $("#vb6").text("Desarrollador VB 6.0");
        $("#vb-det").text("Mis conocimientos como Informático iniciaron con MS Visual Basic 6.0 y SQL.");
        $("#relator").text("Relator Informática");
        $("#relator-det").text("Realizo cursos de computación, Ofimática (Word, Excel, PowerPoint) en todos los niveles.");
        $("#dev").text("Desarrollo de Sitios WEB");
        $("#dev-det").text("Además he diseñado pequeños sitios basados en HTML, con CSS, JavaScript y MySql.");
        $("#host").text("Dominios y Hosting");
        $("#host-det").text("Junto con el desarrollo de sitios WEB, además realizo el levantamiento de los mismos, tanto con el dominio, como el hosting.");
        $("#net").text("Asesorías y Redes");
        $("#net-det").text("Instalación y configuración de redes locales, y asesorías computacionales.");
        $("#mant").text("Mantención");
        $("#mant-det").text("Armado de Computadores, mantención y reparación de notebook's y Pc's.");
        
        $("#habilidades").text("Habilidades");
        $("#skill-html").text("HTML & CSS");
        $("#skill-js").text("JavaScript");
        $("#skill-php").text("PHP");
        $("#skill-db").text("Base de Datos (SQL & MySQL)");

        $("#misproy").text("Mis Proyectos");
        $("#proy01").text(".:: Web de Matrimonio ::.");
        $("#clickhere").text("Pincha aquí para visitar");
        
        
        $("#contactme").text("Contáctame");
        
        $("#txt-nombre").attr('placeholder','Nombre Completo');
        $("#txt-email").attr('placeholder','Correo elecrónico');
        $("#txt-tema").attr('placeholder','Tema...');
        $("#txt-mensaje").attr('placeholder','Tu Mensaje');
        $("#btn-enviar").attr('value','Enviar Mensaje');

        
        $("#derechos").text("Todos los derechos reservados - 2022");
    })
});

//english
$(function() {
    $(".en").click(function() {
        $(".nav-menu ul:nth-child(1) li:nth-child(1) a").text("HOME");
        $(".nav-menu ul:nth-child(1) li:nth-child(2) a").text("ABOUT ME");
        $(".nav-menu ul:nth-child(1) li:nth-child(3) a").text("SERVICES");
        $(".nav-menu ul:nth-child(1) li:nth-child(4) a").text("PORTFOLIO");
        $(".nav-menu ul:nth-child(1) li:nth-child(5) a").text("CONTACT ME");
        $(".lenguaje-selected").text("ln-EN");
        $(".lenguaje-selected").addClass("change-en");
        $(".lenguaje-selected").removeClass("change-es");

        $("#bienvenida").html("Welcome");
        
        $("#nombre").html("I'm <span>WaDoS</span>, Computing Engenieer");
        $("#titulo").text("I design and code the simple things in life and I like what I do");
        $("#ir").text("Go to portfolio");

        $("#aboutme").text("About Me");
        
        $("#minombre").html("Hi, i'm <span>Wilton Domínguez</span>");
        $("#ing").html("Computer Engenieer - Web Developer");
        $("#txt1").html("Since I started my journey as a developer and storyteller, I have done work for some companies in the country and have collaborated with talented people to create digital products for both business and personal.");
        $("#txt2").html("I am naturally curious, always working and training to improve my skills, and find myself capable of taking on new challenges.");
        $("#cv").text("Download Resume");

        $(".titulo-servicios").text("My Services");
        $("#vb6").text("VB 6.0 Developer");
        $("#vb-det").text("My knowledge as a Computer Scientist started with MS Visual Basic 6.0 and SQL");
        $("#relator").text("Computing Teacher");
        $("#relator-det").text("I take computer courses, MS Office (Word, Excel, PowerPoint) at all levels.");
        $("#dev").text("Web Developer");
        $("#dev-det").text("I have also designed small sites based on HTML, with CSS, JavaScript and MySql.");
        $("#host").text("Hosting Service");
        $("#host-det").text("Along with the development of WEB sites, I also carry out their survey, both with the domain and the hosting.");
        $("#net").text("Consulting and Network");
        $("#net-det").text("Installation and configuration of local networks, and computer consulting.");
        $("#mant").text("Maintenance");
        $("#mant-det").text("Armed Computers, maintenance and repair of notebook's and PC's.");
        
        $("#habilidades").text("Skills");
        $("#skill-html").text("HTML & CSS");
        $("#skill-js").text("JavaScript");
        $("#skill-php").text("PHP");
        $("#skill-db").text("Data Base (SQL & MySQL)");

        $("#misproy").text("My Portfolio");
        $("#proy01").text(".:: Wedding Page ::.");
        $("#clickhere").text("Click here for more");
        
        
        $("#contactme").text("Contact Me");
        
        $("#txt-nombre").attr('placeholder','Full Name');
        $("#txt-email").attr('placeholder','E-mail');
        $("#txt-tema").attr('placeholder','Subject...');
        $("#txt-mensaje").attr('placeholder','Your Message');
        $("#btn-enviar").attr('value','Send Message');

        
        $("#derechos").text("All Rights Reserved - 2022");


    });
})
