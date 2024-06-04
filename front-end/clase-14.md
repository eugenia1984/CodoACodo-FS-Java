# Clase 14 - Introducción a Javascript


##  Temas:

```
● ¿Qué es y para qué se usa?
● Conceptos generales. Sintaxis básica.
● Variable, ¿qué es y cómo declararla? Tipos.
● Asignación y cambio del valor.
● Operadores aritméticos.
● Conversión a entero y flotante.
```

---

## ¿Qué es JavaScript?

JavaScript (JS) es un lenguaje de programación, un mecanismo con el que podemos
indicarle al navegador qué tareas debe realizar, en qué orden y cuántas veces, entre
otras. Con JS agregamos comportamiento a nuestro sitio, permitiendo al usuario
interactuar con él, rompiendo con la idea de una web estática.

Junto con HTML y CSS es la tercera pieza fundamental del desarrollo web.

ECMAScript es el estándar que a partir del año 2015 a la actualidad se encarga de regir
como debe ser interpretado y funcionar el lenguaje JavaScript. En la actualidad, JS
puede ser interpretado y procesado por una multitud de plataformas, entre las que se
encuentran los navegadores web.

---

## Versiones de ECMAScript

Javascript ha sufrido modificaciones que los navegadores han debido
implementar para proporcionar soporte a cada versión de ECMAScript
cuanto antes. La lista de versiones de ECMAScript es la siguiente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/51651bff-e858-48ee-b3d2-3605158f3fd5)

---

## Características de JavaScript

● Lenguaje del lado del cliente: El código se ejecuta en el cliente
(navegador). No se necesita acceso al servidor.

● Orientado a objetos: Utiliza clases y objetos como estructuras
reutilizables.

● De tipado débil o no tipado: No es necesario especificar el tipo de dato
al declarar una variable.

● De alto nivel: Su sintaxis se encuentra alejada del nivel máquina, más
cercano a un lenguaje de las personas.

● Lenguaje interpretado: El navegador convierte las líneas de código en el
lenguaje de la máquina sin necesidad de realizar un proceso de
compilado.

● Muy utilizado por desarrolladores: Es uno de los lenguajes más
demandados de los últimos años por su versatilidad y su infinita
capacidad para crear plataformas cada vez más atractivas.

● Interactividad con el usuario: Podemos validar el formato de los datos
de un formulario (una dirección de email directamente desde el
navegador del cliente), ahorrando tiempo y recursos del servidor.

---

## Comenzando con JavaScript

El código de nuestro script debe ser incorporado al código HTML, de forma
similar a lo que ocurre con las hojas de estilo CSS. Existen tres formas de
agregar código JavaScript a una página web. Una de ellas es utilizar la
etiqueta <script> en el <head> de nuestro documento (referencia interna):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/68643479-0feb-43c2-b751-589af119bd32)

### La ubicación de la etiqueta ``<script>``

Según cómo esté ubicada la etiqueta ``<script>`` el navegador descarga
ejecuta el archivo JavaScript en momentos diferentes:

1. En ``<head>``: antes de empezar a dibujar la página, cuando está en blanco.

2. En ``<body>``: cuando la página se haya dibujado hasta el ``<script>``.

3. Antes de ``</body>``: cuando la página se haya dibujado en su totalidad.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e418371e-ca66-4cbc-9cf6-9b14f1fd9f22)

---

## La consola de JavaScript

Para acceder a la consola Javascript del navegador pulsamos CTRL+SHIFT+J.
Un clásico ejemplo utilizado cuando se comienza a programar es crear un
programa que muestre por pantalla un texto, generalmente el texto «Hola
Mundo». O mostrar el resultado de alguna operación matemática. A
continuación, el código JS para realizar ambas tareas, y la salida que
podemos ver en la consola del navegador:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/7fce404c-a0c4-4674-bdad-5a42e252b2de)

Podemos mostrar texto, valores numéricos, etc. separados por comas:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/08e37b24-9395-43f7-9e2e-f95351833cd5)

En esta consola podemos escribir funciones o sentencias de JavaScript que
se ejecutan en la página que se encuentra en la pestaña actual del
navegador. De esta forma podemos observar los resultados que nos
devuelve en la consola al realizar diferentes acciones

JS posee, además de console.log, varias instrucciones similares para
interactuar con el desarrollador:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a1095a19-ae9d-4388-8666-c9d6de7c9411)

---

## Incorporando un archivo externo

