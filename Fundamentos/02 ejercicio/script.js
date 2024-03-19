console.log("conectado correctamente");
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function calcularEdad() {
    const ahora = 2024;
    const fecha_nac = 2004;
    const calculo = ahora - fecha_nac;
    alert(`mi edad actual es: ${calculo}`);
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {

    let var1 = 777;
    let var2 = var1;

    alert(`el valor de var2 es:  ${var2}`);
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1' , 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
    let num1 = 20;
    let num2 = 20;
    let num3 = 2;

    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let producto = num2 * num3;
    let division = producto / 120;
    // alert("Suma: " + suma + "\nResta: " + resta + "\nMultiplicacion: " + producto + "\nDivision: " + division);
    alert(`Suma: ${suma} \nResta: ${resta} \nMultiplicacion: ${producto}  \nDivision:  ${division}`);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'Direccion' y 'n-casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
function manipularCadenas() {
    let direccion = "AV. alpatacal";
    let numCasa = "20210";
    let mensaje = direccion + " " + numCasa;

    alert(`La longitud del mensaje es: ${mensaje.length} \nEl antepenúltimo carácter es: ${mensaje[mensaje.length - 3]}`);
}



//Crear una función llamada “Suma_indices()”
//  Crear un arreglo  de largo 7 (1,2,3,4,5,6,7)
//  Sumar el ultimo valor, con el penúltimo más el 1 valor de las posiciones
//  Mostrar el resultado en el HTML con un Alert

function sumaIndice() {
    let arreglo = [1, 2, 3, 4, 5, 6, 7];
    let ultimoValor = arreglo[arreglo.length - 1];
    let penultimoValor = arreglo[arreglo.length - 2];
    let primerValor = arreglo[0];
    let suma = ultimoValor + penultimoValor + primerValor;

    alert(`El resultado de la suma es:  ${suma}`);
}
