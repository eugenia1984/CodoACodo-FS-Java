# Clase 6 - CSS 2 - Medidas, colores, fondos, fuentes e íconos

## Temas:

```
● Unidades de medida.
● Colores CSS.
● Fondos en CSS.
● Fuentes y tipografías.
● Estilos para textos y listas.
● Íconos
```

---

# Unidades de medida

Las medidas en CSS se emplean para definir dimensiones y márgenes de los elementos, también para establecer el tamaño de letra del texto. Se indican como un valor numérico entero o decimal seguido de una unidad de medida.

CSS divide las unidades de medida en:

● **Absolutas**: Son medidas fijas e indican cantidades exactas en alguna unidad. Su valor real es directamente el valor indicado y se ve igual en todos los dispositivos No dependen de otro valor de referencia, por eso se llaman absolutas. La desventaja que tienen es que son muy poco flexibles.

● **Relativas**: Definen su valor en relación con otra medida y para obtener su valor real se debe realizar alguna operación con el valor indicado. Dentro de las medidas relativas están las flexibles que son relativas al tamaño del viewport.

### Unidades de medida absolutas

Son medidas fijas que deberían verse igual en todos los dispositivos. Tienen la desventaja de ser muy poco flexibles y no adaptarse fácilmente a los diferentes medios y por esto no suelen ser utilizadas. La más utilizada es el pixel (px).

● **px**: Un pixel es el elemento más pequeño de imagen que puede mostrar una pantalla y su medida real depende del dispositivo. 

● **cm**: centímetros (10 mm).

● **mm**: milímetros.

● **pt**: puntos. Un punto equivale a 0.35 milímetros.

● **in**: pulgadas: Una pulgada equivale a 2.54 centímetros (25,4 mm).

● **pc**: picas. Una pica equivale a unos 4.23 milímetros

### Unidades de medida relativas

No están completamente definidas, su valor siempre está referenciado respecto a otro valor (resolución, densidad de pantalla, etc.). Son las más utilizadas por la flexibilidad con la que se adaptan a los diferentes medios y su potencia.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/dc7cd0e8-ea4a-4fee-b87a-4c477ed1ca43)


- La unidad **em** equivale a **16px**, salvo que se modifique por el usuario.

1em equivaldría a 16px, mientras que 2em serían justo el doble: 32px. Por otro lado, 0.5em equivalen justo la mitad: 8px.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/fde15b54-c04a-462f-9d59-864e2a5d7ef3)


**em** es **relativa al tamaño de letra**. Si empleamos un font-size de 10px en el body, 1em equivale a 10px. Su tamaño varía en función del tamaño del elemento padre. 1.2em sería un 20% más grande que el tamaño de su elemento padre.

- Las unidades **ex** o **ch**, menos utilizadas. La unidad ex **es aproximadamente la mitad del tamaño de la fuente establecida por el navegador del usuario, por lo que 1ex es igual a 0.5em**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/fee3559b-00d5-4e5c-816e-d1b160338cb6)

  
La unidad ex se basa en la altura de la x minúscula. Su tamaño exacto depende de la tipografía utilizada, y puede ser algo mayor a 0.5em.

La unidad ch, equivale al tamaño de ancho del 0 de la fuente actual.

- La unidad **rem (root em)** toma la idea de la unidad em, pero permite establecer un tamaño base personalizado (generalmente para el documento en general, utilizando html o la pseudoclase :root). De esta forma, podemos trabajar con múltiplos del tamaño base:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/26422099-a872-4301-9fc2-f3a51eee4709)

  
El porcentaje (%) define una unidad en función de otra. Por ejemplo, si estamos trabajando en 12px y definimos una unidad como 150% obtendremos 18px.

### Unidades de medida flexible


Las unidades flexibles (vw y vh o vmin y vmax) son relativas al tamaño del ancho o alto del viewport (ventana gráfica, región visible de la página Web en el navegador, no el body).

● **vw** (**viewport width**): por ejemplo, si decimos que un div debe medir 50vw, es equivalente al 50% del ancho total del viewport.

● **vh** (**viewport height**): por ejemplo, si definimos qué un div mide 50vh y el alto
del viewport es 800px, nuestro div medirá 400px.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ac7513ed-f49d-42f4-8b67-30adf90bcd86)


---

# Colores y tipografías

