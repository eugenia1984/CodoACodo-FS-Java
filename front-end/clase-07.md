# Clase 07 - CSS - Modelo de caja y posicionamiento

## Temas:

```
CSS 3 - Modelo de caja y posicionamiento
● Modelo de caja y propiedades.
● Posicionamiento y visualización.
```

---

# Modelo de Caja (Box Model)

El modelo de caja o “box model” es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el
diseño de todas las páginas web. El Modelo de caja es un mecanismo mediante el cual CSS hace que todos los elementos de las páginas se
representan mediante cajas rectangulares.

Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.

Los navegadores crean y colocan las cajas de forma automática, pero CSS permite modificar todas sus características.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ccfcae0d-74be-47db-9cd7-fc467b22cf3e)

Las cajas de las páginas no son visibles a simple vista porque inicialmente no muestran ningún color de fondo ni ningún borde.

Cada elemento incluido en el documento HTML genera una caja que tiene varios atributos modificables. El comportamiento de esa caja depende de su clasificación, es decir, si se trata de un elemento de
línea o de bloque.


La representación básica del **Modelo de caja** es la siguiente, donde podemos observar varios conceptos importantes a diferenciar:

● El **borde (border)**: en negro, es el límite que separa el interior del exterior del elemento.

● El **margen (margin)**: en naranja, es la parte exterior del elemento, por fuera del borde.

● El **relleno (padding)**: en verde, es la parte interior del elemento, entre el contenido y el
borde.

● El **contenido (content)**: en azul, es la parte interior del elemento, excluyendo el relleno.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6953e305-4821-450e-8cf1-e72c4cf1c221)


El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno se muestra el
color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen se muestra el color o imagen de fondo de su elemento padre (si están definidos). Si ningún elemento padre tiene definido un
color o imagen de fondo, se muestra el color o imagen de fondo de la propia página (si están definidos).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/15b097f3-bfde-42c6-9592-55b00ad15e18)

---

# Dimensiones y desbordamiento

## Dimensiones (ancho y alto)

Proporcionamos tamaños específicos a los diferentes elementos de un documento HTML asignando valores a las propiedades width (ancho) y height (alto).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/27de9eb5-fe1c-40ee-b94a-1cafc2cefccd)

En el caso de utilizar el valor auto en las propiedades anteriores (valor por defecto), el navegador se encarga de calcular el ancho o alto necesario, dependiendo del contenido del elemento. El tamaño automático dado a un elemento depende del tipo de elemento que se trate (en bloque o en línea).

## Dimensiones en modelo de caja

Si en lugar de utilizar la opción auto, o simplemente no indicamos valores para ancho y alto, el tamaño de la caja suele acomodarse al contenido sin problemas. Pero cuando asignamos valores a estos atributos, forzamos al elemento a tener un aspecto concreto, obteniendo resultados inesperados si su
contenido es más grande que el tamaño que hemos definido.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5c65afdb-246d-4be6-b05f-3bdb5a6bdc40)

## min-width, max-width, min-height y max-height

Una forma de mitigar el problema mencionado consiste en utilizar las propiedades hermanas de width: **min-width** y **max-width**; y las propiedades hermanas de height:

- **min-height** y **max-height**: con estas propiedades, en lugar de establecer un tamaño fijo, establecemos límites máximos y mínimos, donde el ancho o alto de la caja queda comprendido entre esos valores.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3f549fa9-de6e-4591-bf0d-51d669c599fa)

Las propiedades de mínimos **(min-width y min-height)** por defecto tienen valor 0, mientras que las propiedades de máximos **(max-width y max-height)** tienen por defecto valor none.

## Zonas de un elemento
 
En CSS existen ciertas palabras clave para hacer referencia a una zona u orientación concreta sobre un
elemento. Son conceptos muy sencillos y lógicos:

● Top: Parte superior

● Left: Parte izquierda

● Right: Parte derecha

● Bottom: Parte inferior

● Center: Se refiere a la posición central entre los extremos horizontales y verticales

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/959601f8-0e7d-41c4-8d20-8677b12b29ea)

## Desbordamiento

Puede ocurrir que apliquemos un tamaño de alto y ancho a un elemento HTML, pero su contenido de texto sea tan grande que no quepa dentro de la caja.
 
En ese caso lo que ocurre es que el contenido se desborda. Podemos modificar este comportamiento con la propiedad de CSS overflow o con alguna de sus propiedades específicas overflow-x u overflow-y

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9affbe29-061e-4bf9-af9a-1a6f284d683e)

Dichas propiedades pueden tomar varios valores, donde visible es el valor que tiene por defecto, permitiendo el desbordamiento. Otras opciones son las siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e138c352-f459-4d77-b85b-b346307fb361)

