// Tipos de variables
// Declarar tres variables (texto, número y booleano) 
let nombre = "Carolina";
let edad = 19;
let legustaprogramar =true;

console.log ("Nombre:", nombre);

console.log ("Edad:", edad);

console.log ("¿Te gusta la programacion?:", legustaprogramar);


// Diferencias entre let, const y var
// //Variable let Ciudad
let ciudad = "Bogotá";
console.log ("Ciudad actual:", ciudad);

ciudad = "Barranquilla";
console.log ("Nueva ciudad:", ciudad);


//Variable const Pais
const pais = "Australia";
console.log ("Pais inicial:", pais);
// Pais = "Colombia";
// console.log ("Nuevo pais:", Pais);
// const asigna un valor fijo al declararse y no permite cambiarlo después, por esto la variable pais no puede cambiar. 


// Variable var Color
var color = "Negro";
console.log ("Color inicial:", color);
{
    var color = "Morado";
    console.log ("Color dentro del bloque:", color);
}
console.log ("Color fuera del bloque:", color);
// Diferencia let - var
// Let respeta el bloque, permitiendo que la variable dentro sea independiente. 
// Usando var hace cambios globalmente, aunque se haga dentro de un bloque, no respeta el ambito y los cambios afectan a la variable global. 