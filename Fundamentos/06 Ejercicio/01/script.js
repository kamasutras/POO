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
    document.getElementById("elemento").innerHTML = `<p  style="color:  rgb(127, 255, 200);">Los valores sin modificar:</p> <h2 style="color: rgb(255, 128, 0);">${array.join(", ")}</h2>`;

    for (let i = 0; i < l; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    };

    document.getElementById("elemento").innerHTML += `<p  style="color:  rgb(127, 255, 200);">Los valores negativos han sido modificados:</p> <h2 style="color: rgb(255, 128, 0);">${array.join(", ")}</h2>`
};

/* Recordatorio: para no alterar los array en este caso 
se imprime el mensaje fuera de los bucles y antes de hacer 
cada  modificacion en este caso convertir negavtivos en 0
*/