overflow-x y overflow-y permiten ocultar alguna barra de desplazamiento (habitualmente la barra de desplazamiento horizontal).

---

## Márgenes y relleno

### Márgenes (margin)

Se utilizan para crear espacio alrededor de los elementos, fuera de los bordes definidos. Margin especifica el espacio que existe entre el borde de un elemento y el borde de otros elementos adyacentes. Las opciones son:

● margin-top

● margin-right

● margin-bottom

● margin-left

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e7f36a14-f152-4316-a091-dd5660872b27)

Se puede aplicar en conjunto o de forma concreta a cada una de las zonas del elemento. Estas son las propiedades específicas de cada zona:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a50a0413-cdf9-48d4-a4c0-65941d8094e7)

Podemos aplicar diferentes márgenes a cada zona de un elemento utilizando cada una de estas propiedades, o dejando al navegador que lo haga de forma automática indicando el valor auto.

Para centrar un elemento podemos aplicar un ancho fijo al contenedor. Por ejemplo: ``width:
500px`` con ``margin: auto``. El navegador, al conocer su tamaño, se encarga de repartirlo
equitativamente entre los márgenes, dado que conoce el resto del tamaño de la ventana.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/08df1f20-8c96-43c7-8d7f-cc3528f2cf32)

En el siguiente ejemplo nos encontramos con un solapamiento de márgenes. Por defecto, si tenemos dos elementos adyacentes con, por ejemplo, margin: 20px cada uno, ese espacio de margen se solapará y tendremos 20px en total, y no 40px (la suma de cada uno) como podríamos pensar en un principio

### Relleno (padding)

Los rellenos (padding) son los espacios que hay entre los bordes del elemento en cuestión y el contenido (por la parte interior).

Las opciones son:

● padding-top

● padding-right

● padding-bottom

● padding-left

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/168cdffa-68e3-4017-9616-7092d8056a11)

Al igual que con los márgenes, los rellenos tienen varias propiedades para indicar
cada zona:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e557f0be-dd11-4b82-a12f-e33a1800eb43)

Como se puede ver en la tabla, por defecto no hay relleno (el relleno está en cero), aunque puede modificarse tanto con las propiedades anteriores como la propiedad de atajo: Modelo de caja (en la siguiente página).

---

## Modelo de caja - Atajos

CSS proporciona atajos para los márgenes y los rellenos:


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/325c1179-a4cb-4a25-8572-f5d82e917b98)

---

## Bordes

### Borde (border)

Establece un límite entre la parte interior y la parte exterior de la caja. Se pueden especificar estilo, ancho y color. Las opciones son:

● border-top

● border-right

● border-bottom

● border-left

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a8ae93a4-e83f-412d-9629-87747aef7682)

Las propiedades básicas y específicas de los bordes en CSS son las siguientes:


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0175f529-8543-48bc-9332-2abca82c6300)

El estilo de borde más frecuente es solid (borde liso y continuo), y que además es la opción por defecto. Pueden utilizarse cualquiera de los estilos indicados en la tabla anterior e incluso combinar con otras propiedades.

● hidden: Oculto. Idéntico a none, salvo para conflictos con tablas.

● dotted: Borde basado en puntos.

● dashed: Borde basado en rayas (línea discontinua).

● solid: Borde sólido (línea continua).

● double: Borde doble (dos líneas continuas).

● groove: Borde biselado con luz desde arriba.

● ridge: Borde biselado con luz desde abajo. Opuesto a groove.

● inset: Borde con profundidad «hacia dentro».

● outset: Borde con profundidad «hacia fuera». Opuesto a inset.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/34625869-0a72-4d46-8444-916aad6109da)

### Bordes múltiples

Sólo hemos utilizado un parámetro en cada propiedad, aplicando el mismo valor a cada borde de un elemento. Sin embargo, podemos especificar de uno a cuatro parámetros, dependiendo de lo que queramos hacer:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/12546d21-add7-40ee-9e8b-80f7598ba23b)

Podemos hacer lo mismo con las propiedades border-width y border-style. Teniendo en cuenta esto, disponemos de una gran flexibilidad a la hora de especificar esquemas de bordes más complejos.

### Bordes múltiples

En el ejemplo utilizamos 3 parámetros, indicando un elemento con borde superior rojo
sólido de 2 píxeles de grosor, con borde izquierdo y derecho doble azul de 10 píxeles de
grosor y con un borde inferior verde sólido de 5 píxeles de grosor.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/7ccd4270-10c4-4449-baf7-abb8a13c5e63)

