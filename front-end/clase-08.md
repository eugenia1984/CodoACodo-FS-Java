# Clase 08 - Selectores avanzados y Animaciones

## Temas:

```
CSS 4 - Selectores avanzados y Animaciones
● Selectores avanzados.
● Animaciones con CSS.
● Incorporación de transformaciones y transiciones a elementos.
● Introducción Responsive Web Design.
```

---

# Selectores avanzados

Utilizan “combinadores”, signos gráficos que establecen la relación entre los elementos y
permiten hacer una selección específica:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/17664873-090f-4003-b307-ecc167f93a39)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b4f2caa0-8f3e-4582-bc79-61e4960c8848)

---

# Pseudaclase

Una pseudoclase es un selector que marca los elementos que están en un
estado específico o tienen un comportamiento determinado. Todas las
pseudoclases se denominan mediante una palabra precedida por dos puntos y
se comportan del mismo modo. Afectan a un fragmento del documento que
está en un estado determinado y se comportan como si se hubiera añadido una
clase a su HTML.

## :first-child

Esta pseudoclase modifica el estilo del primer elemento de un grupo de
elementos hermanos dentro de un contenedor, es decir “el primer hijo de su
padre”.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d1b5db2a-d7c7-49b8-9c21-cda982c5b0aa)

## :last-child

Se utiliza para representar al último elemento entre un grupo de elementos
hermanos dentro de un contenedor, es decir “el último hijo de su padre”.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/da88114e-b6bf-4c26-8cb7-11f761de723a)


## :nth-child(n)

El selector coincide con cada elemento que es el n-ésimo hijo, independientemente del tipo, de su padre. n puede ser un número, una palabra
clave o una fórmula

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b07c86b2-32c9-4272-b07a-8a3d4986af4a)

## :nth-child(n)

En el ejemplo siguiente, vemos como de la lista se seleccionan primero los
elementos 3, 6 y 9, y luego los que son pares:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b87ac990-6edb-417c-b29d-85369fc4bb2c)

## :nth-child(n): Otros ejemplos

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6df72916-2016-47d6-b0e5-99a993010ba5)

## Pseudoclases para hipervínculos

Se aplican a las etiquetas ``<a>``, que pueden tener cuatro estados: 

• ``:link`` se refiere a un enlace que todavía no ha sido visitado.

• ``:hover`` se refiere a un elemento sobre el que se coloca el puntero del mouse.

• ``:visited`` se refiere a un enlace que ya ha sido visitado.

• ``:active`` se refiere a cualquier elemento que ha sido activado por el usuario.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d021dcc1-cb81-4ac6-a3f9-3789651eff94)

---

# Pseudoelementos

Los pseudoelementos se añaden a los selectores, pero no describen un estado especial sino que permiten añadir estilos a una parte concreta del documento.

Se utilizan para darle estilos a partes específicas de un elemento. Están precedidos por cuatro puntos (``: :``)``:``: ``::first-letter`` se utiliza para darle estilo a la primera letra de un texto:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a844384f-3f38-444e-b48e-f09c591f02a4)


``::selection`` agrega estilos a una parte del documento que ha sido resaltada por el
usuario:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3c1f7899-fe93-4040-ac59-555ab0dd5fc3)

``::before`` y ``::after`` agregan contenido antes y después, respectivamente, del
contenido: 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/48879321-e7fd-4e68-af7c-bcbc0a9aca77)


---

# Transformaciones, animaciones y transiciones

## Transformaciones

Permiten mover, rotar, escalar y sesgar elementos, es decir, efectos visuales en
2D y 3D. Las propiedades principales para realizar transformaciones son las
siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4d54daf2-1c8b-4893-8d81-79f984a62ad3)

Con la propiedad transform podemos indicar una o varias transformaciones para
realizar sobre un elemento, ya sean 2D (sobre dos ejes) o 3D (sobre tres ejes).

## 2D - Traslaciones (translate)

Las funciones de traslación son aquellas que realizan una transformación en la
que mueven un elemento de un lugar a otro. Si especificamos un valor positivo
en el eje X (horizontal), lo moveremos hacia la derecha, y si especificamos un
valor negativo, lo moveremos hacia la izquierda. Lo mismo con el eje Y (vertical).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/92854eb5-718f-409c-92c9-4044316f0508)


