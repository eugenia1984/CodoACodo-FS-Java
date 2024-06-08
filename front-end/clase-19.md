# Clase 19 - DOM y Eventos

## Temas:

```
● Manipulación del DOM.
● Definición, alcance y su importancia.
● Eventos en JS.
● Eventos. ¿Qué son, para qué sirven y cuáles son los más comunes?
● Escuchar un evento sobre el DOM.
```
---

##  ¿Qué es el DOM?

El DOM (Document Object Model) es una interfaz de programación para los documentos HTML. Proporciona una representación estructurada del documento y define de qué manera los programas pueden acceder y modificar  su estructura, estilo y contenido. El DOM representa al documento como un grupo de nodos y objetos con sus propiedades y métodos. Esencialmente,
conecta las páginas web a scripts o lenguajes de programación, como JavaScript.

Todo esto permite al desarrollador modificar esta estructura de forma dinámica, añadiendo o modificando elementos, cambiando sus atributos, etc. Estas tareas pueden automatizarse y responder a eventos como pulsar un botón, mover el ratón, hacer clic en un elemento, etc.

### DOM | Estructura jerárquica

La estructura del DOM es jerárquica, con elementos que dependen unos de otros, en forma de árbol.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2b7325be-1e05-4a3c-a96e-ffe06c3db1b1)

## DOM | Manipulando la estructura

El objeto document contiene los atributos y métodos, de la estructura que representa al documento. JavaScript posee una API que permite su manipulación.

El DOM posee elementos (element) y nodos (node). Un elemento representa una etiqueta HTML y un nodo es una clase (no un objeto) en la que se basan muchos otros objetos del DOM. 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c8e26b04-99ba-467b-914f-2df7c7cf8e98)

### DOM | Objeto document

JavaScript accede al DOM usando el objeto document mediante sus atributos y métodos.

Todos los elementos (element) HTML tendrán un tipo de dato específico.

Algunos de ellos son:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d5f247ce-c583-4eb4-87c2-d9d99e919824)

### DOM | Modificar elementos | Método tradicional

**document** permite identificar elementos por sus atributos, por ejemplo, su **id** o **class**. La forma tradicional de hacerlo es mediante el método ``getElementById()`` o algunos de los que vemos en la tabla. Devuelven o bien un elemento, un arreglo con todos los que son de esa clase, o null en caso de que no exista el elemento buscado.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/00c03924-87ea-4df1-8ea3-e88e19110aaa)

Los métodos que comienzan con **get** devuelven un valor. Los que comienzan con **set** modifican o establecen un valor.