Con la propiedad border-width pasa exactamente lo mismo que con margin y padding, actuando en este caso en relación al grosor del borde de un elemento. Se pueden utilizar de 1 a 4 parámetros.

### Bordes - Atajos

Con tantas propiedades, incluso para hacer algo sencillo necesitamos varias líneas de código. Pero podemos utilizar la propiedad de atajo border, con la que podemos hacer un resumen sin necesidad de indicar múltiples propiedades individuales por separado, realizando el proceso de forma más corta:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/31e4685c-55b4-4e32-a107-758d29f11c43)

### Bordes especificos

Una forma más intuitiva, es utilizar las propiedades de bordes específicos (por zonas) y aplicar estilos combinándolos junto a la herencia de CSS. Para utilizarlas bastaría con indicar la zona justo después de border-:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6d040c47-1e1d-4493-b43f-98b3f542fd49)

---

### Box-sizing

Indica cómo se debe calcular el ancho y el alto total de un elemento. Acepta los valores:

● box-sizing: content-box: Es el valor que cualquier caja tiene asignada por defecto. Las propiedades width y height no incluyen el borde, padding o margin.

● box-sizing: border-box: Las propiedades width y height incluyen el contenido, padding y borde pero no el margin.

● box-sizing: initial: Establece esta propiedad en su valor predeterminado. 

● box-sizing: inherit: Hereda esta propiedad de su elemento padre. 

En el modelo de caja CSS “clásico”, el borde y los márgenes interior y exterior se añaden al tamaño del elemento definido con las propiedades width y height.

#### Box-sizing

La propiedad box-sizing, permite modificar este comportamiento y hacer que el borde y los márgenes
interior y exterior se puedan incluir en el interior del tamaño definido con las propiedades width y height. En este caso se reducirá el espacio disponible para el contenido.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/dc4c7994-7414-4a87-b2d6-2a0eb5597b9c)

---

## Posicionamiento

Los elementos en línea y en bloque nos permiten diseñar esquemas complejos, alineando y combinando elementos.

El posicionamiento por defecto es el estático (static): todos los elementos aparecen con un orden natural según donde estén colocados en el HTML.

No obstante, CSS permite al diseñador modificar la posición en la que se muestra cada caja.

Existen otros modos alternativos de posicionamiento, que podemos cambiar mediante la propiedad position, que nos permiten modificar la posición de los elementos y su contenido.

Utilizando las propiedades que proporciona CSS para alterar la posición de las cajas es posible realizar efectos muy avanzados y diseñar estructuras de páginas que de otra forma no serían posibles.

A la propiedad position se le pueden indicar los siguientes valores:

● static: es el valor por defecto, un elemento con este valor no está posicionado con CSS.

● relative: mediante las propiedades top | bottom | right y/o left el elemento se posiciona en
forma relativa a su contenedor.

● absolute: hace que un elemento se ubique considerando su contenedor posicionado más
cercano. Si no encuentra ningún contenedor cercano, el elemento se colocará respecto al
viewport. El resto de elementos de la página ignoran la nueva posición del elemento.

● fixed: la caja está posicionada con respecto a la ventana del navegador. Se mantiene en el
mismo lugar incluso al hacer scroll en la página. La referencia es el viewport, la parte visible
del navegador.

● sticky: al realizar un scroll y después de alcanzar una posición de desplazamiento
determinada, se “pega” al borde elegido.

Si utilizamos un modo de posicionamiento diferente al estático (absolute, fixed, sticky o relative),
podemos emplear una serie de propiedades para modificar la posición de un elemento. Estas
propiedades son las siguientes

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8500a77f-b883-45f9-a361-a019a475e41e)

Las propiedades top, bottom, left y right sirven para mover un elemento desde la orientación que
su propio nombre indica hasta su extremo contrario. Esto es, si utilizamos left e indicamos 20px,
estaremos indicando mover desde la izquierda 20 píxeles hacia la derecha.

### Posicionamiento relativo (relative)

Si utilizamos la palabra clave relative activaremos el modo de posicionamiento relativo. En este
modo, los elementos se colocan exactamente igual que en el posicionamiento estático
(permanecen en la misma posición), pero dependiendo del valor de las propiedades top, bottom,
left o right variamos la posición del elemento.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2541e0d0-8caa-42fc-a70a-3e24da364f05)

### Posicionamiento absoluto

Utilizando la palabra clave absolute indicamos que el elemento utiliza posicionamiento absoluto. Este tipo de posicionamiento coloca los elementos utilizando como punto de origen el primer contenedor con posicionamiento diferente a estático. Si no existe, emplea el documento completo como referencia.
 
