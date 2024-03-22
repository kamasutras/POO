function operandoMetodos() {
    let elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    // Metodo push()
    alert(`elementos sin modificar ${elementos}`);
    let agregados = [];
    elementos.push(22, 24, 26, 28, 30);
    agregados.push(22, 24, 26, 28, 30);

    alert(`El método push() sirve para agregar uno o más elementos al final de un arreglo:\n ${elementos}\nValores agregados: ${agregados}`);

    // Metodo unshift()
    let inicioAgregados = [];
    elementos.unshift(-8, -6, -4, -2, 0);
    inicioAgregados.push(-8, -6, -4, -2, 0);

    alert(`El método unshift() sirve para agregar uno o más elementos al inicio de un arreglo:\n${elementos}\nValores agregado: ${inicioAgregados}`);

    //  Metodo shift()
    let primerValor = [];
    elementos.shift();
    primerValor.push(elementos.shift());

    alert(`El metodo shift() sirbe para eliminar el primer elemento de un arreglo:\n ${elementos}\nel valor eliminmado es: ${primerValor}`);

    // Metodo pop()
    const eliminados = [];
    elementos.pop();
    eliminados.push(elementos.pop());

    alert(`El metodo pop() sirbe para eliminar el ultimo elemento de un arreglo:\n${elementos} \nel valor eliminado: ${eliminados}`);
}




function modificarMensaje() {
    const mensaje = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let valoresEliminados = [];

    // Guarda valores eliminados
    valoresEliminados.push(mensajeModificado.shift());
    valoresEliminados.push(mensajeModificado.shift());
    valoresEliminados.push(mensajeModificado.pop());
    valoresEliminados.push(mensajeModificado.pop());
    valoresEliminados.push(mensajeModificado.pop());
    valoresEliminados.push(mensajeModificado.pop());
    valoresEliminados.push(mensajeModificado.pop());
    valoresEliminados.push(mensajeModificado.pop());
    valoresEliminados.push(mensajeModificado.pop());

    // agregar valores nuevos
    mensajeModificado.unshift("Nosotros");
    mensajeModificado.unshift("Somos");
    mensajeModificado.push("Los");
    mensajeModificado.push("Estudiantes");
    mensajeModificado.push("De");
    mensajeModificado.push("Programacion");
    mensajeModificado.push("Los\n");
    mensajeModificado.push("Mejores");
    mensajeModificado.push("Del mundo");

    alert(`Mensaje inicial:\n ${mensaje}`);
    alert(`Valores eliminados:\n  ${valoresEliminados}`);
    alert(`Mensaje modificado:\n  ${mensajeModificado}`);

}