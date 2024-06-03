# Clase 10 - CSS -  Grid

## Temas:

```
● Implementación de Grid.
● Maquetado con Flex y Grid.
```

---

# ¿Qué es CSS Grid?

CSS Grid es una muy buena opción para estructurar, organizar y diseñar los elementos de nuestro sitio web, ofreciéndonos un sistema de disposición apropiado de forma nativa en el navegador.

En CSS solemos utilizar múltiples propiedades para estructurar nuestros sitio web,
utilizando inline-block, float, relative o hasta flexbox que sólo utiliza una
dimensión.

El módulo CSS Grid entra en acción ofreciéndonos un sistema de filas y columnas en
dos dimensiones, y total libertad de los ítems para organizar nuestros contenido a
gusto.

¿Y donde queda el Responsive Design? Con CSS Grid podemos definir filas y
columnas como también redefinirlas a nuestro gusto dentro de un media query.

## CSS Grid | ¿Flexbox vs CSS Grid?

CSS Grid puede convivir con Flexbox. No se trata de tecnologías excluyentes,
sino complementarias

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ad3c5079-eeb9-4c97-b7f9-20e6d3b7fff0)

El módulo de diseño de CSS Grid ofrece un sistema de diseño basado en
cuadrículas, con filas y columnas, lo que facilita el diseño de páginas web sin
tener que usar flotadores y posicionamiento

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/abca0b48-7ff3-4dcb-9dd3-6fbf84d76d52)

## Conceptos básicos

●**Grid Container**: es nuestro elemento “padre”, donde se asigna un
{display:grid;} y nos permitirá colocar otras propiedades para manipular
nuestro diseño.

● **Grid Item**: son los hijos directos de nuestro container. Estos los
manejaremos a nuestra voluntad, nuestras filas y columnas que
moveremos a nuestro gusto.

● **Grid Line**: son las líneas divisorias horizontales y verticales.

● **Grid Track**: es el espacio entre dos líneas adyacentes. Filas y columnas.

● **Grid Cell**: nuestras celdas serán el espacio entre dos filas adyacentes y 2
columnas adyacentes.

● **Grid Area**: espacio rodeado por 4 grid lines.

## CSS Grid | Contenedor

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/75a31999-af82-4f32-93cd-72f451ad4e9c)

## CSS Grid | Display

Un elemento HTML se transforma en un contenedor de grilla cuando tiene
su propiedad display seteada en grid o inline-grid:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/66e73d42-c128-47ae-8a8c-956b0dc489ad)

## CSS Grid | Grid Items

Se pueden referenciar por fila o por columna, aunque no es la única forma.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9c780665-60f8-4fe0-ae03-cdd0a50166a1)

## CSS Grid | Grid Gaps

Es el espacio entre los ítems. Se pueden ajustar los tamaños de gap con las
siguientes propiedades: grid-column-gap; grid-row-gap y grid-gap.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/781f5dc1-cb9d-4e64-89cf-17ab7fe2e701)

## CSS Grid | Grid Lines

Para colocar un grid-ítem en un contenedor se referencian los números de
línea:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3608e3d1-f463-4784-8cd0-a9f9d0c2993c)

## CSS Grid | Propiedades

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4be2b525-afb2-4e2e-9475-9c02720f8a36)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9976c88b-5338-4e6f-82aa-d6ebb626395c)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3cd33e0b-4991-4efd-b959-22057029f0d7)

## CSS Grid | Grid Container

Para que un elemento HTML se comporte como un contenedor de
cuadrícula, debemos establecer la propiedad display en grid (cuadrícula) o
inline-grid (cuadrícula en línea). Los contenedores de cuadrícula consisten
en elementos de cuadrícula, colocados dentro de columnas y filas.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/14758cf4-082c-41d4-9138-c765236e67ee)

## CSS Grid | Grid Container

Este es el código que genera el cuadro de la diapositiva anterior:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0b634fec-6d78-470c-b00a-5f2c7ee7c151)

## CSS Grid | grid-template-columns

La propiedad grid-template-columns define el número de columnas (y el
ancho) de la cuadrícula. Se colocan los valores separados por espacios, y cada
uno define el ancho de la columna respectiva. Se pueden establecer anchos
en px, unidades relativas o %, aunque es recomendable utilizar la medida fr.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/52606a15-4a1d-4c13-9a16-5e0fd1ad1441)


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bac77386-b521-423d-8dfb-03493b57edc8)

Si una cuadrícula de 4 columnas tiene más de 4 elementos, se agrega
automáticamente una nueva fila para colocar los elementos extra.

- **Unidad fracción restante (fr):** La unidad especial de Grid fr (fraction) representa una fracción de espacio
restante en el grid.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c29e8763-7df7-42f3-8ac0-008dc1193f53)

- **La expresión repeat():** Se puede utilizar la expresión repeat() para indicar repetición de valores,
indicando el número de veces que se repiten y el tamaño en cuestión.
La expresión a utilizar es la siguiente: ``repeat([núm de veces], [valor o valores]):``

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d30201a3-6126-4725-ae6d-53e1ee8368ff)

- La propiedad **grid-template-rows** define la altura de cada fila. El valor es una lista separada por espacios, donde cada valor define el alto de la fila respectiva.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/38620828-fe4c-4170-954d-300da10deb10)

- La propiedad **justify-content** se utiliza para alinear toda la cuadrícula dentro del contenedor. El ancho total de la cuadrícula debe ser menor que el ancho del contenedor para que la propiedad tenga efecto.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/57daec23-f749-458d-91d0-3f5bbd3e2416)

- La propiedad **align-content** se usa para alinear verticalmente toda la
cuadrícula dentro del contenedor. La altura total de la cuadrícula debe ser
menor que la altura del contenedor para que tenga efecto.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/57af77e0-1384-4736-9c2d-5fc1305f76fa)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ccd1232b-07da-4392-8289-fc2977dfef03)

- La propiedad **grid-area** especifica el tamaño y la ubicación de un elemento
de cuadrícula en el diseño, y es una propiedad abreviada para las siguientes
propiedades: grid-row-start, grid-column-start, grid-row-end y
grid-column-end.

La grid-area también se puede utilizar para asignar un nombre a un
elemento de la cuadrícula. Y se puede hacer referencia a los elementos de
cuadrícula con nombre mediante la propiedad grid-template-areas del
contenedor de cuadrícula.

Ejemplos de Grid-Area:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6ca35246-f227-4607-99b4-dfafc02e822c)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/da86cc38-cce6-4474-b87b-9f21f9c84176)

---
