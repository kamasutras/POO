function verificarPuntos() {

    let puntaje = prompt("Ingrese la cantidad de puntos que obtuvo:  ");

    if (puntaje >= 90 ){
        document.getElementById("lista").innerHTML = `<h2>Exelente tienes <u>${puntaje}</u> puntos!</h2>` ;
    } else if(puntaje >= 70 && puntaje <= 89){
        document.getElementById("lista").innerHTML = `<h2>Buen trabajo tienes <u>${puntaje}</u> puntos!</h2>` ;
    }else{
        document.getElementById("lista").innerHTML = `<h2>Necesitas mejorar tienes <u>${puntaje}</u> puntos!</h2>` ;

    }
}

