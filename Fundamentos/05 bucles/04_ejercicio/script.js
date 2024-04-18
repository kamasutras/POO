function numeroMayorUno() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    document.getElementById("resultado").innerHTML = `El número mayor es: ${mayor}`;
}

// solucion 2 solamente usando un for

function numeroMayorDos() {
    const numeros = [];

    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    const mayor = Math.max(...numeros);

    document.getElementById("resultado2").innerHTML = `El número mayor es: ${mayor}`;
}
