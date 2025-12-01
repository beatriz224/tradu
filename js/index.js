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
        $(".titulo").text("Repertório HD");
        //main
          $("h2").text("Site sobre direitos humanos");
       
        //sobre
        $("h3").text("Descrição das abas para melhor entendimento de como  funciona o site.");
        $("h4").text("História");
        $("p").text("Descreve o básico sobre a historia dos direitos humanos, para que usuário tenha um conhecimento prévio");
        $(".h8").text("Defesa");
        $(".d").text("Está aba contém os artigos contidos na declaração universal dos direitos humanos");
        $(".h12").text("Repertório");
             $(".r").text("Esta aba contém videos, pdfs e artigos sobre Direitos Humanos");
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

$(function () {
    $(".en").click(function () {
        //header
        $(".me").children().eq(0).text("Repertoire");
        $(".me").children().eq(1).text("History");
        $(".me").children().eq(2).text("Defense");

        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //seção
         //section
        $(".titulo").text("Repertoire  HD");
        //main
           $("h2").text("Website about human rights");
        $("h3").text("Description of the tabs for a better understanding of how the site works.");
        $("h4").text("History");
        $("p").text("It describes the basics of the history of human rights, so that the user has prior knowledge.");
        $(".h8").text("Defense");
        $(".d").text("This tab contains the articles included in the Universal Declaration of Human Rights.");
         $(".h12").text("Repertoire");
        $(".r").text("This tab contains videos, PDFs, and articles about Human Rights.");
       
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
        $(".me").children().eq(0).text("Repertorio");
        $(".me").children().eq(1).text("Hitoria");
        $(".me").children().eq(2).text("Defensa");

        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $(".titulo").text("Repertorio HD ");
        //main
         $("h2").text("Sitio wed de derechos humanos");
        $("h3").text("Descripción de las pestañas para una mejor comprensión del funcionamiento del sitio.");
        $("h4").text("Hitoria");
        $("p").text("Describe los conceptos básicos de la historia de los derechos humanos, para que el usuario tenga conocimientos previos.");
        $(".h8").text("defensa");
        $(".d").text("Esta pestaña contiene los artículos incluidos en la Declaración Universal de Derechos Humanos.");
         $(".h12").text("Repertorio");
        $(".r").text("Esta pestaña contiene vídeos, archivos PDF y artículos sobre Derechos Humanos.");
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