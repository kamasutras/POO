

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


