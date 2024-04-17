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
    let l = parseInt(prompt("cuantos numeros quiere ingresar: "))
    
    for (let j = 1; j <= l; j++) {
        let numero = parseInt(prompt("Ingrese los valores"));
        array.push(numero);
    }

    for (let i = 0; i < l; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }

    document.getElementById("elemento").innerHTML = `Los valores sin modificar: <h2>${array}</h2><br>
    Los valores negativos han sido modificados: <h2>${array}</h2>`;
}



// let array = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];


