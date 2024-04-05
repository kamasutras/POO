//  funcion identificar si es mayor de edad
function identificarMayorEdad() {
    let resultado = "";
    let edad = prompt("Porfavor introdusca su edad: ");

    if (edad >= 18) {
        resultado = (`Eres mauyor de edad - tiene: <h2> ${edad}</h2>`)
    } else {
        resultado = (`Eres menor de edad - tiene <h2> ${edad}</h2>`);
    }

    document.getElementById("lista").innerHTML = resultado;
 //   document.write(resultado)
}