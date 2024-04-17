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

function noNegative(arr) {
    let array = [];
    let l = parseInt(prompt("cuantos numeros quiere ingresar: "));

    for (let j = 1; j <= l; j++) {
        let numero = parseInt(prompt("Ingrese los valores: "));
        array.push(numero);
    };
    document.getElementById("elemento").innerHTML = `Los valores sin modificar: <h2>${array.join(", ")}</h2>`;

    for (let i = 0; i < l; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    };


    // suma de los valores modificados
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    //let suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);

    document.getElementById("elemento").innerHTML += `Los valores negativos han sido modificados: <h2>${array.join(", ")}</h2>`;
    document.getElementById("result").innerHTML += `La suma de los valores  modificados: <h2>${suma}</h2>`;

};

/* Recordatorio: para no alterar los array en este caso 
se imprime el mensaje fuera de los bucles y antes de hacer 
cada  modificacion en este caso convertir negavtivos en 0
*/