Podemos vincular al documento HTML un archivo con extensión .js usando
la etiqueta <script>, haciendo referencia al nombre del archivo JavaScript
con el atributo src (source):

```HTML
<html>
<head>
  <title>Título de la página</title>
  <script src="index.js"></script>
</head>
<body>
  <p>Ejemplo de texto.</p>
</body>
</html>
```

Los archivos .js se suelen incorporar en una carpeta llamada “js”.

---

## Comentarios

Los comentarios son utilizados por los programadores para anotaciones. No
son tenidos en cuenta por el navegador.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/fbe3ff22-9b21-4c39-988c-b005694559b3)

Son un buen recurso cuando queremos omitir la ejecución de ciertas
instrucciones.

---

## Variables | ¿Qué son?

Es un pequeño espacio en la memoria, donde se guarda un dato. Podemos
imaginarlas como “cajitas” dentro de nuestro programa. Tienen tres
características:

● Nombre: debe ser representativo de la información que contiene. Se utiliza
para diferenciar unas de otras y hacer referencia a ellas.

● Tipo de dato: puede ser número, texto, valores booleanos, etc.

● Contenido: el valor concreto que posee el dato almacenado.

Se llaman variables porque pueden cambiar su valor a lo largo del programa.
Un programa puede tener muchas variables, y cada una de ellas tendrá un
nombre que la identifique, un valor y un tipo de dato.

## Variables | ¿Cómo se declaran?

Una variable que se ha declarado con var pero a la que no se le asignó un
valor se dice que está indefinida (no conocemos el tipo de dato):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bb159281-7bb6-46b7-a86b-d9f92b655f2a)

En este caso la variable está “vacía”, no está definido el valor que colocará en
memoria. No se ha asociado ningún contenido a esa variable.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d67b4427-b57c-47e6-b662-9befde7c076f)

Las sentencias en JS finalizan con “;”. La imagen anterior corresponde a la
declaración de la variable “num4” con un valor numérico entero de “5”.

## Variables | ¿Cómo se nombran?

Los nombres de las variables (o identificadores) permiten distinguir una deotras.

Para asignar los nombres de las variables debemos seguir ciertas
reglas:

- Un identificador de JavaScript debe comenzar con una **letra**, un **guión bajo** ( ``_`` ) o un **signo de dólar** ( ``$`` ).

- Los siguientes caracteres también pueden ser **dígitos** ( ``0 - 9`` ).

- JavaScript distingue entre mayúsculas y minúsculas (es **case-sensitive**).

Se recomienda usar la escritura **camelCase** en el nombre de variables que tienen más de una palabra.

## Variables

Podemos cambiar el valor de una variable durante el flujo del programa:

```JavaScript
var IVA= 21;
IVA= 10.5;
console.log(IVA);
```


El ``=`` es el operador de asignación, y permite asignar un valor a una variable.

Ese valor puede ser el resultado de una operación aritmética, que se evalúa y luego se asigna su resultado a la variable:

Luego de ejecutar esa línea, la variable “resultado” contiene el valor “8”.

```JavaScript
var resultado= (1 + 3) * 2;
```

---

## Constantes

El concepto de constante es similar al de variable, con la salvedad de que la
información que contiene es siempre la misma (no puede variar durante el
flujo del programa). Declaramos las constantes utilizando const. Su sintaxis
es:

```JavaScript
const PI= 3.141592;
const IVA= 21;
```

Si intentamos modificar el valor de una constante, obtenemos un error:

```JavaScript
const IVA= 21;
IVA= 10.5;
console.log(IVA);
```

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/94901116-3023-49e3-8383-4eb1a41616da)

---

## Tipos de datos

Las variables de JavaScript pueden contener distintos tipos de datos:
numérico, cadena de caracteres, lógicos, indefinido, null, objetos y más. El
tipo de dato es la naturaleza del contenido de la variable o constante.
JavaScript tiene tipado dinámico, es decir que la misma variable se puede
utilizar para contener diferentes tipos de datos:

```JavaSCript
var x; // ahora x es indefinido (no tiene un valor definido)
x = 5; // ahora es numérico (5)
x = "Juan"; // ahora es una cadena de caracteres o string ("Juan")
```

JavaScript deduce cuál es el tipo de dato de la variable. El tipo de dato
asociado a esa variable lo determina el dato que se almacena en ella. Y si
luego se le asigna un valor de otro tipo, el tipo de la variable cambia