Por ejemplo, transform: translate(20px, -30px) traslada el elemento 20 píxeles a
la derecha y 30 píxeles hacia arriba, que es equivalente a utilizar transform:
translateX(20px) translateY(-30px)

## 2D - Escalado (scale)

Las funciones de escalado realizan una transformación en la que aumentan o
reducen el tamaño de un elemento, basándose en el parámetro indicado, que no
es más que un factor de escala:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3d87605d-065e-4e56-9396-831346c7dae3)

En este ejemplo, transform: scale(2, 2) realiza una transformación de escalado
del elemento, ampliándolo al doble de su tamaño original. Si utilizamos scale()
con dos parámetros iguales, estamos manteniendo la proporción del elemento,
pero si utilizamos diferentes valores, acabaría deformandose.

## 2D - Rotaciones (rotate)

Las funciones de rotación simplemente giran el elemento el número de grados
indicado:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f27caeb8-de95-4e14-ab1d-ad7b59c1eddc)

Con transform: rotate(5deg) realizamos una rotación de 5 grados del elemento
sobre sí mismo. Utilizando rotateX() y rotateY() podemos hacer lo mismo
respecto al eje X o el eje Y respectivamente.

## 2D - Deformaciones (skew)

Por último, las funciones de deformación establecen un ángulo para torcer, tumbar
o inclinar un elemento en 2D.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f68e44e2-9f46-4aa3-b62e-2d932832f58c)

Aunque la función skew() existe, no debería ser utilizada, ya que está marcada
como obsoleta y serán retiradas de los navegadores en el futuro. En su lugar
deberían utilizarse skewX() o skewY()

---

## Funciones 3D

A las funciones anteriores, también podemos añadir las funciones equivalentes
de CSS para hacer uso del eje Z y con esto acceder a las dimensiones espaciales o
“3D”. Las propiedades de transformación 3D son las siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f2c0203d-ec8a-46e8-824f-a55f2c26b6c5)

---

## Transformaciones múltiples

Si indicamos dos propiedades transform en el mismo elemento, con diferentes
funciones, la segunda propiedad sobreescribirá a la anterior, como ocurre con
cualquier propiedad de CSS:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/13fbd25e-270c-4361-b842-11da56e9a48c)

Para evitar esto se suelen emplear múltiples transformaciones, separándolas
mediante un espacio. En el siguiente ejemplo, aplicamos una función de
rotación, una función de escalado y una función de traslación de forma
simultánea:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/fa87b7b5-ca1a-47f4-99df-cd7826cdd058)

---

## Transiciones

Las transiciones CSS le permiten cambiar los valores de una propiedad, durante un
período determinado. Se basan en un principio muy básico: conseguir un cambio de
estilo con un efecto suavizado entre un estado inicial y un estado final.
Para crear un efecto de transición, debemos especificar dos cosas:

● La propiedad CSS a la que desea agregar un efecto (¿qué propiedad modifico?)

● La duración del efecto (¿durante cuánto tiempo?)

Las propiedades relacionadas que existen son las siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c27ce34f-d7c5-4e3b-8d38-48b8b44d00a5)

● transition-property: Indica la propiedad que será afectada por la
transición. Puede ser una propiedad concreta (width o color, por ejemplo) o
simplemente all para que se aplique a todos los elementos. Por otro lado,
none hace que no se aplique ninguna transición.

● transition-duration: Establece la duración de la transición. Se recomienda
comenzar con valores cortos, para que las transiciones sean rápidas y
elegantes. Una duración demasiado grande producirá una transición con
detenciones intermitentes, y pueden resultar molestas a muchos usuarios.

● transition-timing-function: indica el ritmo de la transición que queremos
conseguir. Se recomienda comenzar con linear (ritmo constante) y luego
utilizar otros valores para variar el ritmo sea al inicio y/o al final de la transición.

Los valores que puede tomar la propiedad son los siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/274cf546-dda9-46ba-9d49-fec7a205259a)

