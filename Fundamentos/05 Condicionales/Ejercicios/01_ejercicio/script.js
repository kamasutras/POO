//  funcion identificar si un numero es mayor que otro
function mayorMenor() {
    let resultado = "";
    let num1 = prompt("Porfavor introdusca su edad: ");
    let num2 = prompt("Porfavor introdusca su edad: ");


    if (num1 < num2) {
        resultado = (`el numero <h2> <u>${num1}</u></h2> es mayor que el numero <h2> ${num2}</h2>`)
    } else {
        resultado = (`el numero <h2> ${num2}</h2> es menor que el numero <h2> ${num1}</h2>`)
    } 

    document.getElementById("lista").innerHTML = resultado;
    // document.write(resultado)
}