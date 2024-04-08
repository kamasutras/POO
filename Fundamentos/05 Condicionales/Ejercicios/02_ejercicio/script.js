function medirTemperatura() {

    let temperatura = parseInt(prompt("Ingrese la temperatura actual en grados Celsius:"));

    if (temperatura < 0) {
        document.getElementById("Temperatura").innerHTML = `<h2>Hace frio, hacen <u>${temperatura}</u> grados</h2>` ;
    } else if (temperatura >= 0 && temperatura <= 25) {
        document.getElementById("Temperatura").innerHTML = `<h2>La temperatura es agradable, hacen <u>${temperatura}</u> grados</h2>`;
    } else {
        document.getElementById("Temperatura").innerHTML = `<h2>Hace  calor, hacen <u>${temperatura}</u> grados</h2>`;
    }
}

