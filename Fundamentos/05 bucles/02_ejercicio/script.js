function bucleWhile() {

    let contador = 1;
    let suma = 0;
    let array = [];
   //ch
    //bucle while

    while (contador <= 10) {
        array.push(suma)
        suma += contador;
        contador++;
    }
    document.getElementById("resultado").innerHTML = array;
    document.getElementById("resultado2").innerHTML = suma;
   // alert(suma);
}