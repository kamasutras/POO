function bucleWhile() {
    // contador que empiece de 0 y aumente de 5 en 5 hasta llegar a 100
    let count = 0;
    let array = [];
    // bucle while

    while (count <= 100) {
        array.push(count);
        count += 5;
    }

    document.getElementById("resultado").innerHTML = array;

}