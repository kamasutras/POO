function tablaDeN() {
    let n = parseInt(prompt("Ingresa numero para ver su tabla: "))
    for (let i = 0; i <= 11; i++) {
            document.getElementById("resultado").innerHTML = `El promedio de las calificaciones es:      ${ n }  X ${ i } = ${ n* i}` ;

    }


}


