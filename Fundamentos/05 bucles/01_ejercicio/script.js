function bucleWhile() {
    // contador que empiece de 0 y aumente de 5 en 5 hasta llegar a 100
    let contador = 0;
    let array = [];
    // bucle while

    while (contador <= 100) {
        array.push(contador);
        contador += 5;

    }

    document.getElementById("resultado").innerHTML = array;

}