Si el contenedor padre tiene posicionamiento estático, se analiza el posicionamiento del padre del contenedor padre, y así sucesivamente hasta encontrar un contenedor con posicionamiento no estático o llegar a la etiqueta <body>, situación en la que se comportaría como en el ejemplo.

Ejemplo: Si establecemos left:40px, el elemento se colocará 40 píxeles a la derecha del extremo
izquierdo de la página. Sin embargo, si indicamos right:40px, el elemento se colocará 40 píxeles a
la izquierda del extremo derecho de la página.

### Posicionamiento fijo (fixed) y “pegajoso” (sticky)

El posicionamiento fijo (fixed) hace que el elemento se muestre en una posición
fija dependiendo de la región visual del navegador. Es decir, aunque el usuario
haga scroll y se desplace hacia abajo en la página web, el elemento seguirá en el
mismo sitio posicionado.

Ejemplo: Si establecemos top:0 y right:0, el elemento se colocará justo en la esquina superior
derecha y se mantendrá ahí aunque hagamos scroll hacia abajo en la página.
El posicionamiento sticky se utiliza cuando queremos que un elemento se
posicione en un lugar específico de forma fija («sticky», pegajoso).

Ejemplo: Al hacer scroll y llegar a un elemento este podrá quedarse fijo en la parte superior
mientras continuamos haciendo scroll. No debemos confundir con el fijo ya que no queda en una
posición fija, sino que flota respecto del fondo y se queda adherido a la parte superior.

---

### Profundidad (z-index)

Establece el nivel de profundidad de un elemento sobre los demás. De esta forma, podremos
superponer los elementos, quedando “apilados”. Los elementos se posicionan de acuerdo al nivel
de profundidad, quedando “encima” los que poseen un valor de index mayor.


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2275a843-e4e5-4a55-ac17-0e7d8ff95696)

---

## Propiedad visibility y display

La propiedad de visibilidad especifica si un elemento es visible o no.

Nota: los elementos ocultos ocupan espacio en la página. Puede usar la propiedad display para ocultar y eliminar un elemento del diseño del documento.

Sintaxis: ``visibility: visible | hidden | collapse | initial | inherit;`` 

La propiedad display especifica el comportamiento de visualización de un elemento. Ejemplo: especifica si un elemento es tratado como ``block`` or ``inline``.

En HTML, el valor de la propiedad de visualización predeterminada se toma de las especificaciones de HTML o de la hoja de estilo predeterminada del navegador/usuario.

Sintaxis: ``display: value;``

Cada elemento tiene un valor de display por defecto. Recordemos que los navegadores le dan a los elementos valores por defecto block e inline:

● block: el elemento empieza en una nueva línea (div, h1-h6, header, etc)

● inline: puede contener algo de texto dentro de un párrafo sin interrumpir el flujo del párrafo.

● none: es utilizado para ocultar elementos sin eliminarlos, no deja un espacio donde el elemento se encontraba.

● inline-block: Los elementos inline-block fluyen con el texto y demás elementos como si fueran elementos en línea y además respetan el ancho, el alto y los márgenes verticales.

Cada etiqueta HTML tiene un tipo de representación visual en un navegador, lo que habitualmente se suele denominar el tipo de caja. En principio, se parte de dos tipos básicos: inline y block.

### Tipos de display

La tabla siguiente muestra una lista de los valores de la propiedad:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c57b332c-9541-4909-bc1e-6d937d7bd8dd)

### Ocultar elementos

En la lista anterior, falta un valor de la propiedad display. Mediante la mencionada propiedad, es posible aplicar un valor none y ocultar
completamente elementos que no queramos que se muestren. Es muy útil para hacer desaparecer información cuando el usuario realiza alguna acción, por ejemplo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9665d372-151c-41f9-b089-708022ca3f51)

No obstante, también existe una propiedad CSS llamada visibility que realiza la
misma acción, con la ligera diferencia de que no sólo oculta el elemento, sino
que además mantiene un vacío con el mismo tamaño de lo que antes estaba ahí.
Dicha propiedad visibility puede tomar los siguientes valores:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/db360a2e-2040-4a4d-b044-892cae75e20b)

Utilizar visibility: hidden es muy interesante si queremos que un elemento y su
contenido se vuelva invisible, pero siga ocupando su espacio y así evitar que los
elementos adyacentes se desplacen, lo que suele ser un comportamiento no
deseado en algunas ocasiones cuando se aplica display: none.

Otra opción interesante es utilizar la propiedad opacity junto a transiciones o
animaciones, desplazarse desde el valor 0 al 1 o viceversa. De esta forma
conseguimos una animación de aparición o desvanecimiento.

---