La propiedad color se puede usar en cualquier elemento, aunque principalmente se usa para modificar el color del texto y el del background de un elemento.

Existen diferentes formas de especificar el color:

● Por palabra clave: red, blue, lightblue, etc. 

● Valor hexadecimal: #31078C o #FF0000. Cada par de letras simboliza el valor del RGB.

● Valor RGB (Red, Green, Blue): rgb(250, 0, 250), rgb(0, 0, 0) es el color negro y por el contrario rgb(255, 255, 255) es blanco. Valores de 0 a 255. 

● Valor RGBA (RGB + Alpha): rgba(5, 173, 213, 1) o rgba(100%, 62.5%, 100%, 1). El valor Alpha tiene que estar comprendido en [0-1] y hace referencia a la transparencia del elemento, siendo 1 = opaco y 0 = transparente.

## Color de fondo

El fondo de un elemento, por ejemplo ``<div>`` puede ser un color o una imagen:

``<div style="background-color: #334466;">`` -> este div tiene un color de fondo.

``<div style='background-image: url("imagenes/foto.jpg");'>`` -> este div tiene una imagen color de fondo.

En el caso de utilizar una imagen, se aplican las reglas vistas a la hora de definir rutas absolutas o relativas.

## Tipografías

Las tipografías o fuentes son uno de los pilares del diseño web. La elección de una tipografía adecuada, su tamaño, color, espacio entre letras, interlineado y otras características pueden variar mucho, de forma consciente o inconsciente, la percepción en la que una persona interpreta o accede a los contenidos de una página.

Propiedades básicas:

● **font-size**: tamaño de la fuente (px, em, rem).

● **font-style**: estilo de fuente (normal, italic, oblique).

● **font-family**: lista de fuentes (arial, helvetica, sans-serif, etc).

● **font-weight**: grosor (peso) de la fuente (bold, 400, 600, 800).

## Propiedades font-size y font-style

Recordemos que utilizamos ``<h1> . . . <h6>`` para los títulos y ``<p>`` para encabezados.

Font-size (tamaño de la fuente) puede ser absoluto o relativo. El valor predeterminado es 16px

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/14341cf4-e68a-471e-ae11-f1ab69af1d16)

En cuanto a font-style determina el estilo del texto. Posee tres valores:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5b6c7c01-73e6-4830-b4ce-c00901225e6e)

## Propiedades font-family y font-weight

**Font-family** establece la familia tipográfica. Los nombres compuestos se colocan entre comillas. Las fuentes sólo se visualizarán si el usuario las tiene instaladas en su dispositivo. Se recomienda agregar más de una fuente, separadas entre comas.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a810cc09-1c3d-4719-b01b-78c261d03bc7)

**font-weigth**: Establece qué tan gruesos o delgados deben mostrarse los caracteres en el texto

## Google Fonts

Si deseamos utilizar alguna fuente que no sea estándar, podemos utilizar la API de Google Fonts que dispone de cientos de tipografías para utilizar en nuestra página. Simplemente debemos agregar un enlace en la hoja de estilo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bf5451e1-c48b-4a36-9868-b5e685249f57)

## Adobe Fonts

Adobe Fonts es un servicio en línea que brinda a sus suscriptores acceso a su biblioteca de fuentes, bajo un único acuerdo de licencia. Las fuentes pueden usarse directamente en sitios web.

Adobe Fonts: [https://fonts.adobe.com/fonts/](https://fonts.adobe.com/fonts/)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/02fe1573-36f4-4c31-b602-ff87d6a6e5a4)


## Iconos (FontAwesome)

Hay varias formas de agregar iconos a tu sitio web, en [https://fontawesome.com/](https://fontawesome.com/), hay iconos gratuitos y pagos, te registras en el sitio y te envían un mail con una etiqueta que podés agregar al ``<head>`` de tu HTML. Luego podés elegir los íconos a utilizar y agregar a tu página.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3a606e3e-cede-4da4-b4e8-e7a3322c3df3)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/812d12f2-eaa7-4023-9110-2a386bf2f975)


## Iconos (Flaticon)

Otros ìconos interesantes se pueden conseguir en [https://www.flaticon.es/](https://www.flaticon.es/). Se pueden descargar o utilizar directamente vinculando las imágenes desde su web. 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/fb929a01-449b-4ff2-bec4-74f02ec9198a)


---
