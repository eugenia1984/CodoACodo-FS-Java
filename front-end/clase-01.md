# Front End - Clase 1

## Temas:

```
HTML 1 - Conceptos básicos de HTML
● Conceptos básicos de la web
● Proyecto web: ¿qué es?
● Concepto Cliente/Servidor
● Introducción a HTML.
● Etiquetas básicas y atributos.
```

---

## Página, Sitio y Aplicación

### Página Web

Principales características de una página Web

● Es un documento HTML (texto, imágenes, videos, CSS, Javascript).

● Pueden ser estáticas (sólo código) o dinámica (con, por ejemplo, contenido extraído de una base de datos).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/420bcb6b-b062-4aa9-b685-2be93d6a855e)

### Sitio Web

Principales características de un sitio Web

● Son un conjunto de páginas Web estructuradas en un dominio.

● Se pueden crear escribiendo código o mediante CMS o builders.

● Pertenecen a empresas, organizaciones o personas.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/600dff40-cf1f-45f3-83b8-48febab3ec94)

### Aplicación Web

Principales características de una aplicación Web

● Es un software desarrollado con tecnologías Web.

● Se crea mediante código, utilizando diversos lenguajes de programación, librerías, frameworks, etc.

● Son creadas por desarrolladores Web profesionales.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/75339229-81e6-43ee-a118-36b13e88ae3d)

Fuente: [https://ed.team/comunidad/pagina-web-vs-sitio-web-vs-aplicacion-web](https://ed.team/comunidad/pagina-web-vs-sitio-web-vs-aplicacion-web)

---

## Aplicación de Escritorio

1. El usuario accede a la aplicación.

2. La aplicación accede a un repositorio de datos para pedir información o para modificarla.

3. La aplicación muestra al usuario la información solicitada.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f61057b3-1dc3-4b36-ae22-fb59d8212245)

---

## Aplicación Web

1. El usuario ingresa la URL (dirección) en el navegador.

2. El servidor web recibe la solicitud y envía la respuesta en HTML al navegador.

3. En el navegador se ingresa la información de usuario y contraseña.

4. Dicha información se traduce a HTML.

5. Dicha información se envía al servidor.

6. Si estos datos son válidos el usuario es redireccionado a la página que desea ingresar.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4cb3d961-45e4-45f0-aaf2-bda420f54021)


---

## Bases del desarrollo web

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/7d319105-230a-4d91-9ec7-0ff616e557ab)


### Protocolo TCP/IP

Los protocolos…

● **TCP**: Transmission Control Protocol

● **IP**: Internet Protocol

● Son una forma de comunicación común entre dispositivos.

● Proveen reglas estandarizadas de comunicación en la red.

● Determinan cómo se comunican y quién comunica, garantizan el envío de datos y proveen mecanismos para resolver errores.

● IP proporciona la dirección de los dispositivos, TCP se encarga de la entrega de datos.

● Los mensajes se descomponen en “paquetes”, se envían a través de la red y se ensamblan en el destino.

La dirección IP es un conjunto de números que identifica de forma unívoca a un dispositivo (computadora, laptop, smartphone) que utilice el protocolo IP.

### Ventajas de una Aplicación Web

● Se puede ejecutar desde cualquier dispositivo que cuente con navegador y con conexión a Internet.

● No es necesario instalarlas en el dispositivo, basta con un navegador web.

● Son fáciles de actualizar y mantener.

● Su funcionalidad es independiente al Sistema Operativo instalado en la PC del usuario.

● Permite que las aplicaciones sean multiusuarios.

● Permite separar los datos almacenados en el servidor de base datos, del front end, donde se muestran al usuario.

● Las páginas web poseen estructuras similares que mejoran la experiencia en el uso de las diferentes aplicaciones.

---

## Aplicación Escritorio vs. Aplicación Web

### Aplicación Escritorio

● Es aquella que está instalada en el dispositivo del usuario.

● Es ejecutada directamente por el sistema operativo del dispositivo, ya sea Microsoft Windows, Mac OS X, Linux, Android, etc.

