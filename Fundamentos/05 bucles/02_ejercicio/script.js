//solucion1
function bucleWhile() {
    let count = 1;
    let suma = 0;
    let array = [];
    let sumaStr = "";

    while (count < 10) {
        suma += count;
        sumaStr += count + "+";
        array.push(suma);
        count++;
    }

    suma += count;
    sumaStr += count + " = " + suma;
    document.getElementById("resultado").innerHTML = sumaStr;
}

// solucion 2
function sumarNumeros() {
    let suma = 0;
    let count = 1;
    let sumaStr = "";

    while (count <= 10) {
        suma += count;
        if (count < 10) {
            sumaStr += count + "+";
        } else {
            sumaStr += count /*+ " = " + suma*/;
        }
        count++;
    }
    document.getElementById("resultado2").innerHTML =  `${sumaStr} = ${suma} `;
}


// Solucion 3
function sumarHastaDiez() {
    let suma = 0;
    let count = 1;
    let array = [];
    while (count <= 10) {
        array.push(count);
        suma += count;
        count++;
    }
    document.getElementById("resultado3").innerHTML = `${array.join("+")}=  ${suma}`;
}