Un valor linear siempre es constante, mientras que ease comienza suavemente,
aumenta la velocidad y finaliza suavemente. Ease-in y ease-out son variaciones que
van más lento al principio o al final, y ease-in-out una mezcla de ambas.
La función Cubic-Bezier() nos permite configurar con más detalle la transición.

---

## La función de tiempo Cubic-Bezier()

Es una función personalizada. Podemos asignar valores que definen la velocidad que
queramos que tenga la transición. En la última columna de la tabla anterior podemos
ver los valores equivalentes a cada una de las palabras clave mencionadas. En
principio, el formato de la función es cubic-bezier(A, B, C, D), donde:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f11c11e8-0f23-423e-a7a6-3a0f7907e645)

[Simulador de Cubic-Bezier()](https://cubic-bezier.com/#.17,.67,.83,.67)

transition-delay nos ofrece la posibilidad de retrasar el inicio de la transición los
segundos especificados.

### Atajo: Transiciones

Como siempre, podemos resumir todas estas operaciones en una propiedad de atajo
denominada transition. Los valores del ejemplo superior, se podrían escribir como se
puede ver a continuación (si no necesitas algún valor, se puede omitir):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/402a13dd-d8e5-4314-b166-ad599f706626)

Fuente: [https://lenguajecss.com/css/animaciones/transiciones/](https://lenguajecss.com/css/animaciones/transiciones/)

---

## Animaciones

Una animación permite que un elemento cambie gradualmente de un estilo a otro.
Podemos cambiar tantas propiedades CSS como deseemos, tantas veces como sea
necesario.

Las animaciones amplían el concepto de transiciones convirtiéndolo en algo mucho más
flexible y potente, partiendo del mismo concepto de realizar cambios en ciertos estados
inicial y final pero incorporando más estados, pudiendo realizar cambios desde un estado
inicial, a un estado posterior, a otro estado posterior, y así sucesivamente. Además, esto
será posible de forma automática, sin que el usuario tenga que realizar una acción
concreta.

Para utilizar la animación CSS, primero debemos especificar algunos fotogramas clave
(@keyframes) para la animación, que contendrán los estilos que tendrá el elemento en
determinados momentos. Además tendremos que utilizar las propiedades de las
animaciones, que definen el comportamiento de la misma.

### Propiedades de animación CSS

Para definir este comportamiento necesitamos conocer las siguientes propiedades
CSS:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e8596f24-c186-4bee-bd0f-6ae18659b052)

animation-name permite especificar el nombre del fotograma a utilizar. animationduration,
animation-timing-function y animation-delay funcionan exactamente
igual que en transiciones.

La propiedad **animation-iteration-count** permite indicar el número de veces que se
repite la animación, pudiendo establecer un número concreto de repeticiones o
indicando infinite para que se repita continuamente. Por otra parte, especificando un
valor en animation-direction conseguiremos indicar el orden en el que se reproducen
los fotogramas, pudiendo escoger un valor de los siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2909a77a-b8cc-4f6f-8bfa-486d3348d134)

Por defecto, cuando se termina una animación que se ha indicado que se reproduzca
sólo una vez, la animación vuelve a su estado inicial (primer fotograma).

Mediante la propiedad animation-fill-mode podemos indicar que debe mostrar la
animación cuando ha finalizado y ya no se está reproduciendo; si mostrar el estado
inicial (backwards), el estado final (forwards) o una combinación de ambas (both).

La propiedad animation-play-state nos permite establecer la animación a estado de
reproducción (running) o pausarla (paused).

## Atajo: Animaciones

Nuevamente, CSS ofrece la posibilidad de resumir todas estas propiedades en una
sola, para hacer nuestras hojas de estilos más específicas. El orden de la propiedad de
atajo sería el siguiente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/addefc44-03e4-47d7-a39f-158c04ff7565)

Debemos ser cuidadosos al indicar el tiempo en las propiedades de duración. Al ser
una unidad diferente a las que solemos manejar (px, em, etc...) hay que especificar
siempre la s, por segundos, aunque sea un valor igual a 0.

---

## Fotogramas (keyframes)

