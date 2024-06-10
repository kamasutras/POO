function cambiarFondo(elemento) {
    console.log("elemento clickeado", elemento);
    elemento.style.backgroundColor = 'yellow';
    elemento.style.color = 'black'; // Cambia el color de fondo del botón
    elemento.textContent = 'Clickeado!'; // Cambia el texto del botón
}
