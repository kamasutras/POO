function operandoMetodos() {
    let elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    // Metodo push()
    alert(`elementos sin modificar ${elementos}`);
    let agregados = [];
    elementos.push(22, 24, 26, 28, 30);
    agregados.push(22, 24, 26, 28, 30);
    alert(`El método push() sirve para agregar uno o más elementos al final de un arreglo:\n ${elementos}\nValores agregados: ${agregados}`);

    // Metodo unshift()
    elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let inicioAgregados = [];
    elementos.unshift(-8, -6, -4, -2, 0);
    inicioAgregados.push(-8, -6, -4, -2, 0);
    alert(`El método unshift() sirve para agregar uno o más elementos al inicio de un arreglo:\n${elementos}\nEl valor agregado es: ${inicioAgregados}`);

    //  Metodo shift()
    let primerValor = [];
    elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    elementos.shift();
    primerValor.push(elementos.shift());
    alert(`El metodo shift() sirbe para eliminar el primer elemento de un arreglo:\n ${elementos}\nel valor eliminmado es: ${primerValor}`);

    // Metodo pop()
    const eliminados = [];
    elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    elementos.pop();
    eliminados.push(elementos.pop());

    alert(`El metodo pop() sirbe para eliminar el ultimo elemento de un arreglo:\n${elementos} \nel valor eliminado: ${eliminados}`);
}




function modificarMensaje() {
    let mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"]

    mensajeInicial.shift(); // Eliminar "Hola"
    mensajeInicial.unshift("Somos", "nosotros");
    mensajeInicial.push("mejores", "del mundo");


    alert(` ${mensajeInicial}`);
}