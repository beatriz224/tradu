//PT
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".me").children().eq(0).text("Home");
        $(".me").children().eq(1).text("Repertório");
        $(".me").children().eq(2).text("Defesa");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
         //seção
        $(".titulo").text("Repertório");
        //main
          $(".h2").text("Uma breve história dos direitos humanos");
        
        //sobre
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
         $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
         $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
           //rodape
                $(".fo").text("Repertório HD");
                  $(".h12").text("Créditos");
                           $(".15").text("Redes Socias");
                  $(".18").text(" Créditos a pessoas que contribuiram para a defesa dos direitos humanos ");
                           $(".rodape-baixo").text(" Todos os direitos reservados");
                  $("").text("");
                           $("").text("");
                  $("").text("");
         
    });
});

//en
$(function () {
    $(".en").click(function () {
        //header
        $(".me").children().eq(0).text("Home");
        $(".me").children().eq(1).text("History");
        $(".me").children().eq(2).text("Defense");

        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //seção
         //section
        $(".titulo").text("Repertoire");
        //main
           $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
         $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
         $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
          //footer
                  $(".fo").text("H.D. Repertoire");

          $(".h12").text("Credits");
            $(".15").text("Social media");
              $(".18").text("Credit is due to individuals who have contributed to the defense of human rights.");
                $(".rodape-baixo").text("All rights reserved");
                  $("").text("");
                


    });
});


//Espanõl
$(function () {
    $(".es").click(function () {
        //encabezamiento
        $(".me").children().eq(0).text("Casa");
        $(".me").children().eq(1).text("Hitoria");
        $(".me").children().eq(2).text("Defensa");

        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $(".titulo").text("Repertorio");
        //main
           $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
         $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
         $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
        $("").text("");
             //rodape
                $(".fo").text("Repertorio  H.D.");

                  $(".h12").text("Créditos");
          $(".15").text("redes sociales");
            $(".18").text("Se debe dar crédito a las personas que han contribuido a la defensa de los derechos humanos.");
              $(".rodape-baixo").text("Reservados todos los derechos");
                $("").text("");
                  $("").text("");
            });
});