# Clase 16 - Programación modular con funciones

## Temas

```
Programación modular con funciones:
● Funciones. ¿Qué son? Scope global y local.
● Programación modular vs. Funciones.
● Función anónima y función flecha.
● Callbacks y clausuras.
```

---

## Funciones

Las funciones son estructuras esenciales dentro del código. Una función es
un grupo de instrucciones que constituyen una unidad lógica del programa
y resuelven un problema muy concreto. Presentan varias ventajas, entre ellas
las de permitir dividir un problema complejo en partes menores y más
simples, reutilizar código en el mismo o en otro programa, simplificar
la depuración, etcétera.

JavaScript proporciona al usuario una serie de funciones implementadas y
listas para utilizar. Sin embargo, no es difícil encontrar situaciones en las que
necesitamos realizar alguna tarea para la cual no existe una función
disponible, y debemos utilizar los mecanismos que nos proporciona JS para
construir nuestras propias funciones.

---

## Programación modular

La metodología de división por módulos se conoce habitualmente
como “divide y vencerás” y en programación se llama **Desarrollo Top
Down**.

**¿Cuál será la estrategia para resolver problemas?** Pensar en el
problema general e ir descomponiéndolo en sub-problemas
(sub-algoritmos). A su vez, estos subproblemas se podrán seguir
dividiendo hasta llegar a un subproblema lo bastante simple como
para poder resolverse de forma sencilla.

---

## Abstracción

Podemos definir la abstracción como el aislamiento de un elemento
de su contexto o del resto de los elementos que lo acompañan. En
programación la abstracción está relacionada con “qué hace”.

Concretamente, la abstracción se produce cuando creamos módulos.

Lo importante, para entender el concepto de abstracción, es
comprender que cada módulo es independiente de los demás
módulos (bajo acoplamiento) y que es ideal que realice una sola
tarea (alta cohesión).

Los módulos son independientes entre sí, aunque algunos pueden
necesitar colaborar con otros, o trabajar de forma conjunta.


---

## Funciones

Las funciones nos permiten agrupar líneas de código en tareas con un
nombre (subprograma), para que posteriormente podamos referenciar ese
nombre para realizar dicha tarea. Algunas razones para declarar funciones:

● **Simplificación**: Cuando un conjunto de instrucciones se va a usar muchas veces, se
crea una función con esas instrucciones y se llama la cantidad de veces que sea
necesario, reduciendo un programa complejo en unidades más simples.

● **División**: Una función me permite modularizar, es decir, armar módulos. De esta
manera un equipo puede dividir el trabajo en partes. Cada integrante realiza una
función, para luego integrarlas en un programa principal más grande.

● **Claridad**: Usando funciones un programa gana claridad, aunque esa función solo
se llame una vez.

● **Reusabilidad**: Una función es reutilizable, sólo es necesario cambiar los valores de
entrada.

### Para usar funciones es necesario hacer dos cosas:

● **Declarar la función**: crear la función es darle un nombre, definir los datos de entrada
(opcional) e indicar las tareas (instrucciones) que realizará y qué valor retornará
(opcional).

● **Ejecutar la función**: «Llamar» (**invocar**) a la función para que realice las tareas del
código que aloja. Se puede invocar una misma función la cantidad de veces que se
necesita desde el programa principal.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/34b2ae85-c747-44af-bfc2-7949748a7884)

El **nombre** de la función tiene que ser significativo y describir lo que hace.

Los nombres de las funciones tienen las mismas características que los de las variables. Idealmente deben ser:

● Nombres simples, claros.

● Representativos de la tarea que realiza la función.

● Verbos en infinitivo (-ar, -er, -ir).

● Si es más de una palabra, utilizar la nomenclatura camelCase.

Es necesario definir los datos de entrada (si existen) e incluir las instrucciones necesarias para que realice su tarea. Opcionalmente se puede definir qué valor retornará.

### Funciones | Ejemplo

Este código muestra la tabla de multiplicar por 5.

```JavaScript
for (i = 1; i <= 10; i++) {
  console.log("1 x", i, "=", 5 * i)
}
```

Este código muestra la tabla de multiplicar por 5 tres veces. Funciona, pero usa demasiado código, repetido.

```JavaScriot
// Primera vez
for (i = 1; i <= 10; i++) {console.log("5 x", i, "=", 5 * i)}
// Segunda vez
for (i = 1; i <= 10; i++) {console.log("5 x", i, "=", 5 * i)}
// Tercera vez
for (i = 1; i <= 10; i++) {console.log("5 x", i, "=", 5 * i)}
```

Solución con bucle y función. La función tablaDelCinco() usa un for de 10 iteraciones. El otro for ejecuta la función 3 veces.

```JavaScript
// Declaración de la función tablaDelCinco()
function tablaDelCinco() {
  for (i = 1; i <= 10; i++){console.log("5 x", i, "=", 5 * i)}
}

// Bucle que ejecuta 3 veces la función tablaDelCinco()
for (let i = 1; i <= 3; i++) {
  tablaDelCinco()
}
```

---

## Funciones | Clasificación

Según reciban o no datos, y devuelvan o no valores, las funciones se puedenclasificar en:

**Funciones sin parámetros**:

● Que no devuelven valores

● Que devuelven valores

**Funciones con parámetros**:

● Que no devuelven valores

● Que devuelven valores

### Funciones | Parámetros y Argumentos

Los parámetros son las variables que ponemos cuando se define una función. En la siguiente función tenemos dos parámetros “a” y “b”:

```JavaSCript
function sumar(a, b){
  console.log(a + b)
}
```

Los argumentos son los valores que se pasan a la función cuando ésta es invocada, “7” y “4” en el ejemplo:

```JavaSCript
var suma = sumar(7, 4) //Pedimos valores
```
Dentro de la función, los argumentos se copian en los parámetros y son usados por ésta para realizar la tarea. 

- Esta función tiene un sólo parámetro que indica hasta qué valor calculará:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0cfa850a-7923-4f9d-b841-cf027b572005)

- En este ejemplo la función muestra un texto concatenado a un argumento pasado por parámetro:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/996ade55-8de0-4727-af20-1de47a27e3e7)

---

## Funciones | Parámetros múltiples

Cuando se utilizan parámetros múltiples hay que respetar el orden en que los declaramos y el de los argumentos usados al llamarla. Esta función tiene dos parámetros: el valor de la tabla a generar y hasta qué valor calculará.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/674c5e8f-62f4-4099-b0fe-f4b8bb981787)

Ejemplo con tres parámetros. Se evalúa la mayoría de edad de una persona:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5c7c3b23-8dfb-4db7-a63c-ecdbc819fd9a)

---

## Parámetros predeterminados

Los parámetros predeterminados de
función permiten que los parámetros con
nombre se inicien con valores
predeterminados si no se pasa ningún
valor o undefined.

En JavaScript, los parámetros de función
están predeterminados en undefined. Sin
embargo, a menudo es útil establecer un
valor predeterminado diferente.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/015cd30c-93f6-4bed-a7b2-b4de0c7df344)

---

## Funciones | Devolución de valores

Una función puede devolver información, para ser utilizada o almacenada en
una variable. Se utiliza la palabra clave return, que regresa un valor y finaliza
la ejecución de la función. Si existe código después del return, nunca será
ejecutado. Puede haber más de un return por función.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4a8cf729-3cb9-4f44-b1de-332a94a4eb88)

---
