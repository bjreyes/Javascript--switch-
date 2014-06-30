//EJERCICIOS CON SWITCH
 //declaracion de variables
 var precio, ipagar;
 var helado;
 //Entrada de datos
 helado = "sol"
 cantidad= 3
 //proceso
 switch(helado) {
  case "sol" :
    precio= 1.5;
    break;
  case "fresa" :
    precio= 2.0;
    break;
  case "mar" :
    precio = 1.7;
    break;
  case "rico"  :
    precio = 2.5;
    break; 
 }
ipagar= cantidad * precio
console.log(ipagar);
