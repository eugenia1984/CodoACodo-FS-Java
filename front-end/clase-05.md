# Clase 05 - CSS:

## CSS 1 - Introducción a CSS


Temas:

```
● Bases del CSS y atributo class.
● CSS externo, interno y en línea.
● Selectores básicos (id, clase, etiqueta, universal).
● Especificidad, Herencia, Cascada y Orden de las reglas en CSS.
```

---

# CSS

Es un lenguaje de diseño que nos permite darle estilos a los componentes de un documento en función de una jerarquía. Se ocupa
de la estética, el aspecto.

CSS es una sigla que proviene de Cascading StyleSheets (Hojas de Estilo en Cascada, en español). La palabra cascada hace referencia a una propiedad muy importante de CSS, y es la forma en que se comporta cuando entran en conflicto dos o más reglas de estilo.

Cuando diseñamos un sitio web profesional, con un equipo de trabajo, mantener los estilos separados de la estructura y contenido (HTML) facilita la división de tareas entre los desarrolladores.

---

## ¿Cómo incorporamos CSS?

CSS en Línea: Dentro del atributo style=”” incorporamos los estilos que se van a aplicar solo en esa misma etiqueta. Opción no recomendable.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a357f506-6a81-4fec-a981-e12effcdb1e6)

Utilizando el atributo style dentro de la etiqueta le proporcionamos estilo al párrafo. Se pueden utilizar a la vez varias parejas de: **propiedad: valor**.

- **CSS Interno**: Incluimos la etiqueta ``<style>`` dentro del ``<head>`` en nuestro documento.** Opción menos recomendable**:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0ccfebf2-b07b-4257-a128-605e74c3e2b5)

En el ejemplo anterior todas las etiquetas <h1> tendrán color de fuente blanco y fondo de color rojo.

- **CSS Externo**: En el **head** del documento HTML tenemos que incluir una referencia al archivo ``.css`` dentro del elemento ``<link>``. **Es la forma más recomendada**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ea8fbbb7-75fd-4021-8e0d-a7e7094bf74c)
  
La referencia al archivo externo debe incluir la ruta completa, el nombre del archivo y su extensión si se encuentra en alguna subcarpeta dentro del proyecto.

En caso de que el archivo de estilos se encuentre en la misma carpeta que el documento HTML, únicamente se debe incluir el nombre del archivo y su extensión. Recordemos que es aconsejable mantener estos archivos (CSS y HTML) en carpetas separadas.

Por ejemplo: ``href="css/estilos.css"`` o ``href="estilos.css"``

---

## Estructura

Selector (1): Indica el elemento al cual vamos a aplicar una regla de estilo.

Propiedad (2) y Valor (3): Especifica qué característica voy a afectar de un elemento y qué valor tomará.

Bloque de declaración (4): Indica el estilo que le daremos al selector.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ff5b016a-92af-420a-975e-c28dbd84e7c0)

Los estilos se heredan de una etiqueta a otra. Si tenemos declarado en el ``<body>`` unos estilos, en muchos casos, estas declaraciones también afectarán a etiquetas que estén dentro del body.


---

## Selectores

Indican el elemento al que se debe aplicar el estilo. La declaración indica "qué hay que hacer" y el selector indica "a quién hay que aplicarlo". Hay cuatro selectores básicos:

● **selector universal**: Selecciona todos los elementos de HTML.

● **selector de etiqueta o tipo**: Se utiliza para seleccionar una etiqueta específica.

● **selector de clase**: Se utiliza agregando el atributo class a los elementos que queramos aplicarles estilos.

● **selector de identificador (id)**: Similar a ``.class`` pero solo se aplica a una etiqueta individual.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/23935584-2eaa-42a4-817f-e196e4bdefc5)


### Selector Universal (*)

Se indica con un * (asterisco) y aplica el estilo a todos los elementos contenidos en el documento HTML.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3bbd576b-fbe9-41ec-a195-d375c1b680af)


### Selector de etiqueta o tipo (''<tag>'')

Este selector afecta a una etiqueta específica. Esto nos permite ser más precisos a la hora de aplicar estilos a elementos particulares. Por ejemplo, a todas las etiquetas ``<h1>`` o ``<p>`` del documento.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/225916b4-14dc-481c-a1e6-2e94d46e0afe)