El argumento del método ``getElementById()`` es el id del elemento, y retorna el objeto referenciado. El método ``innerHTML()`` escribe código HTML en un elemento. El argumento es una cadena de texto, y si usamos comillas invertidas ` para definir el string, se respetan los saltos de línea.

``getElementsByClassName`` retorna un array de objetos, ya que pueden existir múltiples elementos de una clase CSS.

El código del ejemplo guarda en el array x todos los elementos (objetos) de la página HTML que sean de la clase “ejemplo”.

Luego, al elemento ``x[0]`` se le modifica su contenido utilizando el método ``innertHTML``. El segundo ``<div>`` permanece inalterado, porque es el elemento ``[1]`` del arreglo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6591022f-5bd2-469d-a7d5-3b2c5025c814)

El código del ejemplo espera a que se dispare el evento ``onclick`` del botón, que invoca a la función ``cambiarTexto``.

La función guarda en el array x todos los elementos (objetos) de la página HTML que sean de la clase “ejemplo”, los recorre usando un bucle ``for``, y usando su método ``innerHTML`` les cambia su contenido.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/75b4d586-90c8-4c76-8dd7-208648700d7e)

De forma similar funcionan los métodos ``getElementsByName(name)`` y ``getElementsByTagName(tag)``, que se encargan de buscar elementos HTML por su atributo name o por su tag (etiqueta) de elemento HTML, respectivamente. En el siguiente ejemplo las constantes nicknames y divs contendrán una lista de objetos:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f590b3db-dda4-4fda-a440-5ab620882aba)

## DOM | Modificar elementos | Métodos modernos

En los últimos años JS ha añadido dos nuevos métodos de búsqueda de elementos que son simples de usar, sobre todo si conocemos los selectores CSS. Son los métodos ``.querySelector()`` y ``.querySelectorAll()``:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5f9fa33f-41b4-46e2-8a83-dcdd10f77a95)

Con estos métodos podemos reemplazar los “métodos tradicionales” e incluso realizar nuevas intervenciones en el DOM gracias a su flexibilidad.

### DOM | Métodos modernos | querySelector()

``.querySelector(selector)`` devuelve el primer elemento que encaja con el selector CSS suministrado en selector. Al igual que ``.getElementById()``, en caso de no coincidir con ninguno devuelve null.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/265731b4-10ee-48fb-9bee-dfd2fd72b4ed)

En la primera línea incluimos en el argumento un # porque se trata de un id.

En la segunda estamos recuperando el primer elemento con clase info que esté dentro de un elemento de la clase main. Eso podría realizarse con los métodos tradicionales, pero sería necesario un código más extenso y complejo ``.querySelector()`` simplifica el proceso.

### DOM | Métodos modernos | querySelectorAll()

El método ``.querySelectorAll(selector)`` es similar a ``.querySelector()``, pero en caso de que haya más de un elemento que se ajuste a lo indicado por selector, devuelve un array con todos los elementos que coinciden con él:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/56f93bd7-0fac-46b9-9eb1-0b0a6510d6cd)

``.querySelectorAll()`` siempre nos devolverá un array con uno o más objetos, o vacío si no encuentra elementos de ese tipo en el documento.

### DOM | Crear elementos HTML

Existen métodos para crear diferentes elementos HTML o nodos, que nos permiten agregar al documento estructuras dinámicas, mediante bucles o estructuras definidas:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5d139e10-2144-44e9-9e90-13fe1b013308)

### DOM | .createElement() y .appendChild()

``.createElement()`` podemos crear un elemento HTML en memoria. Este elemento puede insertarse en el documento HTML con ``.appendChild()``, en una posición determinada. El ejemplo crea un botón y lo coloca en el body:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6569cc9c-f608-4a8d-a6c6-8ca9dfe52621)

### DOM | .createTextNode()

``.createTextNode()`` es un método que crea nodos de texto. Esos elementos luego pueden ser asignados a un objeto. En el ejemplo se crea un nodo de texto y se lo asigna a un ``<h1>``, que luego se coloca en el ``<body>``:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b63e0cd6-7218-4585-87e5-7e8811d52c58)

### DOM | .cloneNode()

``.cloneNode()`` toma un nodo, y devuelve una copia:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/229c96bb-c872-408e-8eba-0cf7be7dcc8b)

###  DOM | Modificar atributos de un elemento

Los objetos que obtenemos a partir de métodos como ``.createElement()`` o ``.getElementById()``, entre otros, poseen atributos que pueden ser modificados:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/709a2b50-45cc-486f-93a8-0e297d0d7c84)

### DOM | Reemplazar contenido de un elemento

``.textContent`` e ``.innerHTML`` permiten recuperar o modificar el contenido de texto de un elemento, pero no son equivalentes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f5722bcb-79b6-46be-b1d5-fcb8979c0aaa)

## DOM | Insertar una imágen

Las propiedades y métodos vistos permiten, por ejemplo, insertar una imágen en el documento HTML:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bd473d0f-a5d1-4d93-b586-fee17b44a3a5)

``.appendChild()`` es el método que permite agregar un elemento al DOM. En este caso, se agrega en el ``<body>``. 

También es posible eliminar elementos, para ello debemos utilizar el método ``.remove()``

---

### DOM | API nativa de Javascript

Entre las herramientas que provee la API de JS se encuentran:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5c671d92-1eaf-4221-aa55-1c138e23dd55)

---

### DOM | Eventos en JS

Los eventos son acciones que realiza el usuario a las que podemos “atender” desde JavaScript e indicar qué función o bloque de código se debe ejecutar como respuesta. Estos eventos permiten interactuar con el usuario, por ejemplo cuando hace clic en un botón. Existen tres formas de definir eventos en nuestro código:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/607d048a-5ee0-4c1b-a053-aa4688af2432)

---

### DOM | Eventos en JS desde atributos HTML

Probablemente sea la forma más sencilla de atender un evento. Definimos un evento a través de un atributo HTML, por ejemplo onClick. En el ejemplo, al hacer click sobre el botón se ejecuta la función flecha enviarMensaje. Esta función genera un mensaje “Hola!” mediante la función de javaScript alert.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6f98812a-f925-491c-848e-dc5dc2c0462d)

---

## DOM | Eventos en JS desde propiedades JS

Otra forma de utilizar eventos es utilizar las propiedades de Javascript. Por cada evento, existe una propiedad disponible en el elemento en cuestión:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4300033d-a5b8-4621-9339-3361491c0ea8)

---

## DOM | Eventos con .addEventListener()

``.addEventListener()`` es la forma más elaborada de utilizar eventos

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f75006d6-d861-4c44-9d5a-f8ad961f57e6)

---
---
