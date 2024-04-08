function verificarUsuario() {

    let nombreUsuario = prompt("Ingrese el nombre de usuario: ");
    let password = prompt("Ingrese su clave: ");

    if (nombreUsuario != "usuario123" ){
        document.getElementById("verificarUsuario").innerHTML = `<h2>Acceso Denegado</h2>` ;

    } else if (password != "secreto") {
        document.getElementById("verificarUsuario").innerHTML = `<h2>Acceso Denegado</h2>` ;
    } else {
        document.getElementById("verificarUsuario").innerHTML = `<h2>Acceso Concedido</h2>`;
    }
}