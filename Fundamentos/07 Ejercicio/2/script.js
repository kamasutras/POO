function invertirSTR() {
    let strText = document.getElementById("strText").value;
    let reversedStr = "";

    for (let i = strText.length - 1; i >= 0; i--) {
        reversedStr += strText[i];
        resultado = `<h2>La palabra invertida se escribe:</h2> <br>${reversedStr}`
    }

    document.getElementById("resultado").innerHTML = resultado;
   // return reversedStr;
}