### Selector de clase (.selector)

Se aplica con un punto (.) seguido del nombre que le asignemos al selector.  Dentro del documento HTML se lo referencia dentro de la etiqueta usando el atributo class, con la siguiente estructura: class=“nombredelselector”:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a51e7896-83d6-4355-8059-677b96d6dc8d)


### Selector de id (#selector)

Se coloca con un numeral (#) en CSS y en el documento HTML se hace referencia al selector con id=“nombredelselector”, dentro de la etiqueta a la cual se aplica:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2e048bca-a5c4-4f04-ac41-637be51d1d7b)


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1e2b47b5-fbe5-4e8a-9bf5-fe54acfe4823)

---

## Span y Div (contenedores de información)

- **span (abarcar)**: Es un elemento en línea. Sirve para aplicar estilo al texto o agrupar elementos uno a continuación del otro. Sus etiquetas son ``<span>`` y ``</span>`` (ambas obligatorias). Crea una caja que puede contener texto y/u otras etiquetas que se adapten al ancho del contenedor. 

- **div (división)**: Es un elemento en bloque. Sirve para crear secciones o agrupar contenidos. Sus etiquetas son ``<div>`` y ``</div>`` (ambas obligatorias). Crea una caja, que puede contener texto y/u otras etiquetas, que se separa de la caja anterior con un salto a la línea siguiente.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/cb93957b-157a-4dcf-8b47-8cafc1db7156)

**Nota**: Con display: inline el span no atiende a la propiedades de alto (height) y ancho (width) ya que se adaptará al tamaño del contenido. Cambiando a display: inline-block se permiten estas propiedades, porque se comporta como un div.
Se puede hacer que un span se comporte como un div si en CSS agrego display: block.

--- 

## Atributos globales

Estos atributos pueden utilizarse con todos los elementos HTML:

● **style="estilo CSS"**: Especifica un estilo CSS conforme al elemento. 

● **class="texto"**: Especifica uno o más nombres de clases para un elemento (haciendo referencia a una clase en una hoja de estilo). 

● **id="texto"**: Especifica un id único por cada página. +info

● **title="texto"**: Especifica información extra sobre un elemento (Tooltip Text).

● **hidden**: Evita que el elemento y sus descendientes se muestran en el navegador. Cualquier control de formulario o de script dentro de la sección hidden será ejecutado, aunque no se muestra al usuario.

● **tabindex="número"**: Especifica la posición del elemento en el orden de tabulación del documento. Se usa para tabular a través de los links de la página (o campos de un formulario). 

● **translate="yes|no"**: Indica si el texto del contenido del elemento y los valores del atributo deben ser traducidos o no. La opción por defecto es yes. 

● **lang=”es”**: Especifica el idioma del contenido del elemento. 

● **spellcheck="true|false"**: Especifica si se debe corregir o no la gramática y la ortografía del elemento. 

● **draggable="true|false"**: Indica si el elemento es arrastrable; se puede mover haciendo click sin soltar, moviéndolo a una nueva posición en la ventana.

---

# Especificidad

La especificidad es el mecanismo mediante el cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento. Esto influye en la manera en que los estilos son aplicados. La especificidad está basada en las reglas de
coincidencia que están compuestas por diferentes tipos de selectores CSS.

La especificidad sólo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones. Según las reglas de CSS, en caso de que un elemento sea objeto de una declaración directa, está siempre tendrá preferencia sobre las reglas heredadas de su ancestro.

La especificidad hace referencia a la relevancia que tiene un estilo sobre un elemento de la página al cual le están afectando varios estilos de CSS al mismo tiempo. Es decir, hace referencia al grado de importancia de un estilo sobre otro.

La siguiente tabla muestra los niveles de especificidad, desde los más específicos a los más generales:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/64e73d68-32e4-4c2c-acf7-230da95390ec)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a745644a-7304-4a3e-b42c-e1aa6c2e463a)

IMPORTANTE: Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS.

Ejemplo explicado:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6ba9a302-61cb-43d0-b6a7-df52e950eff4)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e0756aff-0cc9-4028-8b27-9acbd39c135c)


---
