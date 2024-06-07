# Clase 17 - Objetos

## Temas:

```
● Objetos. ¿Qué son y cómo se usan?
● Propiedades y métodos.
● Función constructora.
● El objeto String y sus métodos.
● El objeto Math, sus propiedades y métodos.
```

---

## Objetos

Prácticamente todo lo que utilizamos en Javascript son objetos. Los objetos en
JavaScript, como en tantos otros lenguajes de programación, se pueden
comparar con objetos de la vida real. Las variables, por ejemplo, son objetos de
diferentes tipos.

El paradigma orientado a objetos habla de objetos porque nosotros estamos
más familiarizados en la vida real a interactuar con cosas y las cosas no son
más que objetos. Una persona puede ser considerada como objeto en
términos de programación porque va a tener propiedades y comportamiento
asociado. Al comportamiento nosotros lo vemos a través de los métodos: le
solicitamos al objeto información sobre un elemento mediante un botón y el
objeto la devuelve.

---

## Objetos | ¿Qué son?

Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad
de un objeto se puede explicar como una variable asociada al objeto. Las
propiedades de un objeto básicamente son lo mismo que las variables
comunes de JavaScript, excepto por el nexo con el objeto. Las propiedades
de un objeto definen las características del mismo. Se accede a las
propiedades de un objeto con la notación punto:

```JavaScript
//nombreDelObjeto.propiedadDelObjeto
texto1 = objectName.propertyName
```

Tanto el nombre del objeto como el nombre de la propiedad son sensibles a
mayúsculas y minúsculas.

---

## Objetos | ¿Cómo se crean?

Un objeto se puede crear usando el operador de asignación. Y puedes definir
propiedades simplemente asignándoles un valor. Por ejemplo, vamos a crear
un objeto llamado miAuto y le vamos a asignar propiedades denominadas
marca, tipo, y modelo de la siguiente manera:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/618a527c-8f72-4fec-a5c7-677e304e0110)

Se pueden crear también mediante un iniciador de objeto (o literal), que es
una lista delimitada por comas de cero o más pares de nombres de
propiedad y valores asociados al objeto, encerrados entre llaves ({}):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6977a0fb-61c3-48d4-a735-27ecb8673bab)

Las propiedades de un objeto que no han sido asociadas a un valor en el
momento de la creación del mismo undefined.

### Ejemplo: Creamos y usamos un objeto, con propiedades y métodos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f8f67647-352e-401c-b27e-2018c4ea8af7)

---

## Objetos | Notación de corchetes

Se puede acceder o establecer las propiedades de los objetos mediante la
notación de corchetes [ ] . En los objetos cada propiedad está asociada con
un valor tipo String que se puede utilizar para acceder a ella. Por lo tanto
puedes acceder a las propiedades del objeto miAuto de la siguiente manera:

```JavaScript
miAuto['marca'] = 'Ford'
miAuto['tipo'] = 'Ranger'
miAuto['modelo'] = 2019
```

El nombre de una propiedad puede ser cualquier cadena válida de JS. Pero si
no es un identificador válido de JS (por ejemplo, comienza con un número)
solo se puede acceder utilizando la notación de corchetes.

---

## Objetos | Métodos

Los métodos son el equivalente de las funciones, pero dentro de un objeto.
Proporcionan al objeto la capacidad de interactuar con otros objetos o con el
resto del programa.

Para escribirlos, colocamos su nombre seguido de paréntesis ( ). El bloque de
código que compone el método se escribe entre llaves { } y pueden devolver
resultados mediante return, igual que las funciones.
Se invocan desde el resto del programa usando la notación punto, pero
usando paréntesis luego de su nombre para diferenciarlas de las
propiedades.

Por ejemplo, veamos cómo definir un nuevo objeto Perro, con los métodos
quienSoy() y ladrar():

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/caf8e6cb-9cd7-4f42-91c5-7a5c41307d6c)

---

## Objetos | Clases

Las clases son una suerte de “molde” que podemos usar para crear varios
objetos del mismo tipo. Usamos un constructor y this para asignar valores a
las propiedades de los objetos instanciados:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9c6b826a-d964-4b65-9738-6d82b548f422)

Usamos this para asignar valores a las propiedades del objeto que estamos
creando con new Perro.

