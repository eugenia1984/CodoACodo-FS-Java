# Clase 18 - Arrays, Storage y JSON

## Temas:

```
● Arrays.
● Funciones para operar arrays.
● Trabajar con array de objetos.
● Web Storage.
● JSON. Formato y ejemplos de uso.
```

---

## Arrays

Los arrays son objetos similares a una lista cuyo prototipo proporciona
métodos para efectuar operaciones de recorrido y de mutación.

Tanto la longitud como el tipo de los elementos de un array son variables.
Si hemos pensado a las variables como una “caja” en la que se almacena un
dato, un array podría considerarse una colección de cajas, cada una de ellas
con un dato en su interior.

Toda la colección comparte un nombre (el nombre del array) y cada caja
puede referenciarse para poder acceder a su contenido.

### Array | ¿Qué son?

Un array, también conocido como arreglo o vector, es una colección o
agrupación de elementos en una misma variable.

Los elementos del array pueden ser datos de diferentes tipos. Sin embargo,
algunos de los métodos que poseen sólo funcionarán correctamente en
arrays que tengan todos sus elementos del mismo tipo.

Cada elemento dentro del array posee un índice, un valor que nos permite
identificarlo. Pensábamos a las variables como una “caja”. De forma similar,
podemos imaginar un array como los vagones de un tren, donde cada vagón
posee un contenido y un orden. El índice es el orden y el contenido dentro
del vagón es el dato.

### Array | ¿Cómo se crean?

Se pueden definir de varias formas:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/eb5d1fac-4162-4a11-8b62-3d0db5d32a29)

### Array | Acceso a elementos

Las posiciones de un array se numeran a partir de 0 (cero). Cuando usamos
array[0] estamos haciendo referencia a la posición 0 del array cuyo contenido,
en este caso, es la letra “a”:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ab8cb5f3-1c0e-42cd-b27f-203daede4be1)

array[5] hace referencia a una posición que no existe, dado que el array tiene
solamente 3 posiciones, con índices respectivos iguales a 0, 1 y 2.

---
