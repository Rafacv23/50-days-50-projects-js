const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");
const imagen5 = document.getElementById("imagen5");


imagen1.addEventListener("click", ()=>{
    imagen1.classList.toggle("imagen2");
    cambiarTamaño(imagen2)
    cambiarTamaño(imagen3)
    cambiarTamaño(imagen4)
    cambiarTamaño(imagen5)
})

imagen2.addEventListener("click", ()=>{
    imagen2.classList.toggle("imagen2");
    cambiarTamaño(imagen1)
    cambiarTamaño(imagen3)
    cambiarTamaño(imagen4)
    cambiarTamaño(imagen5)
})

imagen3.addEventListener("click", ()=>{
    imagen3.classList.toggle("imagen2");
    cambiarTamaño(imagen1)
    cambiarTamaño(imagen2)
    cambiarTamaño(imagen4)
    cambiarTamaño(imagen5)
})

imagen4.addEventListener("click", ()=>{
    imagen4.classList.toggle("imagen2");
    cambiarTamaño(imagen1)
    cambiarTamaño(imagen2)
    cambiarTamaño(imagen3)
    cambiarTamaño(imagen5)
})

imagen5.addEventListener("click", ()=>{
    imagen5.classList.toggle("imagen2");
    cambiarTamaño(imagen1)
    cambiarTamaño(imagen2)
    cambiarTamaño(imagen3)
    cambiarTamaño(imagen4)
})

cambiarTamaño = (imagen) => {
    if(imagen.classList.contains("imagen2")){
        imagen.classList.remove("imagen2");
    }
}