---

## Objetos | Función constructora

Para definir un tipo (clase) de objeto, creamos una función que especifique
su nombre, propiedades y métodos. Supongamos que deseas una clase
llamada “Auto” para crear objetos “auto”, y deseas que tenga las siguientes
propiedades: marca, tipo y modelo. Podrías escribir la siguiente función:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/60886bbe-0078-4058-b778-6c8016542319)

Observa el uso de this para asignar valores a las propiedades del objeto en
función de los valores pasados a la función.

---
---

# Objeto String

Cuando hablamos de una variable que posee información de texto, decimos
que su tipo de dato es String. Hay dos formas de crear una variable de texto:


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4dfa26e7-2f36-4657-8a03-c43ad889eca3)

Los String son tipos de datos primitivos, y como tal, es más sencillo crearlos
de forma literal que usar el constructor new. Para delimitar un texto, se
pueden utilizar comillas simples, comillas dobles o backticks (o comilla
invertida o francesa).

Un string puede tener cero, uno o varios caracteres.

```JavaScript
// Declaración literal
const texto1 = "¡Hola a todos!"
var texto2 = "Otro mensaje de texto"
var vacio = ""
var texto3 = "123" // Cuidado, NO es un Number!
// Declaración con el constructor new String
const texto1 = new String("¡Hola a todos!")
var texto2 = new String("Otro mensaje de texto")
```

### String | Propiedades y métodos

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/744224ba-9447-45c4-a20d-a671c4c1b4e9)

#### String | .length y .concat(str1, str2...)

La propiedad .length devuelve el número de caracteres de una cadena.

```JavaScript
// Creamos una variable de texto
var texto1 = "¡Hola a todos!"
largo = texto1.length
console.log(largo) //14
// Se puede usar directamente:
console.log("Hola".length) //4
```

.concat(str1, str2...) concatena cadenas. Su función es similar al operador “+”:

```JavaScript
// Creamos una variable de texto
var cad = "¡Hola "
// Concatenamos con otra
var saludo = cad.concat("Codo a Codo!")
// Y en la consola vemos "¡Hola Codo a Codo!"
console.log(saludo)
```

#### String | charAt(pos)

Charat devuelve el carácter ubicado una posición determinada dentro del
string. Podemos guardarlo en una variable, mostrarlo en el documento o en
la consola. Cada caracter está almacenado en una posición:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a3d946c9-1a67-4544-b87a-d6d497ab0a8f)

#### String | . indexOf() y .lastIndexOf()

. indexOf(str) devuelve la posición de la primera aparición de str dentro de la
cadena, .indexOf(str, from) hace lo propio, pero a partir de la posición
indicada por from. Y .lastIndexOf(str, from) devuelve el carácter ubicado a
partir de la posición indicada por from pero partiendo desde el final:

```JavaScript
var cad = "hola como estas"
document.write(cad.indexOf("a")) //Muestra “3” en el documento HTML
document.write(cad.indexOf("a",4)) //Muestra “13” en el documento HTML
document.write(cad.lastIndexOf("o")) //Muestra “8” en el documento HTML
document.write(cad.lastIndexOf("o", 7)) //Muestra “6” en el documento HTML
```

En este ejemplo, ``IndexOf`` cuenta desde el principio de la cadena, si agregamos un valor más al método empieza a contar desde ese valor. En cambio, ``lastIndexOf`` cuenta desde el final de la cadena.

#### String | Más métodos

El objeto String posee una gran cantidad de métodos. Veamos algunos más:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bb3f674c-d33d-435c-8bb5-2ed3beadf197)

####  String | repeat(n), toLowerCase() y toUpperCase()

``repeat(n)`` repite n veces la cadena de texto:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ac4142dd-2a44-4a16-a45f-fb8c42a10738)

Los otros dos métodos convierten a mayúsculas (``toUpperCase``) y minúsculas (``toLowerCase``) una cadena de texto:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/af945b38-30a6-4360-a3b5-5c0d8ea0bf32)

#### String | trim() y replace(str, newstr)

``trim()`` elimina los espacios al inicio y al final de la cadena:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e82a14d4-13f7-4c9f-94a1-dafd2ba0ae27)

