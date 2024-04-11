function bucleWhile() {
    let contador = 1;
    let arrayPares = [];
    while (arrayPares.length < 10) {
        let numero = parseInt(prompt("Ingresa un numero: "));

        if (numero % 2 === 0) {
            arrayPares.push(numero);
        }
        contador++;
    }
    document.getElementById("resultado").innerHTML = arrayPares;
}