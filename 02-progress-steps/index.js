$(document).ready(() => {
    $("#avance").click(() => { 
        cambiarColor("#2")
        activarBoton("#atras")
        desactivarBoton("#avance")
    });
    $("#atras").click(() => {
        eliminarColor("#2");
        desactivarBoton("#atras");
        activarBoton("#avance")
    });
});

cambiarColor = (nombreClase)=> {
    $(nombreClase).addClass("numero-activo");
}

desactivarBoton = (nombreBoton) => {
    $(nombreBoton).removeClass("boton-activo");
    $(nombreBoton).addClass("boton");
}

activarBoton = (nombreBoton) => {
    $(nombreBoton).addClass("boton-activo");
}

eliminarColor = (nombreClase)=> {
    $(nombreClase).removeClass("numero-activo");
}