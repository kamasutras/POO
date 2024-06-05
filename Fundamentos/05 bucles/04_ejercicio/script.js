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


function obtenerNumeroMayor() {
    let arrayNum = [];
    let numMayor = 0;

    for (let i=0; i<5; i++) {
        let numero = parseInt(prompt("Ingresa un numro"));
        arrayNum.push(numero);
    //    if (numero > numMayor)numMayor = numero;
        numMayor = (numMayor < numero) ? numero : numMayor;
        document.getElementById("resultado").innerHTML = `De los numeros ${arrayNum.join(", ")}<br> El número mayor es: <b>${numMayor}</b>`;
    }
}



/* function obtenerNumeroMayor() {
    let arrayNum = [];
    let numeroMayor = 0;

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Ingrese un número:"));
        arrayNum.push(numero);

        if (numero > numeroMayor) {
            numeroMayor = numero;
        }
    }

    document.getElementById("resultado").innerHTML = "El número mayor es: " + numeroMayor;
} */

