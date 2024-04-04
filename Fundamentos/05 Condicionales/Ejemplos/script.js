//  funcion identificar si es mayor de edad
function identificarMayorEdad() {
    let edad = prompt("Porfavor introdusca su edad: ");

    if (edad >= 18) {
        alert(`Eres mauyor de edad - tiene: ${edad}`)
    } else {
        alert(`Eres menor de edad - tiene ${edad}`);
    }
}