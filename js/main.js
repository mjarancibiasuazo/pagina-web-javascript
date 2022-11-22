$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
         //SLIDER
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });


    }
      //POSTS (Creamos un array de json)
      //Colección de objetos JSON

      if(window.location.href.indexOf('index') > -1){
      var posts = [
        {
            title: 'Prueba de Titulo 1',
            date: 'Publicado el día '+moment().date() +' de ' +moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has' 
        },
        {
            title: 'Prueba de Titulo 2',
            date: 'Publicado el día '+moment().date() +' de ' +moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has' 
        },
        {
            title: 'Prueba de Titulo 3',
            date: 'Publicado el día '+moment().date() +' de ' +moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has' 
        },
        {
            title: 'Prueba de Titulo 4',
            date: 'Publicado el día '+moment().date() +' de ' +moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has' 
        },
        {
            title: 'Prueba de Titulo 5',
            date: 'Publicado el día '+moment().date() +' de ' +moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has' 
        }
      ];
      
     posts.forEach((item, index) =>{
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
            ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
    </article>
        
    `;
        $("#posts").append(post);

     });

    }

     //Selector de temas
     var theme = $("#theme");
     $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
     });

     var theme = $("#theme");
     $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
     });

     var theme = $("#theme");
     $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
     });

     //Botón Arriba(Scroll)
     $(".subir").click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
     });

     //Login Falso
     $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        //Indice y Variable
        localStorage.setItem("form_name", form_name);
     });

     var form_name = localStorage.getItem("form_name");
     
     if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        
        $("#about p").html("<br><strong>Bienvenido, "+form_name+"</strong>");
        //link cerrar sesión
        about_parrafo.append("<a href='#' id='logout'>CerrarSesión</a>");
        
        $("#login").hide();//ocultar login

        $("#logout").click(function(){
            localStorage.clear();//se borran las variables de la sesión
            location.reload(); //actualizo la ventana 
        });
     }
     
     //Acordeon
     if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();


    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        
        }, 1000);
        
    }

    //Validación Formulario
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true

        });
    
    
    
    }
     
});