function tablaDeN() {
    let N = parseInt(document.getElementById("N").value);
    let resultado = "";


    for (let i = 1; i <= 10; i++) {
        resultado += `${N} x ${i} = ${i * N}<br>`;
    }


    document.getElementById("resultado").innerHTML = resultado;

}