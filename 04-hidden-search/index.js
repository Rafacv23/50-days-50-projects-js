const boton = document.getElementById("boton-busqueda");

boton.addEventListener("click", () => {
    boton.classList.add("activo");
    showPlaceholder()
})

showPlaceholder = () => {
    boton.placeholder = "Buscar..."
}
