function calificar() {
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        let calificacion = parseFloat(prompt(`Ingrese la calificación  ${i + 1} :`));
        suma += calificacion;
    }

    let promedio = suma / 5;

    document.getElementById("resultado").innerHTML = `El promedio de las calificaciones es: ${promedio}`;

}