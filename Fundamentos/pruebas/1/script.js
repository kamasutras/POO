function encontrarMayorAndMenor(array) {
    let mayor = array[0];
    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        } else if (array[i] < menor) {
            menor = array[i];
        }
    }

    let result = [mayor, menor];
    return result;
}

let result = encontrarMayorAndMenor([3, 6, 4, 6, 8, 20]);

alert("El número mayor del arreglo es: " + result[0]);
alert("El número menor del arreglo es: " + result[1]);
