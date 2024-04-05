function verificarPositivoNegativo() {

    let numero = prompt("Ingrese un numero: ");

    if (numero > 0 ){
        document.getElementById("lista").innerHTML = `<h2>El numero <u>${numero}</u> es positivo</h2>` ;
    }  else if(numero < 0 ){
        document.getElementById("lista").innerHTML = `<h2>El numero <u>${numero}</u> es negativo</h2>` ;
    } else{
        document.getElementById("lista").innerHTML = `<h2>lo sentimos este numero  <u>${numero}</u> no es valido</h2>` ;
    }

}