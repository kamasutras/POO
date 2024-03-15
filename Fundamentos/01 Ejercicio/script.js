// ejerciocio 01 - Creacion de variables
//una variable global de tipo var para mostrar el alcance global
// Variable global con var 
var global = "Global";
// Variable local con let
let total = "Local";
let myDecimal = "15.6";
let numEntero = "7";
let boolean = true;
let indefinida;
let varNula = null;
// varialble con Const 
const constante = "Constante";
const frutas =  [[1, "melones"],[2, "peras"],[3, "sandias"],[4, "manzanas"]];
/* const biografia = {
    nombre = "ignacio", nacionalidad = "chilena", profesion = "Estudiante del VVH"
    console.log("Mi nombre es " + nombre + " soy de nacionalidad " + nacionalidad  + " y soy " +  profesion)
}; */
console.log("Variables locales: " + global + " Variables Locales: " + " y " + "Variables constantes")
console.log("mi decimal es, " + myDecimal);
console.log("mi numero entero es, " + numEntero);
console.log("mi booleano es: " + boolean);
function suma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    return resultado; 
}
console.log("la suma de 10+5 es = "+ suma(10, 5));


