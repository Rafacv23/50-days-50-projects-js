$(document).ready( () =>{
    $(".playstation").hover(() => {
        agrandar(".playstation")
        $(".playstation::before").width("70%");
        empequeñecer(".xbox")
    },() => {
    recuperarTamaño(".playstation")
    recuperarTamaño(".xbox")
    }
);

$(".xbox").hover(() => {
    agrandar(".xbox")
    empequeñecer(".playtation")
},() => {
recuperarTamaño(".playstation")
recuperarTamaño(".xbox")
}
);

agrandar = (nombreClase) => {
    $(nombreClase).width("70%");
};

recuperarTamaño = (nombreClase) => {
    $(nombreClase).width("50%");
}

empequeñecer = (nombreClase) => {
    $(nombreClase).width("30%");
}
})