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

function noNegative() {
    let array = [];
    let l = parseInt(prompt("Ingrese la cantidad d edatos numericos de su arreglo [n]: "));
    
    for (let j = 1; j <= l; j++) {
        let numero = parseInt(prompt("Ingrese los valores de su arreglo: "));
        array.push(numero);
    }

    for (let i = 0; i < l; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }

    document.getElementById("elemento").innerHTML = `la suma de todos los elementos es: <h2>${array}`;
}



// let array = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];


