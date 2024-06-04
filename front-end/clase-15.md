# Clase 15 - JavaScript - Condicionales y Ciclos

## Temas:

```
● Control de flujos.
● Condicional. ¿Qué es?
● Operadores lógicos y de comparación.
● Ciclos. ¿Qué son? Tipos y diferencias entre sí.
● Cómo combinar operadores lógicos y ciclos
```

---

## Operadores lógicos y relacionales

### Operadores de comparación

Un operador de comparación (o relacional) compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos.

Las cadenas se comparan según el orden lexicográfico estándar. En la mayoría de los casos, si los dos operadores no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operadores numéricamente.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ef56dbb4-5189-40e2-ba58-b04ff564c955)

### Operadores lógicos

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bbadfde3-5ad7-4ea4-83ea-e782619b65f4)

### Operadores prefijo y posfijo

Los afijos se anteponen o se posponen en un nombre de una variable.

Cuando hablamos de prefijo nos referimos a que se antepone a la variable y el posfijo se pospone. Se utilizan para realizar operaciones aritméticas, tanto para incrementar como para decrementar el valor de una variable.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9873fcfe-8251-48e1-91f3-fb37f54660c6)

### Operadores de asignación

No solamente el ``=`` (igual) es un operador de asignación. Existen otras variantes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4a62ccd2-26c5-4f0e-990c-f6f30cdf5b45)

## Jerarquía de los operadores

Al igual que ocurre en las matemáticas, los operadores en programación tienen un orden de prioridad.
 
Este orden es el siguiente (de menos prioritario a más prioritario): operadores booleanos; operadores de comparación, y finalmente los aritméticos (con el mismo orden de prioridad que en las matemáticas).

Este orden de prioridad se puede alterar con el uso de los paréntesis ().

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/557e9ac3-31c6-4454-9274-94762e226e7d)

---

## Estructuras de control

Las estructuras de control de flujo, son instrucciones que nos permiten evaluar si se puede cumplir una condición o no, o si debe ser evaluada n veces.

Los condicionales nos permiten evaluar si una condición cumple o no. Su sintaxis es muy sencilla: podemos evaluar si la condición es verdadera o falsa. Incluso podemos añadir opciones en el caso de que no se cumpla la primera condición y se deban evaluar más.

Además, existen otras estructuras de control, a las que se les suele denominar ciclos, bucles o loops. En ellos se evalúa una condición n veces hasta que ésta se cumpla. Son estructuras existentes en casi todos los lenguajes de programación, como los bucles for y while, entre otros.

Para controlar el flujo de la ejecución estableciendo alternativas, es decir, que una serie de enunciados se ejecuten en algunas ocasiones y en otras no, existen las estructuras condicionales. En JS disponemos de las siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5836bad1-9d03-42a5-8003-7641fb0e4550)

### Estructuras de control | Condicionales

Existe un orden para el desarrollo de un programa, y se lo conoce como “flujo del programa”.

Por defecto, el navegador leerá el script de forma secuencial, una línea luego de otra, desde arriba hacia abajo. Normalmente, la ejecución de la línea 5 nunca ocurrirá antes de la línea 3.

Al escribir un programa necesitamos establecer condiciones o decisiones, a partir de las cuales el navegador realiza una acción “A” si se cumple una condición o una acción “B” si no se cumple. Este es el primer tipo de
estructura de control que analizaremos.

### Estructuras de control | If

El más conocido de estos mecanismos de estructura de control es el if (si condicional). Podemos indicar que se tome un camino sólo si se cumple la condición que establezcamos. Si no se cumple no se ejecuta nada y el programa sigue su curso:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1b087901-f47d-40ec-88e2-85560d0ebe35)

### Estructuras de control | If / else

Si utilizamos if seguido de un else podemos establecer una acción “A” si se cumple la condición, y una acción “B”.

Modificamos el ejemplo anterior para mostrar también un mensaje cuando estamos suspendidos, pero en este caso, en lugar de mostrar el mensaje directamente con ``console.log`` guardamos el texto en una nueva variable llamada
calificación:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/7b0866c9-7ea1-47bc-b44f-c5b11199b508)

### Estructuras de control | Operador ternario

El operador ternario es una alternativa de condicional ``if/else`` con una sintaxis más corta y, en muchos casos, más legible. Los dos scripts siguientes hacen lo mismo. El primero usa if/else, el segundo el operador ternario:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c926b22d-094d-43ad-b6ea-ac489b120ec2)

### Estructuras de control | If múltiple

Para analizar más de 2 condiciones podemos anidar varios if/else uno dentro de otro, de la siguiente forma:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b5ae952c-d433-4608-81da-ed93696c649f)

