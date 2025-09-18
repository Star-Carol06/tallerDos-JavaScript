// if / Else
// Edad
let edadPersona = 16;

if (edadPersona >= 18) { 
    console.log ("Eres mayor de edad");
} else {
    console.log ("Eres menor de edad");
}


// Switch
// Dia de la semana
let dia = "domingo";

switch(dia) {

    case "lunes":
        console.log ("Es lunes, inicio de semana");
        break;
    case "viernes":
        console.log ("Es viernes, casi fin de semana");
        break;
    case "sabado":
    case "domingo":
        console.log ("Es sabado o domingo, fin de semana");
        break;
    default:
        console.log("Es un dia entre semana");
        break;
          
}
