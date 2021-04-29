$(document).ready(function(){
    var cuadro = $("#cuadro");
    var boton1 = $("#boton1");
    var boton2 = $("#boton2");
    var boton3 = $("#boton3");

    cuadro.mouseenter(function(){
        $(this).css("background", "pink");
    
    });

    cuadro.mouseleave(function(){
        $(this).css("background","blue");
    });
    
    boton1.click(function(){
        $("#ocultar").hide(2000);
    }); 

    boton2.click(function(){
        $("#ocultar").show(2000);
    }); 
    
    boton3.click(function(){
        $("#cambio").text("Boton para agregar texto funciona");
        
    });



});