---

## Tipos de datos

Los tipos de datos en JavaScript son los siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bd214a19-ba88-4df6-a32b-a52d8aeca412)



El último estándar ECMAScript define nueve tipos de datos:

• Seis tipos de datos primitivos 

• Undefined 

• Boolean 

• Number 

• String 

• BigInt 

• Symbol 

• Null (tipo primitivo especial) 

• Object 

• Function 


## Identificar el tipo de dato de una variable

Para determinar qué tipo de dato tiene una variable utilizamos ``typeOf()``, que
devuelve el tipo de dato primitivo asociado a una variable:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d538dc97-c5bb-4c66-9bcb-bce0ffbd5be4)

### Las variables numéricas

En JavaScript, los números constituyen un tipo de datos básico (primitivo).

Para crear una variable numérica basta con escribirlas. No obstante, dado
que en Javascript “todo es un objeto”, también podemos declararlas como si
fuesen un objeto:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9292a0a1-bbea-442b-a683-ea890423fab2)

### Objeto Number

Number es el objeto primitivo que permite representar y manipular valores
numéricos. El constructor Number contiene constantes y métodos para
trabajar con números. Valores de otro tipo pueden ser convertidos a números
usando la función ``Number()``. Su sintaxis es:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/add3b5ec-ed7b-473e-a4f2-ce15f5416d07)

Creamos el objeto a mediante el constructor y guardamos en b el valor de la
cadena ‘123’ en forma de número. Mostramos en consola ambos elementos.

## Comprobaciones numéricas

Varias funciones de JS permiten conocer la naturaleza de una variable
numérica (número finito, número entero, número seguro o si no es
representable como un número). Devuelven true o false (un valor booleano).
Las podemos ver en la siguiente tabla:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c745e815-851a-48c2-83bf-90f0f18fd2ea)

Veamos dos ejemplos para cada una de estas funciones:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/74b029a5-0578-4842-a0b7-d1771572e693)

### Conversión numérica

Es posible convertir cadenas de texto en números, para posteriormente
realizar operaciones con ellos. Las funciones de parseo numérico, ``parseInt()`` y
``parseFloat()``, permiten realizar esto:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/67c89611-44e7-4cf4-868d-0bc86b8addd2)

- Veamos un ejemplo con ``parseInt()``. Recibe como parámetro un texto que 
queremos convertir a número:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/7e74e7ce-c839-4272-908d-01b74b251d68)


**parseInt()** funciona con variables de texto que contienen números o que comienzan por números. Sin embargo, si la variable de texto comienza por
un valor que no es numérico, parseInt() devuelve un NaN (Not a Number).

- Si utilizamos **parseInt()** con dos parámetros, donde el primero es el texto con
el número y el segundo es la base numérica del número, se realiza la
conversión de tipo respetando la base elegida:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/512607ac-5d2d-4fbd-9ee4-bb993ba9b233)

Esta modalidad de parseInt() se utiliza para pasar a base decimal un número
que se encuentra en otra base (binario, octal, hexadecimal, etc.) parseFloat()
funciona exactamente igual, pero en lugar de operar con números enteros
opera con números en coma flotante.

---

## Operadores aritméticos y de asignación

El operador de asignación (``=``) le
otorga un valor a una variable y se
coloca entre la variable y el valor a
asignar.

Los operadores aritméticos que
vemos a la derecha se utilizan para
realizar operaciones aritméticas en
números:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1a033827-747b-44d4-8bb3-2c353589b60b)

### Operadores de cadena y números

Los operadores + y += también se pueden utilizar para agregar (concatenar)
cadenas. En este contexto, el operador + se denomina operador de
concatenación.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b66a0399-e97b-4d56-9ae5-3ef251db452c)

Agregar dos números devolverá la suma, pero agregar un número y una
cadena devolverá una cadena.

---

## La función prompt()

La función prompt es un método del objeto Window. Se utiliza para
solicitarle al usuario que ingrese datos por medio del teclado. Recibe dos
parámetros: el mensaje que se muestra en la ventana y el valor inicial del
área de texto. Su sintaxis es: variable = prompt(mensaje, valor inicial)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/49856ef0-3652-4b98-b73e-d03996675c86)

---

## Uso de document.write()

document.write() nos permite escribir directamente dentro del propio
documento HTML.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d8667f2f-354e-4ce4-8cf6-7d2dd8f88ace)

---
