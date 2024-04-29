function invertirSTR() {
    let strText = document.getElementById("strText").value;
    let reverseStr = "";

    for (let i = strText.length - 1; i >= 0; i--) {
        reverseStr += strText[i];
        resultado = `<h2>La palabra invertida se escribe:</h2> <br>${reverseStr}`
    }

    document.getElementById("resultado").innerHTML = resultado;
   // return reversedStr;
}