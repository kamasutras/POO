function tablaDeN() {
    let N = parseInt(document.getElementById("N").value);
    let resultado = `La tabla de multiplicacion de N es: <br>`;


    for (let i = 1; i <= 10; i++) {
        resultado += `<li>${N} x ${i} = ${i * N}</li><br>`;
    }


    document.getElementById("resultado").innerHTML = resultado;

}