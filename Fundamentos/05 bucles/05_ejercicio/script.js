function obtenerPares() {
    let N = parseInt(prompt("Ingrese la cantidad de numeros pares que desea encontrar:"));
    let pares = [];

    for (let i = 1; i <=  N; i++) {
     //   if (i % 2 === 0) {    //verificar si es par
            pares.push(i*2);
      // } 
    }

    document.getElementById("resultado").innerHTML = `Los primeros  ${N}  números pares son:<br>  ${pares.join(", ")}`;

}