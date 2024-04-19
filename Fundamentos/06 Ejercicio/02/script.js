/* Recibir im arreglo numerico con
numeros negativos y positivos .
Todos los valores negativos
reemplazarlos  por 0
*/




/*let j = 0;
while (j <= 5) {
    let valores = parseInt(prompt(`Por favor ingrese los valores: `));
    array.push(valores);
    j++;
}*/
//
function noNegative() {
    let array = [];
    let l = parseInt(prompt("Ingrese la cantidad de valores que va a ingresar: "));

    for (let j = 1; j <= l; j++) {
        let numero = parseInt(prompt("Ingrese los valores: "));
        array.push(numero);
    }

    for (let i = 0; i < l; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }

    // suma de los valores modificados
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    //let suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);


    document.getElementById("elemento").innerHTML = `<p  style="color:  rgb(127, 255, 200);">la suma de todos los elementos es:</p> <h2 style="color: rgb(255, 128, 0);">${suma}</h2>`;
}

//hola

// let array = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];