● Su rendimiento depende de diversas configuraciones de hardware como memoria RAM, disco duro, memoria de video, etc.

### Aplicación Web

● Es aquella que está instalada en un Servidor.

● Su ejecución requiere que el usuario disponga de:

1. Un dispositivo con conexión a Internet

2. Un navegador (Google Chrome, Internet Explorer, Mozilla Firefox, etc.)

● El usuario solo necesita renderizar contenido, lo que suele ser menos demandante de poder de cálculo

---

## Front-End y Back-End - Concepto Cliente/Servidor

### Front-End

● Es la parte visible por el usuario de una página Web.

● Se relaciona con la creación de una página funcional (computadora / tablet o celular) que puede verse en un navegador (cliente).

● HTML, CSS y JavaScript.

● Editor de texto plano y navegador de Internet.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b13fed9c-b43f-4cde-bb2c-1b476286f592)

### Back-End

● Corre en el servidor.

● Se encarga del manejo de algoritmos y la utilización de bases de datos para guardar o procesar información: usuarios, productos, claves, procesos
de selección, filtros, listados y todo tipo de consultas sobre plataformas Web.

● Parte administrativa del sitio Web.

● Bases de datos, Python y frameworks asociados.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/71e3d42f-60b1-488d-958f-d4a899ff93f5)


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ae0a8c8f-dc92-4cd1-a7c0-eb7c7b9e8553)

---

## HTML

- **HyperText Markup Language**: Lenguaje de marcado de hipertexto.

-Define la estructura, semántica y contenido de las páginas Web.

-El navegador (cliente) interpreta el HTML y lo representan en pantalla.

-Permite agregar texto, imágenes, enlaces, tablas, listas, formularios, etc.

-Última versión del estándar: HTML 5.

-No todos los navegadores son capaces de interpretar un mismo código de una manera unificada (siempre debemos probar que funcione en la mayoría de ellos).

-Utiliza etiquetas (tags) que definen la estructura del documento.

-Texto plano con extensión .html

- **Hipertexto**: Sistema que permite enlazar fragmentos de textos entre sí. Permite que la lectura no sea lineal, sino que el usuario acceda a la información a través de los ítems relacionados.


### HTML: ¿Cómo funciona?

1. El navegador (cliente) le pide información al servidor.

2. El servidor devuelve la información al cliente en un archivo HTML.

3. El navegador en el cliente lee el archivo de arriba hacia abajo y de izquierda a derecha para interpretar la información.

4. Tiene en cuenta las etiquetas que tiene el documento y las va renderizando en la pantalla (lo que se ve en el navegador).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8b4fab51-8e49-42a2-a71a-c45a459a2608)


### Editores de texto ¿qué usamos para escribir HTML?

Necesitamos utilizar un editor de texto, que genere archivos de “texto plano”.

Hay muchos disponibles, desde el bloc de notas de tu sistema operativo hasta algunos multiplataforma como Visual Studio Code.


---

## Página Web - Estructura

### Estructura de una Página Web (ejemplo)

Estas etiquetas ayudan a definir la clase de contenido tendrá una página Web Describen su significado tanto para el navegador como para el desarrollador. A través de ellas los navegadores y buscadores reconocen patrones y una estructura determinada.

Debemos respetarlas porque ayudan al navegador a entender su significado para mostrarlo en pantalla y ayudan a los buscadores a reconocer el contenido y la estructura del sitio.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/64effb75-a98d-4870-b1bc-5dacadf4e8c3)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c5722246-0643-4828-a525-7aac727e26eb)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/99f254ff-b2d1-4d8c-882c-6450de6e31f2)

**Tip**: En VSC si escribimos html:5 y presionamos TAB este código se escribirá automáticamente

### Estructura de una Página Web (código)
 
-  `<!DOCTYPE html>` Indica que la versión corresponde a HTML5.

- `<html lang= “es”>` Es la etiqueta principal que engloba al resto de las etiquetas, el atributo lang
define el tipo de lenguaje.

- `<head>` Es la cabeza del documento que contiene los metadatos de la página web.

