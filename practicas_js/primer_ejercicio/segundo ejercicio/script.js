//Realizar un programa que permita ingresar al usuario nombre del alumno, 3 notas y muestre el promedio, utilizar lo visto en clase (Prompt, Alert)
//Con PROMPT pido si nombre y lo asigno a la variables ALUMNO
let alumno = prompt("Bienvenido alumn@, ingrese su nombre: ");
//Con PROMPT pido la primer nota que la asigno a la variable NOTA1 y la paso a numero con NUMBER
let nota1 = Number(prompt("Ingrese la primer nota: "));
//Con PROMPT pido la segunda nota que la asigno a la variable NOTA2 y la paso a numero con NUMBER
let nota2 = Number(prompt("Ingrese la segunda nota: "));
//Con PROMPT pido la tercera nota que la asigno a la variable NOTA3 y la paso a numero con NUMBER
let nota3 = Number(prompt("Ingrese la tercer nota: "));
//Primero en la condición del if veo si alguna nota es menor a 0 o mayor a 10 aviso con alert que ingresó mal la nota. Si ingreso las tres bien paso al ELSE y saco el promedio (primero sumo las tres notas y luego las multiplico por tres) y para que solo muestre dos números decimales utilizo .TOFIXED(2). Luego mediante un ALERT muestro el promedio
if ( (nota1<0 || nota1>10) || (nota2<0 || nota2>10) || (nota3<0 || nota3>10) ) {
  alert(`Ingreso mal la nota, recuerde que debe ser un número del 0 al 10`);
} else {
  promedio = ((nota1 + nota2 + nota3 ) /3).toFixed(2);  
  alert(` ${alumno} el promedio de tus tres notas es: ${promedio}`);
}