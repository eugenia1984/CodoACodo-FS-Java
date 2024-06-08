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

## Array | .length

``.length`` es un método que devuelve la cantidad de elementos que posee un array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/39078ba0-3638-477b-a5ba-34372f46e42d)

Para acceder al último elemento del array utilizamos:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/111cfee3-330c-480f-9c5a-fe400a1ab332)

Debemos restar 1 al valor devuelto por ``.length`` por que los valores de los índices del arreglo comienzan en cero.

### Ejemplos (crear, acceder y mostrar elementos)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4b243139-0e4e-4c54-b57d-751131f47f63)

## Array | Bucle For

Utilizando un bucle for y la propiedad .length recorremos un vector.
vectorDos.length devuelve la longitud del vector, 3 . Usamos < (menor que)
para recorrer las posiciones desde 0 a 2, sino la última regresa undefined.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/75e72fda-5432-47cf-9c8d-dd3155ec36b5)

## Array | Métodos (funciones)

Algunos métodos y funciones que podemos utilizar con los array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c13310d0-4aa3-47b7-a9c6-02c472d26359)

## Array | Métodos | Push y Pop

El método push agrega elementos al final de una lista, y el método
pop los elimina, también desde el final:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bfabacc9-67a2-40f0-8d19-a5b14436ac44)

## Array | Métodos | Unshift y Shift

El método unshift agrega elementos al comienzo de un array y
regresa la nueva longitud del mismo. Por su parte, shift elimina el
primer elemento y devuelve su valor:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/01ac3c02-b1e4-4f10-b826-15c50a328ea7)

## Array | Métodos | Concat

El método concat se usa para unir dos o más arrays. Este método no cambia
los arrays existentes, sino que devuelve un nuevo array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e9e7123d-ae1d-4d9b-acc8-688f4dc8e3bb)

Observa que el orden en que se anexa un array al otro varía según apliquemos a uno u otro el método **.concat**

## Array | Métodos | IndexOf y LastIndexOf

Estos métodos devuelven la posición (índice) en la que se encuentra el valor buscado, a partir de la posición dada. ``IndexOf`` lo hace contando desde el principio del arreglo, y ``LastIndexOf`` lo hace desde el final

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b85b4dc9-7c12-4e1d-9ae3-a032e20ddf18)

## Array | Otros métodos

Otros métodos y funciones que podemos utilizar con los array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/10ce0b3a-c464-4075-824b-25dab28b88a6)

## Array | Métodos | Splice y Slice

``slice(inicio, final)`` retorna la copia de un arreglo desde el índice inicio hasta final, excluyendo el final. No modifica el arreglo original. 

``Splice`` realiza operaciones sobre el arreglo, modificándolo. Es muy versátil, y permite tanto quitar elementos como agregarlos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3b8e605a-bf7b-495d-8818-165722f965a3)

## Array | Métodos | Sort y Reverse

Estos métodos ordenan e invierten el orden, respectivamente, de un arreglo.

Para que funcione correctamente, debemos asegurarnos que todos los elementos del arreglo sean del mismo tipo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e6e81474-a9d3-4332-b1f7-917ce3ce9eba)

## Array | Métodos con funciones

Podemos aplicar funciones a cada elemento del array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4030d88e-4724-4504-bb54-918b729e5393)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/43c20b71-8037-4cd5-9d58-42a8722b7560)

---

## For in

``For in`` recorre las propiedades de un objeto, por ejemplo, un string o un array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8c4f11e8-7639-4ae0-84ab-6fce9b7b9644)

- **variable** es variable que itera a través de las propiedades del objeto.

- **object** es el objeto sobre el que iteramos. Veamos un ejemplo iterando por un array:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d43e7829-c37b-4fc9-b8dc-25818830000b)

### For in con objetos

``For in`` también recorre las propiedades de un objeto, de principio a fin, sin necesidad de indicar “desde dónde” ni “hasta donde” ni “el paso” como con un for “normal”.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e94bdb2c-bc79-4fc8-818d-30e26becf496)

---

## For of

``For of`` recorre una cadena (string) o arreglo (array), proporcionando acceso a cada uno de sus elementos. Su sintaxis es muy simple:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/913c4700-1212-4abf-b8b1-8f4706287eeb)

