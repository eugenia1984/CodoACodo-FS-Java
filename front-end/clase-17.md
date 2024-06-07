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

---