### Estructuras de control | Switch

La estructura de control switch permite definir casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se especifican a continuación mediante los case.

Con los if múltiples podemos controlar valores comprendidos en un rango. Con switch esto no es posible, ya que solo permite valores concretos y específicos.

Al final de cada caso es necesario indicar un break para salir del switch. Si no se hace esto, el programa pasa automáticamente al siguiente case, aunque no se cumpla la condición específica.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9675d3e3-189f-48e8-8664-968a16665873)

### Estructuras de control | If con && (AND)

Podemos combinar el ``if`` con los operadores lógicos ``&&`` (**AND**) y ``||`` (**OR**) para describir condiciones más complejas.

Utilizando ``&&`` (**AND**) deben cumplirse todas las condiciones para que la proposición sea verdadera. Caso contrario, será falsa.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/93986f17-9aae-4dbb-89db-d6f51440e5d8)

### Estructuras de control | If con || (OR)

Utilizando ``||`` (**OR**) basta con que se cumpla una de las condiciones para que la proposición sea verdadera. En caso de que todas las condiciones sean falsas, la proposición será falsa.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d44321a9-2937-4316-9131-247fe62a63fa)

---

## Estructuras de control | Bucles e Iteraciones

Una de las principales ventajas de la programación es la posibilidad de crear bucles y repeticiones para tareas específicas, evitando realizarlas varias veces de forma manual. Existen muchas formas de realizar bucles, y analizaremos los más básicos, similares en otros lenguajes de programación:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a74b09cf-e07b-4ea0-a73b-6e3a210dd757)

Conceptos básicos sobre bucles:

● Condición: Al igual que en los if, en los bucles se va a evaluar una
condición para saber si se debe repetir el bucle o finalizarlo.
Generalmente, si la condición es verdadera, se repite. Si es falsa, se
finaliza.

● Iteración: Se llama así a cada repetición de un bucle. Por ejemplo, si un
bucle repite una acción 10 veces, se dice que realiza 10 iteraciones.

● Contador: Muchas veces, los bucles tienen una variable que se
denomina contador, porque cuenta el número de repeticiones que ha
hecho, hasta llegar a un número concreto y finalizar. Dicha variable debe
ser inicializada (crearla y darle un valor) antes de comenzar el bucle.

● Incremento: Cada vez que un bucle finaliza, se suele realizar el
incremento (o decremento) de una variable, generalmente de la
denominada variable contador.

● Bucle infinito: Se trata de la situación que tiene lugar cuando en un
bucle no se modifica (incrementando o decrementando) la variable
contador, o cuando escribimos una condición que nunca tiene lugar. En
esos casos, el bucle se repite eternamente, sin que el flujo del programa
pueda continuar. Cuando esto ocurre, se suele decir que “el programa se
queda colgado”.

---

## Estructuras de control | While (mientras)

El bucle while se usa cuando el fin de la repetición de ciclos depende de una
condición (*). Analicemos el siguiente ejemplo y todas sus partes, para
comprender qué ocurre en cada iteración del bucle:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a3b91d03-adce-404a-a943-f2bdcdb961fc)

(*) Es muy importante que esa condición en un momento deje de ser
verdadera, para evitar que ocurra un loop infinito.

En el ejemplo anterior:

● Antes de entrar en el bucle while, se inicializa la variable i a 0.

● Antes de realizar la primera iteración del bucle, comprobamos la condición.

● Si la condición es verdadera, hacemos lo que está dentro del bucle.

● Mostramos por pantalla el valor de i y luego incrementamos el valor actual de i
en 1.

● Volvemos al inicio del bucle para hacer una nueva iteración. Comprobamos de
nuevo la condición del bucle.

● Cuando la condición sea falsa, salimos del bucle y continuamos el programa.

### Estructuras de control | While (mientras)

Detalle paso a paso de las iteraciones del ejemplo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/33a75fe6-d1e5-4c25-b5df-8b385d45e4ad)

---

## Estructuras de control | For (para)

La sintaxis de un bucle for , uno de los más usados, es más compacta y
rápida de escribir que la de un bucle while. Requiere inicializar la variable,
determinar la condición y definir el incremento al comienzo del bucle. Se
suele usar cuando se conoce de antemano cuantas repeticiones se tienen
que hacer.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4437922f-defc-4068-9abb-779114560df1)

El bucle for es uno de los más utilizados en la programación. Veamos el
ejemplo anterior utilizando este bucle:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/285a01f6-c094-46cf-91b9-245b0840d9f4)

En programación es muy habitual empezar a contar desde cero. Mientras
que habitualmente contamos de 1 a 10, en programación de 10 elementos se
cuentan de 0 a 9.

---
