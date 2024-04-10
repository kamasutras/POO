function verificarPositivoNegativo() {
    let resultado = "";
    let numero = parseInt(prompt("Ingrese un numero: "));

    if (numero > 0) {
        resultado = `<h2>El numero <u>${numero}</u> es positivo</h2>`;
    } else if (numero < 0) {
        resultado = `<h2>El numero <u>${numero}</u> es negativo</h2>`;
    } else {
        resultado = `<h2>lo sentimos este numero  <u>${numero}</u> no es valido</h2>`;
    }
    document.getElementById("positivoNegativo").innerHTML = resultado;
}