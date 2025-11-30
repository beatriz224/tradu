//PT
$(function () {
    $(".br").click(function () {
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
        $(".p8").text("A história dos direitos humanos é uma evolução contínua, começando com a influência da religião na Idade Média e avançando para o pensamento racional no Iluminismo, que defendeu a liberdade e a igualdade. Marcos importantes incluem a Carta Magna de 1215, que limitou o poder do rei, e a Declaração Universal dos Direitos Humanos de 1948, que formalizou os direitos para todos os seres humanos em um documento único. No  Brasil, houve avanços significativos após a redemocratização, como a Constituição de 1988, mas desafios como desigualdade social e violência ainda persistem.");
        $(".h3").text("Idade Média e Modernidade");
        $(".p6").text("Idade Média: A ideia de direitos estava ligada à religião, com a vontade divina como base, o que  frequentemente reforçava a superioridade de alguns sobre outros, como na escravidão.");
        $("p7").text(" Modernidade: A influência do Iluminismo rompeu com o vínculo teológico e religioso, introduzindo o conceito  de direito natural com base na razão, liberdade e igualdade.");
        $(".h6").text("Marcos históricos");
        $(".p3").text("Convenções de Genebra (a partir de 1864): Documentos que tratam do direito humanitário, especialmente em         tempos de conflito, e estabeleceram as bases para a Cruz Vermelha.   Declaração Universal dos Direitos Humanos (1948): Após a Segunda Guerra Mundial, a ONU adotou este documento fundamental que reúne 30 artigos de direitos inerentes a todos os seres humanos, independentemente de raça, cor, gênero ou religião");
        $(".p4").text("Revolução Americana e Francesa (século XVIII): Influenciadas pelo Iluminismo, essas revoluções buscaram estabelecer direitos baseados na liberdade e igualdade.");
          $(".p5").text("Carta Magna (1215): Um documento inglês assinado pelo Rei João, considerado um precursor dos   direitos           humanos, que limitou o poder real e estabeleceu princípios como proteção contra impostos excessivos e o        direito a um julgamento justo");
         $(".h9").text("Avanços recentes e desafios");
          $(".p1").text("Novas gerações de direitos: Existe a defesa da inclusão de direitos relacionados à tecnologia, à bioética e   aos direitos específicos das mulheres, impulsionada por movimentos sociais e feministas.");
                $(".p2").text("No Brasil: A Constituição de 1988, após o fim da ditadura militar, representou um avanço significativo, mas  problemas como desigualdade social, racismo e violência ainda são grandes desafios para a plena realização dos direitos humanos");
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
          $(".p8").text("The history of human rights is a continuous evolution, beginning with the influence of religion in the Middle Ages and advancing to rational thought in the Enlightenment, which championed freedom and equality.Important, milestones include the Magna Carta of 1215, which limited the power of the king, and the Universal Declaration of Human Rights of 1948, which formalized rights for all human beings in a single document.In Brazil, there have been significant advances after redemocratization, such as the 1988 Constitution, but challenges such as social inequality and violence still persist");
          $(".h3").text("Middle Ages and Modernity");
        $(".p6").text("Middle Ages: The idea of ​rights was linked to religion, with divine will as its basis, which frequently reinforced the superiority of some over others, as in slavery.");
        $(".p7").text("Modernity: The influence of the Enlightenment broke with the theological and religious bond, introducing the concept of natural law based on reason, liberty, and equality.");
        $(".h6").text("Historical landmarks");
        $(".p3").text("Geneva Conventions (from 1864): Documents dealing with humanitarian law, especially in times of conflict, and establishing the basis for the Red Cross. Universal Declaration of Human Rights (1948): After World War II, the UN adopted this fundamental document that brings together 30 articles of rights inherent to all human beings, regardless of race, color, gender, or religion.'");
          $(".p4").text("American and French Revolutions (18th century): Influenced by the Enlightenment, these revolutions sought to establish rights based on liberty and equality.");
            $(".p5").text("Magna Carta (1215): An English document signed by King John, considered a precursor to human rights, which limited royal power and established principles such as protection against excessive taxation and the right to a fair trial.");
              $(".h9").text("Recent advances and challenges"); 
            $(".p1").text("New generations of rights: There is a defense of the inclusion of rights related to technology, to bioethics and to the specific rights of women, driven by social and feminist movements.");
              
                  $(".p2").text("In Brazil: The 1988 Constitution, after the end of the military dictatorship, represented a significant advance, but problems such as social inequality, racism, and violence are still major challenges to the full realization of human rights.");
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
        $(".p8").text("La historia de los derechos humanos está en continua evolución, comenzando con la influencia de la religión en la Edad Media y avanzando hasta el pensamiento racional de la Ilustración, que defendió la libertad y la igualdad. Hitos importantes incluyen la Carta Magna de 1215, que limitó el poder del rey, y la Declaración Universal de los Derechos Humanos de 1948, que formalizó los derechos de todos los seres humanos en un solo documento. En Brasil, se han producido avances significativos tras la redemocratización, como la Constitución de 1988, pero aún persisten desafíos como la desigualdad social y la violencia.");
        $(".h3").text("Edad Media y Modernidad");
        $(".p6").text("Edad Media: La idea de los derechos estaba vinculada a la religión, con la voluntad divina como base, lo que frecuentemente reforzaba la superioridad de unos sobre otros, como en el caso de la esclavitud.");
        $(".p7").text("Modernidad: La influencia de la Ilustración rompió el vínculo teológico-religioso, introduciendo el concepto de ley natural basado en la razón, la libertad y la igualdad.");
        $(".h6").text("Hitos históricos");
            $(".p3").text("Convenios de Ginebra (desde 1864): Documentos que abordan el derecho humanitario, especialmente en tiempos de conflicto, y que establecen las bases de la Cruz Roja. Declaración Universal de los Derechos Humanos (1948): Tras la Segunda Guerra Mundial, la ONU adoptó este documento fundamental que reúne 30 artículos sobre derechos inherentes a todos los seres humanos, independientemente de su raza, color, género o religión.");
            $(".p4").text("Revoluciones americana y francesa (siglo XVIII): Influenciadas por la Ilustración, estas revoluciones buscaron establecer derechos basados ​​en la libertad y la igualdad.");
          $(".p5").text("Carta Magna (1215): Documento inglés firmado por el rey Juan, considerado precursor de los derechos humanos, que limitaba el poder real y establecía principios como la protección contra impuestos excesivos y el derecho a un juicio justo.");
            $(".h9").text("Avances y desafíos recientes"); 
          $(".p1").text("Nuevas generaciones de derechos: Se defiende la inclusión de derechos relacionados con la tecnología,con la bioética y con los derechos específicos de las mujeres, impulsada por movimientos sociales y feministas.");
            
                $(".p2").text("En Brasil: La Constitución de 1988, tras el fin de la dictadura militar, representó un avance significativo, pero problemas como la desigualdad social, el racismo y la violencia siguen siendo grandes desafíos para la plena realización de los derechos humanos.");
                
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