Ejemplo: Definimos un arreglo, y lo recorremos guardando cada elemento en la variable letra, que mostramos por la consola:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2e31419b-26af-403b-a819-8bb05a79dc60)

---
---

# Web Storage

Javascript provee mecanismos para almacenar información en formato de texto en el dispositivo del usuario. La API de almacenamiento web proporciona los mecanismos mediante los cuales el navegador puede almacenar información de tipo clave/valor, de una forma mucho más intuitiva que utilizando cookies. Existen dos formas de hacerlo:

● A nivel local (localStorage): Al cerrar el navegador la información permanece en el dispositivo, y puede ser recuperada en una sesión posterior.

● A nivel de sesión (sessionStorage): Al finalizar la sesión la información
almacenada se elimina.

Los objetos localStorage y sessionStorage permiten guardar pares clave / valor desde el navegador web.

## LocalStorage

El objeto localStorage almacena datos sin fecha de vencimiento. Los datos no se eliminarán cuando se cierre el navegador y estarán disponibles en cualquier momento futuro.

``localStorage`` puede realizar esta tarea mediante los métodos setItem y ``getItem``, que permiten guardar y recuperar información. Los datos se almacenan en formato de texto, como pares ``clave / valor``.

No todos los navegadores soportan estas tecnologías. Si proporciona soporte, la condición (``typeof(Storage) !== "undefined"``) es verdadera (true). Esto puede utilizarse para determinar si es posible grabar los datos o no.

El siguiente código almacena y recupera datos mediante localStorage:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e26da631-9ee7-4969-9305-44c3af70b87e)

## SessionStorage

Los datos almacenados en sessionStorage son eliminados cuando finaliza la sesión de navegación, habitualmente al cerrar la pestaña en la que se muestra la página. Para ver el
web storage en Chrome: ``F12/Application/Storage``.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6e0c6e5f-a360-4a62-aab3-f27e989070b3)

---
---

# JSON

## JSON: JavaScript Object Notation

**JSON** es una sintaxis propia de objetos JS utilizada para almacenar e intercambiar datos. Dado que JSON utiliza un formato de texto, es posible convertir cualquier objeto a JSON y enviarlo al servidor y viceversa. Esto permite procesar datos como objetos JS sin dificultades.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/236d2c5f-0849-4044-8f20-0b56f57b79e2)

## JSON | Sintaxis

Reglas de sintaxis JSON:

La sintaxis JSON se deriva de la sintaxis de notación de objetos de JavaScript:

● Los datos se guardan en pares de nombre / valor

● Los datos están separados por comas

● Las {} contienen objetos

● Los corchetes se usan para indicar un array

En JSON , los valores deben ser uno de los siguientes tipos de datos:

● string

● number

● object (JSON object)

● array

● boolean

● null

La extensión por defecto para los archivos JSON es ".json"

### JSON | Estructura de un archivo JSON

El JSON de la derecha posee una propiedad “empleados” compuesta por un arreglo de 3 elementos.

Cada uno de ellos es un objeto con dos propiedades.

Este objeto JSON tiene varias propiedades con su valor. En el caso de la propiedad “hijos” el valor es un array.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/841fff48-849c-4d7e-bb21-f18d0070f53f)

### JSON | JSON.stringify( ) y JSON.parse( )

Podemos convertir datos almacenados en un objeto JavaScript al formato JSON usando ``JSON.stringify( )``:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8cea3dcb-58c0-43b2-82d7-585c24f8784e)

Si los datos están almacenados en JSON los podemos convertir a un objeto JS usando ``JSON.parse( )``:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5f5bb9e5-f89c-4f40-9f43-d4eccbc8ea56)

### JSON | Otros ejemplos

Ejemplo: superhéroes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c3c69c81-a265-4cf8-bf19-a850e8e69908)

### JSON | API pública Randomuser

Esta API [https://randomuser.me/api](https://randomuser.me/api) muestra datos de usuarios aleatorios, se utiliza para hacer pruebas. Es un string de JSON con un formato particular.

Devuelve un usuario aleatorio, un array con un solo elemento.

Conviene leerlo desde Firefox Developer Edition, ya que la visualización es más simple.

Nosotros podremos consumir la API, esto quiere decir leerla y traerla a nuestra aplicación.

Ingresando en [https://randomuser.me/api/?results=5](https://randomuser.me/api/?results=5) podremos obtener 5 resultados, por ejemplo.

---

[https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

---
