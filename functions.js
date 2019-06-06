/*OPERACIONES
CADENATRXTO
split method
touppercase method
console.log
*/

let nombre = "roberto garcia";
console.log(nombre);
 let grande = nombre.toUpperCase();
console.log(grande);

//

let nombre2 = "roberto garcia";

let str = nombre2.split("");//se va a convertir en un Array!
console.log(str);


for( i=0; i < str.length; i++ ){//recorremos la array
    
    str[i] = str[i].toUpperCase();//mayuasclas
    
    
        console.log(str[i]);
    
}
//jueves 6/6/19 00:55am!