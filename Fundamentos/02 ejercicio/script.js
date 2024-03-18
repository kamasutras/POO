console.log("conectado correctamente");
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    const ahora = 2024;
    const fecha_nac = 2004;
    const calculo = ahora - fecha_nac;
    alert("tu edad actual es: " + calculo);
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {

let var1 = "hola mundo";
let var2 = "hola universo";

alert("el valor de var2 es: "+var2);
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1' , 'num2' y 'num3', resta 'num1' de 'num2', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
    let num1 = 20;
    let num2 = 15;
    let num3 = 20;

    let suma = num1+num2+num3;
    let resta = num1-num2;
    let multiplicar =num2*num3;
    let division = multiplicar/120;
alert("suma: "+suma + "\nresta: "+resta + "\nmultiplicacion: "+multiplicar + "\ndivision: "+division);

// Tu código aquí
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'Direccion' y 'n-casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
function manipularCadenas() {
    let direccion = "alpatacal";
    let numCasa = 9110;
    let mensaje = "Mi dirección es: " + direccion + " número de casa: " + numCasa;
    let longitud = mensaje.length;
    let antepenultimoCaracter = mensaje.charAt(longitud - 3);

    alert("La longitud del mensaje es: " + longitud + "\nEl antepenúltimo carácter es: " + antepenultimoCaracter);
}

/*
jercicio 5:
HTML:
•    Crear un Parrafo <p> con la siguiente descripción:
“Suma de Valores tomando índices de un arreglo”
•    Crear un nuevo Botón en HTML siguiendo el esquema de los demás ejercicios creados.
•    Llamar a la función “Suma_indices()” a través del atributo onclick.
JS:
•    Crear una función llamada “Suma_indices()”
•    Crear un arreglo  de largo 7 (1,2,3,4,5,6,7)
•    Sumar el ultimo valor, con el penúltimo más el 1 valor de las posiciones
•    Mostrar el resultado en el HTML con un Alert
*/
function sumaIndice(){ 
    let arreglo = [1, 2, 3, 4, 5, 6, 7];
    let ultimoValor = arreglo[arreglo.length - 1];
    let penultimoValor = arreglo[arreglo.length - 2];
    let primerValor = arreglo[0];
    let suma = ultimoValor + penultimoValor + primerValor;
    
    alert("El resultado de la suma es: " + suma);
}