# Front End - CLase 3 - HTML 3 - Multimedia y Tablas


## Temas:

```
● Multimedia con HTML: imágenes, video, audio, iframes.
● Tablas.
● Herramienta de inspección.
● Validación de nuestro HTML.
```
---

## Multimedia con HTML: Imágenes, video, audio, iframes


### Imágenes

Para mostrar una imagen en una página tenemos dos formas de hacerlo. Una es usando el elemento ``<img>`` y otras es mediante CSS (que veremos más adelante).

Esta etiqueta requiere de dos atributos obligatorios: ``src`` (de source) y ``alt`` (de alternative).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6cce41e5-cb5d-470d-b782-fb0b7655a0e1)


Utilizamos alt para:

● Posicionamiento en buscadores (extrayendo palabras clave).

● Personas con dificultades visuales (lectores de páginas Web).

● Cuando la imagen no se encuentra disponible.

Con height y width podemos definir el alto y el ancho de la imagen:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0f8c0c34-d422-4c5e-8503-3aadbc5e25f2)

Podemos utilizar una imagen como enlace combinando las etiquetas ``<a>`` e ``<img>``

### Favicon

Un favicon es la pequeña imagen que se muestra en la pestaña del navegador o en la lista de marcadores (favoritos). El tamaño en la barra de direcciones es de 16x16 píxeles.

Para agregarlo debemos tener la imagen .png que deseamos colocar como ícono en formato .ico, que se puede convertir desde https://convertico.com/ y luego agregar en el
head de nuestro documento HTML lo siguiente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/46da4f2b-afb3-4b0b-a68f-42f4ba4e8f0d)


### Audio

La etiqueta ``<audio>`` acepta como atributos:

● **preload**: es usado en el elemento audio para almacenar temporalmente (buffering) archivos de gran tamaño. [+ info]([)](https://www.w3schools.com/tags/att_audio_preload.asp)

● **src**: puede ser una URL del archivo de audio o la ruta al archivo local [+ info]([https://www.w3schools.com/tags/att_audio_preload.asp](https://www.w3schools.com/tags/att_audio_src.asp))

● **controls**: muestra los controles estándar para audio en una página web [+ info](https://www.w3schools.com/tags/att_audio_controls.asp)

● **autoplay**: hace que el audio se reproduzca automáticamente [+ info](https://www.w3schools.com/tags/att_audio_autoplay.asp)

● **loop**: hace que el audio se repita automáticamente [+ info]([)](https://www.w3schools.com/tags/att_audio_loop.asp)

● **muted**: especifica que la salida de audio debe estar silenciada [+ info](https://www.w3schools.com/tags/att_audio_muted.asp)

Más información: [https://www.w3schools.com/tags/tag_audio.asp](https://www.w3schools.com/tags/tag_audio.asp)

### Video

La etiqueta <video> acepta como atributos:

● **controls**: permite activar los controles del player 

● **poster**: muestra una imagen a modo de presentación 

● **autoplay**, loop, muted, preload y src: misma función que en audio.

● **height**: establece la altura del reproductor de video (pixeles) 

● **width**: establece el ancho del reproductor de video (pixeles) 

Más información: [https://www.w3schools.com/tags/tag_video.asp](https://www.w3schools.com/tags/tag_video.asp)

### Iframe

Se utiliza para incrustar otro documento HTML que se cargará en forma independiente en la página actual. Podemos agregar: contenidos de terceros, interfaces de usuario, videos de YouTube,
mapas de Google Maps y banners de publicidad desde otro sitio.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5172065a-3f47-4316-84a0-a604f237bc63)

● **width y height**: ancho y alto.

● **frameborder**: 0: sin borde y 1: con borde

● **scrolling**: habilita las barras de desplazamiento si el contenido no cabe en el iframe. Con “yes” aparecen siempre, con “auto” aparecen sólo si es necesario y con “no” no aparecerán nunca.

#### Mapas de Google:

1. Ingresar a https://www.google.com.ar/maps

2. Buscar una dirección (ej: Pueyrredón 400).

3. Compartir – Insertar un mapa – Copiar HTML.

4. Pegar el código en nuestro editor.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a83983b0-4c99-4802-9760-cf9e649f902e)

#### Videos de YouTube:

1. Buscar un video en YouTube

2. Clic derecho en el video - Copiar código de inserción.

3. Pegar el código en nuestro editor.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1fefa4a7-9fd8-4865-82ec-9dea2963ba06)

También podremos colocar otros mapas gratuitos, contenido de Spotify, Vimeo e inclusive incrustar otras páginas web,

---

## Tablas

● Las tablas se usan para representar datos.

● El ejemplo más común de tablas son los documentos de Excel.

● En HTML hay que definir una etiqueta para cada parte de la tabla.

● Las tablas no se usan para maquetar (hoy se maqueta por CSS).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/af5c2459-fcc3-4a0e-b3de-bc0ffbab35e7)

#### Tablas | Estructura básica

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2cd5fc70-a9a6-4026-9430-1222141fcf3d)

#### Tablas | Colspan y Rowspan

Son atributos que permiten que una celda ocupe más de una columna o más de una fila.

Es lo que comúnmente llamamos “combinar celdas”.

Las columnas (``td)`` siempre van dentro de las filas (``tr``). Si queremos agrupar celdas de una misma celda o columna hay que agregar los siguientes atributos:

● **colspan** (column span = número de celdas a abarcar)

● **rowspan** (row span = número de celdas a abarcar).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4a8a9290-0608-48f0-ac28-69ef528c1730)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/84d7e0ad-7fab-45f3-a162-e0867244049d)

---

## Validar código HTML

Existen sitios para validar las páginas HTML. Ejemplo: [validator.w3.org](validator.w3.org)

Copian el contenido de la página, la chequean, verifican los errores y corrigen.

Ahí se usó una etiqueta ``<h7>`` que no existe y aquí marca el error.

Las advertencias se muestran en amarillo y los errores en rojo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/941f35a4-8c02-43ec-bd4f-9edc651f4811)

---

## Inspeccionar páginas

Se puede inspeccionar sitios web para corregir errores. Para hacer eso, se debe hacer clic con el botón derecho en la web y seleccionar Inspeccionar o presionar F12.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/227158fe-2f59-423c-a21f-15607cbc2d38)

---
