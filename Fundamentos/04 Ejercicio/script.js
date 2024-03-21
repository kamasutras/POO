function operandoMetodos() {
    let elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    // Metodo push()
    alert(`elementos sin modificar ${elementos}`);
    elementos.push(22, 24, 26, 28, 30);
    alert(`El metodo push() sirbe para agregar uno o mas elementos al final de un arreglo: ${elementos}`);

    // Metodo unshift()
    elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    elementos.unshift(-8, -6, -4, -2, 0)
    alert(`El metodo unshift() sirbe para agregar uno o mas elementos al inicio de un arreglo: ${elementos}`);

    // Metodo shift()
    elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    elementos.shift();
    alert(`El metodo shift() sirbe para eliminar el primer elemento de un arreglo: ${elementos}`);

    // Metodo pop()
    elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    elementos.pop();
    alert(`El metodo pop() sirbe para eliminar el ultimo elemento de un arreglo: ${elementos}`);
}




function modificarMensaje() {
    let mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"]

    mensajeInicial.push("mejores"); 
    mensajeInicial.unshift("Somos"); 
    
    alert(` ${mensajeInicial}`)
    }