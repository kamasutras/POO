function verificarUsuario() {
    let resultado = "";
    let nombreUsuario = prompt("Ingrese el nombre de usuario: ");
    let passwords = prompt("Ingrese su clave: ");

    const usuario = "usuario123";
    const contrasena = "secreto";

    if (nombreUsuario == usuario && passwords == contrasena) {
        resultado = `<h2>Acceso Concedido</h2>`;
    } else if(nombreUsuario != usuario && passwords != contrasena) {
        resultado = `<h2>Acceso Denegado</h2>`;
    } else {
        resultado = `<h2>Verifica el usuario o clave.</h2>`;
    }

    document.getElementById("verificarUsuario").innerHTML = resultado;
}