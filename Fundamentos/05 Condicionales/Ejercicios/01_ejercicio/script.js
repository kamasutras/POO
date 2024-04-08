//  funcion identificar si un numero es mayor que otro
function mayorMenor() {
    let resultado = "";
    let num1 = prompt("Porfavor introdusca un numero: ");
    let num2 = prompt("Porfavor introdusca un segundo numero: ");


    if (num1 < num2) {
        resultado = (`el numero <h2> <u>${num2}</u></h2> es mayor que el numero <h2> ${num1}</h2>`)
    } else if ( num2 < num1){
        resultado = (`el numero <h2> ${num1}</h2> es menor que el numero <h2> ${num2}</h2>`)
    } else {
        resultado = (`el numero <h2> ${num2}</h2> es igual que el numero <h2> ${num1}</h2>`)
    }

    document.getElementById("numeroMayorOMenor").innerHTML = resultado;
    // document.write(resultado)
}