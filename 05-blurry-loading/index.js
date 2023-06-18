let numero = 0;
const cargando = document.getElementById("cargando");

let int = setInterval(blurring, 30)

function blurring() {
    numero++
    if (numero > 99) {
    clearInterval(int)
    $("#cargando").hide();
    }
    cargando.innerText = numero + "%"
}
