function verificarPuntos() {
    let resultado = "";
    let puntaje = parseInt(prompt("Ingrese la cantidad de puntos que obtuvo:  "));

    if (puntaje >= 90) {

        resultado = `<h2>Excelente! tienes <u>${puntaje}</u> puntos!</h2>`;
    } else if (puntaje >= 70 && puntaje <= 89) {
        resultado = `<h2>Buen trabajo! tienes <u>${puntaje}</u> puntos!</h2>`;
    } else if(puntaje < 89) {
        resultado = `<h2>Necesitas mejorar :c / tienes <u>${puntaje}</u> puntos!</h2>`;
    } else{
        resultado = `<h2><u>${puntaje}</u> Lo sentimos este valor no es valido</h2>`;
    }
    document.getElementById("Puntuacion").innerHTML = resultado;
}

