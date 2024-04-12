// solucion 1
function bucleWhile() {
    let numero = 0;
    let count = 0;
    let numerosPares = [];

    while (count < 10) {
        numero += 2;
        numerosPares.push(numero);
        count++;
    }
    document.getElementById("resultado").innerHTML = numerosPares;
}

// solucion 2
function bucleWhileCount() {
    let count = 2;
    let array = [];

    // bucle while
    while (count <= 20) {
        array.push(count);
        count += 2;
    }

    document.getElementById("resultado2").innerHTML = array;
}