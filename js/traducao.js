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
        $(".titulo").text("História");
        //main
          $(".h2").text("Uma breve história dos direitos humanos");
       
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluções");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visão Geral");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagamentos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Suporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ajuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Termos e Políticas");
    });
});

//en
$(function() {
    $(".en").click(function() {
        //header
        $(".me").children().eq(0).text("Home");
        $(".me").children().eq(1).text("Repertoire");
        $(".me").children().eq(2).text("Defense");
      
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $(".titulo").text("History");
        //main
          $(".h2").text("A brief history of human rights");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".me").children().eq(0).text("Casa");
        $(".me").children().eq(1).text("Repertorio");
        $(".me").children().eq(2).text("Defensa");
      
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $(".titulo").text("Historia");
        //main
        $(".h2").text("Breve historia de los derechos humanos");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluciones");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visión General");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ayuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");
    });
});