Para definir los fotogramas de una animación utilizaremos la regla @keyframes.
Primero elegimos un nombre para la animación (ya que podemos tener varias en una
misma página), mientras que podremos utilizar varios selectores para definir el
transcurso de los fotogramas en la animación.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/91883f55-9d09-450f-bb1a-c0e965546c15)

En este ejemplo partimos de un primer fotograma con un elemento con color de
fondo rojo. Si observamos el último fotograma, indicamos finalice con color de fondo
verde. La regla @keyframes creará la animación intermedia para conseguir que el
elemento cambie de color.

Los selectores from y to son realmente sinónimos de 0% y 100%. Al modificarlos
podremos ir añadiendo nuevos fotogramas intermedios:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bdc8d779-f242-43c6-9c6d-6fcfb7efc06a)

---

## Encadenar animaciones

Es posible encadenar múltiples animaciones, separando con comas las
animaciones individuales y estableciendo un tiempo de retardo a cada
animación posterior:

```CSS
.animated {
 animation:
 moveRight 5s linear 0, /* Comienza a los 0s */
 lookUp 2.5s linear 5s, /* Comienza a los 5s */
 moveLeft 2s linear 7.5s, /* Comienza a los 7.5s (5 + 2.5) */
 dissapear 2s linear 9.5s; /* Comienza a los 9.5s (2 + 7.5) */
}
```

Hemos aplicado varias animaciones a la vez, estableciendo un retardo
equivalente a la suma de la duración de las animaciones anteriores,
encadenando una animación con otra.+

### Librería de animaciones Animate.css

Podemos utilizar Animate.css para dar dinamismo a nuestro contenido. Ingresar

● En pocos pasos se pueden agregar animaciones CSS a cualquier elemento
con esta sencilla librería.

● En la creación de cualquier contenido web resulta interesante incorporar
animaciones que nos ayuden a mejorar la experiencia del usuario durante la
interacción con el contenido.

● Permite disponer de una gran variedad de animaciones CSS sin necesidad de
crearlas nosotros mismos.

● Esta librería permite conseguir que el contenido sea más atractivo y
dinámico.

---

# Introducción Responsive Web Design

El diseño web responsivo se trata de usar HTML y CSS para cambiar el
tamaño, ocultar, reducir o ampliar automáticamente un sitio web, para que
se vea bien en todos los dispositivos (computadoras de escritorio, tabletas y
teléfonos).

Una web responsive es aquella que es capaz de adaptarse a cualquier
dispositivo, ya sean computadoras, portátiles, tablets o smartphones. Y en cada
uno de estos dispositivos el sitio web debe visualizarse correctamente.

El diseño responsivo se encarga precisamente de esto, de responder al
tamaño de los dispositivos desde los que se visualizan los contenidos web,
adaptando sus dimensiones y mostrando los componentes de manera
optimizada y ordenada sin importar el tipo de soporte que sea.

### Diseño responsivo vs Diseño adaptativo

Un diseño responsivo responde a las
dimensiones del dispositivo, mientras que un
diseño adaptativo se adapta, pero no
necesariamente responde en todo momento,
tiene cierto delay, estamos hablando casi de
lo mismo.

El diseño web responsivo adapta la
estructura y los diferentes elementos de
cada página web a las dimensiones y
características de cada pantalla. Por otro lado,
el diseño web adaptativo es menos flexible, y
se basa en el uso de tamaños y características
pre-establecidas. Las diferencias entre ambos
métodos se encuentran en el proceso creativo
y de diseño, en el resultado final y la
experiencia del usuario.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ea61ad2d-323c-4b2f-b63f-bc0004cede1b)

### Flujo (The Flow) vs Estático (Static)

Cuando una pantalla se vuelve más pequeña, el contenido comienza a crecer
verticalmente ocupando más espacio, y el contenido que se encuentra debajo va
a ser desplazado hacia abajo, eso se llama flujo.

Si es estático ese flujo de elementos no se desplaza, no se adapta al ancho del
viewport y se pierde contenido o cierto contenido tapa a otro.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/279d011d-c9cf-4678-9187-50b20ae358ea)


### Unidades Relativas vs Unidades Absolutas

