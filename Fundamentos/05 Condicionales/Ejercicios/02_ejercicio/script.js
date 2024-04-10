function medirTemperatura() {
    let resultado = ""
    let temperatura = parseInt(prompt("Ingrese la temperatura actual en grados Celsius:"));

    if (temperatura < 0) {
        resultado = `<h2>Hace frio, hacen <u>${temperatura}</u> grados</h2>`;
    } else if (temperatura >= 0 && temperatura <= 25) {
        resultado = `<h2>La temperatura es agradable, hacen <u>${temperatura}</u> grados</h2>`;
    } else if(temperatura >= 25){
        resultado = `<h2>Hace  calor, hacen <u>${temperatura}</u> grados</h2>`;
    } else {
        resultado = `<h2><u>${temperatura}</u> Lo sentimos este valor no es valido</h2>`;
    }
    document.getElementById("Temperatura").innerHTML = resultado;
}

