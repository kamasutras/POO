function verificarPuntos() {

    let puntaje = prompt("Ingrese la cantidad de puntos que obtuvo:  ");

    if (puntaje >= 90 ){
        document.getElementById("Puntuacion").innerHTML = `<h2>Excelente! tienes <u>${puntaje}</u> puntos!</h2>` ;
    } else if(puntaje >= 70 && puntaje <= 89){
        document.getElementById("Puntuacion").innerHTML = `<h2>Buen trabajo! tienes <u>${puntaje}</u> puntos!</h2>` ;
    }else{
        document.getElementById("Puntuacion").innerHTML = `<h2>Necesitas mejorar :c / tienes <u>${puntaje}</u> puntos!</h2>` ;

    }
}