La densidad de píxeles de cada dispositivo puede variar, por eso necesitamos
unidades que sean flexibles y funcionen sin importar el dispositivo. Ahí es donde
las unidades relativas como los porcentajes son útiles. Entonces, hacer algo con
un 50% de ancho significa que siempre ocupará la mitad de la pantalla (viewport,
el tamaño de la ventana del navegador abierta), independientemente del
dispositivo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3da5cc50-3974-4c6e-a35d-d8f1c2871da2)

### Valores Mínimos y Máximos

En un celular nos puede interesar que determinado contenido ocupe todo el
ancho de la pantalla, pero al pasar a un TV 4K podríamos cambiar de idea. Por
ejemplo podríamos tener un width: 100%, pero con un max width: 1000px.
En un celular, las imágenes pueden tener un ancho diferente a las que vemos en
otras pantallas. El alto no importa tanto en mobile, porque podemos scrollear.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/aec91ffc-c8fb-4ad1-be6a-e93850fcd6ac)

### Puntos de corte (Breakpoints)

Estos puntos de corte permiten al diseño cambiar en determinados puntos, por
ejemplo, en un monitor podemos tener 3 columnas, pero sólo 1 en un celular
(que es más angosto). Estos puntos de quiebre se crean con los media queries,
que nos permiten determinar que si el mínimo del ancho de la pantalla tiene un
valor en lugar de otro, en vez de distribuir el contenido en tres columnas
colocarlo en una sola, con varias filas.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9fd5b070-471a-4c6d-9918-6830dcf26c80)

### Objetos anidados (Nested Objects)

Tener muchos objetos que dependan de otros puede ser difícil de controlar, sin
embargo, agruparlos en contenedores nos puede simplificar las cosas.
¿Por qué usamos contenedores? Porque a la hora de pensar contenido
responsive nos va a facilitar posicionar un grupo de elementos en otro lugar.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6bd13e03-ab84-45b8-8d7e-5f0db1c9ee20)

### Mobile first vs Desktop first

● Mobile first: Primero nos enfocamos en dispositivos móviles y luego pensamos en otros.

● Desktop first: Primero nos enfocamos en dispositivos de escritorio, y luego pensamos en
otros.

Estadísticamente, los dispositivos móviles son mayoritariamente los que acceden
a los sitios Web. Los dispositivos de escritorio tienden a utilizarse cada vez menos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2aef8397-d0d3-4e54-9164-47cb9349678d)


###  Bitmaps vs Vectors

Bitmaps: JPG, PNG, GIF. Recomendadas para muchos detalles y efectos.

Vectors: SVG (gráficos basados en vectores escalables), si voy a mostrar un ícono
uso Icon Fonts, que son más livianos, pero algunos exploradores viejos no los
soportan.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ea41f51a-c4bd-46be-8b0f-d2f817038287)

### Texto responsivo

Recordemos que el tamaño del texto se puede configurar con una unidad "vw",
que es el "ancho de la ventana gráfica". De esa forma, el tamaño del texto seguirá
el tamaño de la ventana del navegador.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6981f185-fe22-418b-8b94-3f38f6fc4ac9)

Viewport es el tamaño de la ventana del navegador.

1vw = 1% del ancho de la ventana gráfica.

### System Font vs WebFonts

● Fuentes de la Web: son descargadas por lo que, cuantas más haya, más lento cargará el
sitio.

● Fuentes del Sistema: más rápidas, pero si NO están en el cliente navegador del usuario
se usa una por defecto.

Cuando estamos trabajando con dispositivos móviles tenemos que tener en
cuenta que todo se carga.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/17a7cd77-fcc2-4ac3-b047-0af142c400c1)

### Imágenes responsivas

Las imágenes responsivas son imágenes que se escalan bien para adaptarse a
cualquier tamaño de navegador.

Si la propiedad CSS width se establece en 100%, la imagen responderá y se
ampliará y reducirá.

Una imagen grande puede ser perfecta en una pantalla de computadora grande,
pero inútil en un dispositivo pequeño. ¿Por qué cargar una imagen grande
cuando tiene que reducirla de todos modos? Para reducir la carga, o por
cualquier otro motivo, puede utilizar media queries para mostrar diferentes
imágenes en diferentes dispositivos.

---