- `<meta` charset="utf-8"> Indica al navegador qué tipo de caracteres contiene la página, con el atributo charset vamos a indicar el conjunto de caracteres que vamos a usar y con el valor "utf-8" abarcamos a la mayoría de los sistemas de escritura.

 - `<title>`Indica el título de la página Web, que se visualiza en la barra de título del navegador.

- `<body>`` Es el cuerpo del documento donde va a estar todo el contenido que vamos a mostrar.
  
---

## Sintaxis - Las etiquetas

● Definen qué función cumple cada elemento dentro de la página.

● Estructura básica, tienen una apertura y un cierre que describen la información contenida entre ellas, aunque algunos casos solamente tienen apertura, como la etiqueta `<br>` (line break o salto de línea):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9c20903a-6357-4c64-8d9b-4576a88ff31a)


### Etiquetas básicas

``<h1>``, ``<h2>``, ``<h3>``, . . . ``<h6>``: Encabezados, numerados del 1 al 6 por orden de relevancia. Es importante respetar ese orden para que el navegador entienda la estructura de la página.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8be5aec2-d81a-4847-982f-358e7069656c)

**Tip**: En VSC si escribimos h1 y presionamos TAB la etiqueta de cierre se escribe automáticamente

### Las etiquetas

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3d08ce25-8102-4fe8-835b-cbae1fbe489e)

- Ejempplo:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1f5a4955-7cc6-46ec-ba7a-32de004a313b)

### Etiquetas semánticas

Delimitan el contenido de mi página Web, indicando sus partes. Hay distintas etiquetas determinadas para cierto tipo de contenido. A través de ellas los navegadores y buscadores reconocen patrones y una estructura determinada.

● ``<header>`` encabezado de un documento o sección.

● ``<nav>`` define un conjunto de enlaces de navegación.

● ``<main>`` representa al contenido principal dentro del body.

● ``<section>`` define secciones de un documento.

● ``<article>`` especifica contenido independiente ej: un mensaje en un foro, comentarios, etc.

● ``<aside>`` se suele usar para colocar información adicional ej: publicidad.

● ``<footer>`` pie de página, suele contener información de contacto, mapa del sitio.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a3649985-5ee4-44ca-9041-e44a3343d049)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f8d6db62-727e-41cd-b870-bafed048b2bc)

---

## Alineación de párrafos

``<p align="left">`` Párrafo ``</p>`` el atributo “align” se utiliza para definir la alineación del párrafo:

- left: alinea el texto a la izquierda.

- right: alinea el texto a la derecha.

- center: alinea el texto al centro.

- justify: coloca el texto justificado, parejo a ambos lados

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/479de0d9-9067-4c6d-a761-2ca3f460f143)


---

## Etiquetas básicas

- ``<p>``: Representa un párrafo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e3bb8a69-5e42-4dd7-8f54-49384b06f83b)


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/be4e885b-126d-4933-a887-db261a7bae39)

**Tip**: En VSC con si escribimos Lorem100 se escribirá un texto de ejemplo de 100 palabras. Y escribiendo p*3 se crearán 3 etiquetas ``<p>``.

---

## Cómo pensar la estructura de un Sitio Web:

[https://coach2coach.es/estructura-sitio-web/](https://coach2coach.es/estructura-sitio-web/)

---

## Posicionamiento de sitios web en buscadores (SEO)
 
El posicionamiento en buscadores, optimización en motores de búsqueda o SEO (del inglés search engine optimization), es un conjunto de acciones orientadas a mejorar el posicionamiento de un sitio Web en la lista de resultados de Google, Bing, u otros buscadores de internet.

El SEO trabaja aspectos técnicos como la optimización de la estructura y los metadatos de una web, pero también se aplica a nivel de contenidos, con el objetivo de volverlos más útiles y relevantes para los usuarios.

Info útil sobre posicionamiento en la Web:

[https://wellaggio.com/como-mejorar-el-posicionamiento-seo-de-mi-pagina-web/](https://wellaggio.com/como-mejorar-el-posicionamiento-seo-de-mi-pagina-web/)

[https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=es](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=es)

---
