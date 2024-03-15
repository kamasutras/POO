// ejerciocio 01 - Creacion de variables
//una variable global de tipo var para mostrar el alcance global
var global = "Global";
let local = "Local";
const constante = "Constante";
// Variable local con let

let myDecimal = "15.6";
let numEntero = "7";
let string="cadena";
let booleanTrue = true;
let booleanFalse = false;

let indefinida;
let varNula = null;
// varialble con Const 

const frutas =  [[1, "melones"],[2, "peras"],[3, "sandias"],[4, "manzanas"]];
/* const biografia = {
    nombre = "ignacio", nacionalidad = "chilena", profesion = "Estudiante del VVH"
    console.log("Mi nombre es " + nombre + " soy de nacionalidad " + nacionalidad  + " y soy " +  profesion)
}; */

function suma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    return resultado; 
}
//console.log("la suma de 10+5 es = "+ suma(10, 5));


console.log("Variable const constante:\n"+constante+"Variable var global:\n"+global+"\nVariable (let) local:\n"+local+"\nVariable numero Decimal:\n"+
myDecimal+"\nVariable numero entero:\n"+numEntero+"\nVariable String (Cadena):\n"
+string+"\nBoolean true (verdadero):\n"+booleanTrue+"\nBoolean false (falso):\n"+
booleanFalse+"\nVariable indefinida:\n"+indefinida+"\nVariable NULL:\n"+
varNula+"\nArreglo con lista de frutas:\n"+frutas+"\nFuncion suma:\n"+"El resultado de la suma 10+5 es: " + suma(10, 5));