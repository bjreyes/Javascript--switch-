//Ejercicio Java (switch) 3
 //variables
 var codigo, precio, desc, icompra,ipagar, cantidad;

 //entrada de datos
 codigo= cil;
 cantidad = 3;

 // proceso
 switch (codigo)
 {
     case "primor":
 	 precio = 5.99;
     	 break;
     case "girasol":
 	 precio = 5.50;
 	 break;
     case "cil":
         precio = 4.50;
         break;
     case "cociner":
         precio = 4.70;
         break;
 }

icompra = precio * cantidad;

if(cantidad >= 10) {
   desc = icompra * 0.125;
} else {
   if (cantidad >= 7) {
      desc = icompra * 0.10;
   } else {
      if (cantidad >= 4) {
	  desc = icompra * 0.075;
      } else {
	  desc= icompra * 0.05;
      }
   }	
}	

ipagar = icompra - desc;
console.log(ipagar);
