function verificarUsuario() {
    let resultado = "";
    let nombreUsuario = prompt("Ingrese el nombre de usuario: ");
    let password = prompt("Ingrese su clave: ");

    if (nombreUsuario != "usuario123") {
        resultado = `<h2>Acceso Denegado</h2>`;
    } else if (password != "secreto") {
        resultado = `<h2>Acceso Denegado</h2>`;
    } else if( nombreUsuario == "usuario123" && password == "secreto"){
        resultado = `<h2>Acceso Concedido</h2>`;
    } 
    document.getElementById("verificarUsuario").innerHTML = resultado;
}