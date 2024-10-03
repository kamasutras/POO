// Seleccionamos los elementos
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".nav img");
var h3 = document.querySelector("h3");
var petImg = document.querySelector("#pet-img");


// Función para cambiar la imagen
function cambiarImagen() {
    var petImg = document.querySelector("#pet-img");
    petImg.src = "src/dog.jpg";

}

// Función para activar el modo oscuro
function activarModoOscuro(element) {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        element.innerText = "Cambiar al modo claro";
    } else {
        element.innerText = "Cambiar al modo oscuro";
    }
}

function cambiarNuevoTitulo() {
    document.title = "Nuevo Título"; 
    var h1 = document.getElementById("title");
    h1.innerText = "Título Cambiado"; 
}
