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

Veamos dos funciones que hacen lo mismo, una retorna valores y otra no:

- Esta función muestra “La suma es …” en la consola, pero no retorna ningún valor al programa.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c06a2e49-37e7-479a-91b9-fdc6f9bf8bb7)

En este caso la función devuelve un valor, y se almacena en una variable llamada resultado que contiene la suma de dos
valores realizada por la función sumarDos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/82ba6d27-9c93-47f9-931b-8c280b65f795)

- Otra alternativa es hacer que la función guarde directamente el resultado que devuelve en una variable:

Al retornar un valor, éste se guarda en la variable suma.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a331fb38-0c8e-4e02-805e-61004edd744f)

En este caso se piden dos valores y si la condición no se cumple se asume que el valor2 es el máximo (no es necesario un else)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f37c6302-5c08-4e26-98e0-e8f7d17bcc0f)

---

## Funciones | Función flecha (arrow Function)

En JavaScript existe la forma resumida de escribir las funciones. Se llaman funciones flecha, en alusión a =>. Permiten definir funciones de manera más fácil, breve y rápida, aunque están limitadas a funciones más simples. Para crear estas funciones flecha partiremos del ejemplo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/32433c4d-be33-4869-aa2c-5aa1e766e833)

x es el parámetro. A la derecha de la flecha agregamos el contenido de la función, que es lo que se va a retornar.

Si existe más de un parámetro, hay que usar paréntesis:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/07c87039-53c9-4768-947f-804fa1198ffe)

Existen varias formas de declarar una función flecha. Cada paso a lo largo del
camino es una función flecha válida:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/13f63868-9a3f-494c-b7f3-dba19599bd28)

## Funciones | Función flecha - Sintaxis básica

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b019e7e1-2bef-4967-98fe-9ba2bd5e8546)

---

## Funciones | Función anónima

Las funciones anónimas son un tipo de funciones que se declaran sin
nombre de función y se alojan en el interior de una variable y haciendo
referencia a ella cada vez que queramos utilizarla:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d119f3cb-112e-4fc8-bcef-a815e7e5c97d)

---

## Scope (alcance)

El scope (alcance) determina la accesibilidad (visibilidad) de las variables.
Define ¿en qué contexto las variables son visibles y cuándo no lo son?. Una
variable que no está “al alcance actual” no está disponible para su uso.

En JavaScript hay dos tipos de alcance:

● Alcance local (por ejemplo, una función)

● Alcance global (entorno completo de JavaScript)

Las variables definidas dentro de una función no son accesibles (visibles)
desde fuera. La función “crea un ámbito cerrado” que impide el acceso a una
variable de su interior desde fuera de ella o desde otras funciones.

---

## Scope (alcance) | Variables locales

En el siguiente ejemplo creamos una variable llamada carName a la cual le
asignamos un valor:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3289e778-db03-4200-aaee-77469557a561)

Este tipo de variables son de alcance local, porque solamente valen en el
ámbito de la función, y no en el ámbito a nivel de programa. Los parámetros
de la función funcionan como variables locales dentro de las mismas

---

## Scope (alcance) | Variables globales

Una variable declarada fuera de una función se convierte en global. Esto
quiere decir que tiene alcance global: todos los scripts y funciones de una
página web pueden acceder a ella.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9faac635-d11d-4777-a71a-93771e8dc944)

El alcance determina la accesibilidad de variables, objetos y funciones de
diferentes partes del código.

---

## Scope (alcance) | Variable automáticamente global

Si asignamos un valor a una variable que no ha sido declarada, se convertirá
en una variable global. Este ejemplo declara la variable global carName, aún
cuando su valor se asigna dentro de una función.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e67ee360-e0f1-4b44-8c10-71b3cd36b9e1)

En este caso podremos acceder al
contenido la variable carName tanto
desde fuera como desde adentro de la
función por ser automáticamente global.

La vida útil de una variable comienza cuando se declara. Las variables locales
se eliminan cuando se completa la función.

---

## let y var

let declara una variable de alcance local, limitando su alcance (scope) al
bloque, declaración, o expresión donde se está usando. var define una
variable global o local en una función sin importar el ámbito del bloque.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1af96b52-4d08-4e48-9829-335cbf383837)

---

## Callbacks (devolución de llamada)

Las funciones en JavaScript son objetos. Como cualquier otro objeto, se
pueden pasar como parámetro. Por lo tanto, podemos pasar una función
como argumento de otra función. Esto se llama función de devolución de
llamada (callback). Las funciones también se pueden devolver como
resultado de otra función.
 
![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/20302c9c-f1d6-40d8-9c57-32d2159506f7)

El ejemplo es un callback
sincrónico, ya que se ejecuta
inmediatamente.

---

## Clausuras (clousure)

Una clausura o cierre se define como una función que «encierra» variables en su propio
ámbito (y que continúan existiendo aún habiendo terminado la función).

Es decir, devolvemos una función en una función externa que hace referencia a las
variables locales de la función externa. Esto es posible si tenemos funciones anidadas en
otra función y devueltas como referencia.

En la función interna, podemos usar las variables de la función externa. Debido al alcance
de las variables locales, las funciones internas pueden acceder a las variables de la función
externa.

Cuando devolvemos la función interna en la función externa, las referencias a las variables
locales de la función externa todavía están referenciadas en la función interna.

La función iniciar() crea una variable local llamada nombre y una función
interna llamada mostrarNombre(). Por ser una función interna, esta última
solo está disponible dentro de iniciar(). mostrarNombre() no tiene ninguna
variable propia; pero puede acceder a la variable nombre declarada en la
función iniciar().

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e0f9e4e9-965b-4f56-b118-72fdf7153bb8)

### Clausuras | Ejemplo

La función creaSumador(x) toma un
argumento único x y devuelve una nueva
función. Esa nueva función toma un único
argumento y, devolviendo la suma de x + y.
creaSumador es una fábrica de función.
suma5 y suma10 son ambos closures.

Comparten la misma definición de cuerpo
de función, pero almacenan diferentes
entornos. En el entorno suma5, x es 5. En lo
que respecta a suma10, x es 10.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0cf5bf12-f3b2-48e4-ac81-0c3dd04cae14)

---