``replace(str, newstr)`` sustituye las apariciones de str por newstr: 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6b44d188-4fac-4b2b-9a72-449c1c7cfd6c)

La cadena "Aprendiendo JavaScript" se transforma en "Aprendiendo Python

#### String | substr(ini, len) y substring(ini, end)

``substr(ini, len)`` devuelve una cadena de len caracteres tomados a partir de la posición ini:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/41769b95-c7bd-4722-afcb-fff773abffc1)

``substring(ini, end)`` devuelve una cadena con los caracteres contenidos entre la posición ini y end (no inclusive):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/11b630c6-7ade-46e0-a8f2-d24a7a9579ec)

### Plantilla de cadena de caracteres (template string)

Las Template Strings utilizan las comillas invertidas o backticks para delimitar sus contenidos, en vez de las tradicionales comillas simples o dobles de las cadenas de texto normales.

Las principales funcionalidades que aportan las Template Strings son:

● Interpolación de cadenas.

● Posibilidad de incluir (y evaluar) expresiones dentro de cadenas.

● Definición de cadenas de texto en varias líneas sin tener que usar hacks.

● Formatear cadenas de manera avanzada.

● Cadenas etiquetadas.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/dec8b70d-0615-4475-9fc8-b988a160f8ee)

Una de las mejores características de las Template Strings es la interpolación de cadenas. La interpolación permite utilizar cualquier expresión válida de JavaScript (como por ejemplo la suma de dos variables) dentro de una cadena y obtener como resultado la cadena completa con la expresión evaluada.

Las partes variables de una Template String se denominan placeholders y utilizan la sintaxis ${ } para diferenciarse del resto de la cadena. Ejemplo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/fd757e1d-fe8e-4134-90d9-4b5d41f272a4)

Como dentro de las partes variables de la cadena se puede incluir cualquier expresión válida de JavaScript, en la práctica sirven para mucho más que mostrar el contenido de una variable. En los siguientes ejemplos se muestran
cómo interpolar algunas operaciones matemáticas sencillas:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/67a9349e-eda0-471f-9e92-af8b794b713f)

Dentro de un valor interpolado también se puede utilizar cualquier función:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/285735b9-7c8f-4dbb-8eb0-c2275f81d1ac)

La sintaxis ${} también funciona con expresiones que invocan métodos y acceden a propiedades:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/81ffd13e-ab5b-40e4-95c0-a77800b016d8)

La ventaja de usar template strings es el uso de expresiones incrustadas y la posibilidad de interpolación de cadenas de texto con ellas, facilitando la concatenación de valores. Ejemplo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/db9081de-5cd0-4395-84e6-93802d287006)

Podremos escribir una cadena en varias líneas, sin necesidad de concatenar:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f1930ea4-5d47-4183-8a16-917d6f07aa53)

---
---

# Objeto Math

Math es un objeto que tiene propiedades y métodos para constantes y funciones matemáticas. Todas las propiedades y métodos de Math son estáticos (no es necesario llamar al constructor). Estas son las constantes disponibles:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b7cc2a53-5d04-4d62-9ba8-bbbe036edd8c)

Los siguientes métodos matemáticos están disponibles en JS a través del objeto Math. Algunos de ellos sólo están
disponibles en ECMAScript 6:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/cff73922-09a5-4998-bb59-a242bff562ef)

Veamos algunos ejemplos de las funciones mencionadas anteriormente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3d6205f1-f41e-4c9b-94b5-b8ff9f8ed4de)

``Math.random()`` retorna un número al azar entre los valores 0 y 1, con 16 decimales. Si queremos obtener un número entero al azar entre los límites a y b, se puede hacer lo siguiente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c06812b0-af03-4384-b647-13a8eac251d6)

Este ejemplo almacena en x un valor al azar entre 0 y 5 (5 no incluido). Si presionamos F5 veremos el cambio en la consola.

## Objeto Math | Métodos de redondeo

Es muy común necesitar métodos para redondear números y reducir el número de decimales o aproximarse a una cifra concreta. Para ello, de forma nativa, Javascript proporciona los siguientes métodos de redondeo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/00938a02-7301-487b-a715-76c86ac8f7a5)

Ejemplos de los diferentes métodos de redondeo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f30dd6a5-7a88-44eb-8320-5fcf3524bf6b)

---
