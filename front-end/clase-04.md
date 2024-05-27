#  Front End - Clase 4 - 

## Temas:

```
HTML 4 - Formularios y subida al servidor
● Formularios.
● Etiquetas semánticas.
● Subida a un hosting gratuito.
● Cómo pensar un proyecto web.
```

---

## Formularios y subida al servidor

### Formularios

Un formulario HTML es una sección de un documento que contienetexto, código, elementos especiales llamados controles: casillas de verificación (checkboxes), botones de opción (radio buttons), menúes, etc.; y rótulos (labels) en esos controles. 

Los usuarios normalmente “completan” un formulario modificando los valores de sus controles (introduciendo texto, seleccionando objetos de un menú, etc.), antes de enviar el formulario a un agente para que lo procese (por ej.: a un servidor web, a un servidor de correo, etc.)

### Formularios: ``<form>``

Se utiliza la etiqueta contenedora ``<form>``, que incluye todos los campos necesarios para su funcionamiento.

Hay tipos de campos adecuados para cada tipo de dato.

Existe un control especial, el botón, que puede enviar los datos del formulario al servidor o limpiar el contenido de sus campos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/326be4eb-52c5-4c45-83ac-3f6469186d04)


### Formularios: atributos action y method

La etiqueta ``<form>`` admite diversos atributos. Entre ellos:

● **action**: define el tipo de acción que se llevará a cabo (enviar a un mail o procesar su contenido con un script). También podemos indicar la URL a la que se enviará la petición HTTP con
toda la información del formulario.

● **method**: indica si la petición HTTP será **GET** o **POST**.

Ejemplo: [https://www.w3schools.com/tags/att_form_method.asp](https://www.w3schools.com/tags/att_form_method.asp)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/532d432e-50da-4944-8d6e-8d34e5871bb6)


### Formularios: ``<label>``

- ``<label>``: se usa para especificar la etiqueta (o nombre) del campo del formulario. Es información para el usuario. Admite el atributo for, que debe tener el mismo valor que el atributo id del campo (input, select o textarea) al que hace referencia la etiqueta.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/171f5c18-29c0-422e-923a-80f536bc4318)


### Formularios: ``<input>``

Atributos del tag ``<input>``:

● **type**: este valor puede tener muchos valores: text, email, checkbox, color, date, file, hidden, etc. en función del tipo de campo que queramos.

● **id**: este atributo es obligatorio si en el elemento label tiene un atributo for, en tal caso deberá contener un identificador único en la página.

● **name**: representa el nombre asignado al campo cuando se envía la petición HTTP.

● **size**: define el tamaño de la caja de texto en número de caracteres visibles.

● **maxlength**: indica el tamaño máximo del texto, en número de caracteres, que puede ser escrito en el campo.

● **value**: representa el valor que se asignará al campo cuando se envíe la petición HTTP. Permite asignar un valor por defecto al campo.


### Formularios: atributo type

El atributo type de la etiqueta <input> valida el tipo de dato de entrada:

● text: permite ingresar una cadena alfanumérica.

● number: sólo permite seleccionar un número.

● date: ofrece un calendario para cargar la fecha.

● password: oculta el texto que se está ingresando en el campo.

● email: valida que sea un mail.

● url: valida que sea una url.

● image: define una imagen como botón de envío.

● tel: define un campo para ingresar un número de teléfono.

● file: define un campo de selección de archivo.

● button: activa código JavaScript cuando se hace clic en él.

● checkbox: permite elegir varias opciones.

● radio: permite elegir una opción entre varias posibles.

● range: define un control de rango (como un control deslizante).

● submit: botón enviar.

### Formularios: ``<input type=”password”>``

Ocultar texto para contraseñas:

Utilizamos el atributo type con el valor “password” para generar un campo input que oculte el texto que se está ingresando.

Se utiliza, por ejemplo, para el ingreso de contraseñas. Reemplaza cada caracter ingresado por un asterisco.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/37781779-d3a5-4e57-9bfa-ec88f335ea2e)


### Formularios: ``<input type=”checkbox”``

Los checkboxes permiten seleccionar algunas opciones de una lista.

Se crean utilizando en un input el atributo type con el valor “checkbox” Para que funcionen como una unidad, cada uno de estos input deben tener su atributo name con el mismo valor. 

El atributo value contiene el valor que contendrá ese campo cuando la opción correspondiente esté seleccionada.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f43a3753-92cd-4d03-a740-de8a50e3dc16)


### Formularios: ``<input type=”radio”>``

Los radiobutton o simplemente radio, permiten seleccionar una opción de una lista.

Se crean utilizando en un input elatributo type con el valor “radio”.

Para que funcionen como una unidad, cada uno de estos input deben tener su atributo name con el mismo valor.

El atributo value contiene el valor que contendrá ese campo cuando la opción correspondiente esté seleccionada.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/eac14ca7-80bc-4ce3-9e93-15158aa63444)

### Formularios: botones

Los botones que vemos en los formularios también son un input. Se crean configurando el atributo type con el valor “submit” o “reset”.

Un input del tipo “submit” permite, al ser pulsado, que el formulario envíe los datos de sus campos a la dirección determinada por el atributo target de la etiqueta form.

Un input del tipo “reset” borra el contenido de todos los campos del formulario al ser pulsado.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/87533e5e-c5b8-429d-b353-10348f8037e8)


### Formularios: ``<fieldset>``

- ``<fieldset>``: define una sección en un formulario y permite agrupar sus campos.
  
El elemento ``<legend>`` puede contener a otros elementos o se puede utilizar para definir un título.

● id: igual que el elemento input.

● name: igual que el campo input.

● value: igual que el atributo value del campo input.

Ejemplo: [https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_fieldset](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_fieldset)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bb696ce7-86f6-4844-8246-57d125a2573d)


### Formularios: ``<textarea>``

Los campos de texto amplios, que permiten el ingreso de varias líneas de texto, también son un input.

Utilizado para comentarios multilínea o consultas, tienen el atributo type con el valor “textarea”. Nos permiten definir rows (filas), columns (columnas). En lugar de utilizar value escribimos entre las etiquetas textarea.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f8714dbd-a6cf-452e-bdca-f22c724702b4)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/980cdb52-28d4-46a2-b0ef-f01b0a92a3f3)


### Formularios: ``<select>`` y ``<option>``

Las listas desplegables crean una lista de opciones, cada una contenida dentro de un elemento`` <option>``.

Se crean como un input con su atributo type fijado en “select”.

● size: indica el número de valores mostrados a la vez en la lista.

● multiple: permite la selección simultánea de varios elementos de la lista.

● id, value y name se comportan igual que el resto de los tipos de input vistos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/196b688f-4f55-499b-bb5d-18351ace853d)

### Formularios: atributos opcionales

En muchos de los campos definidos en un formulario podemos añadir otros atributos que modifican su comportamiento:

● required: el formulario no se podrá enviar hasta que ese campo tenga contenido.

● placeholder: si queremos que aparezca un texto de ayuda para rellenar el campo.

● value: para introducir un valor por defecto en el campo.

● readonly: si queremos que sea de sólo lectura.

Ejemplos:

● [https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_required](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_required)

● [https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_readonly](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_readonly)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/373f3298-dc40-4f59-9056-f0e2baacd1d7)


![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0002307a-d91a-4ee2-8c60-0f62a14f5912)

---

## Subida a un servidor

### Netlify

Hosting gratuito que permite probar rápidamente nuestro sitio web.

Requiere registro.

Para agregar el sitio basta con arrastrar la carpeta que contiene el sitio.

[https://app.netlify.com/drop](https://app.netlify.com/drop)

Tutoriales sobre cómo subir a Netlify:

● Netlify Drop. Introduction: [https://youtu.be/-LRlQ_jaLAU](https://youtu.be/-LRlQ_jaLAU)

● Netlify Tutorial. Deploy a new site just by Drag and Dropping: [https://www.youtube.com/watch?v=vywDFg2uIxY](https://www.youtube.com/watch?v=vywDFg2uIxY)

### GitHub Pages

● Cómo publicar un sitio web gratis con Github Pages: [https://m.youtube.com/watch?v=SnQTURNAUqY&feature=youtu.be](https://m.youtube.com/watch?v=SnQTURNAUqY&feature=youtu.be)

● Curso Git y GitHub: [https://www.youtube.com/watch?v=ptXiQwE535s&list=PLoCpUTIZIYORkDzYwdunkVf-KIqGjyoot&ab_channel=ProgramarDesdeCero](https://www.youtube.com/watch?v=ptXiQwE535s&list=PLoCpUTIZIYORkDzYwdunkVf-KIqGjyoot&ab_channel=ProgramarDesdeCero)

---

## ¿Cómo pensar un proyecto web?

### A nivel conceptual

Tenemos que tener clara la idea de negocio. Se trata “simplemente” de hacer un ejercicio de análisis y reflexión.

1) ¿Cuál es el objetivo a cumplir con este proyecto?

2) ¿Quién es tu público objetivo? ¿Quién eres tú para merecerlos?

3) ¿Cuáles son tus palabras clave?

### ¿Cuál es el objetivo a cumplir con este proyecto?

En ello está basado todo tu negocio. Si vas a montar una tienda de calzado, seguro que tienes clarísimo que tu objetivo es vender calzado. Sin embargo, la gente piensa que su objetivo es tener miles de visitas, o posicionarse en el primer lugar de Google. Sí, eso está muy bien, pero sólo para vender zapatos.

### ¿Quién es tu público objetivo?

Es clave saber quién es tu audiencia para dirigirte a ella. Ahí radica la diferencia: recibir tráfico cualificado, interesado realmente en lo que ofreces. De lo contrario, podrás conseguir
miles de visitas, pero muy pocos clientes interesados.

**¿Quién eres tú para merecerlos?**

Es importante reflexionar sobre qué tienes tú o tu producto o tu servicio que te haga diferente del resto: ¿por qué habría yo de elegirte a ti y no al de al lado?
Identificar los beneficios que obtendrá la persona que te compre, contrate o lo que sea que ofrezcas.

### ¿Cuáles son tus palabras clave?

Las palabras clave son el alimento del que se nutre tu blog y tu sitio web. Tienes que tenerlas claras.

Algo que haga referencia, a tu cliente ideal, a tu especialidad o lo que te hace diferente, o a algún beneficio que posea tu producto. Esto último es fruto de identificar beneficios y nichos de mercado

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1ed72485-33e5-4306-90ee-e6ec313c5e89)


### Estructura genérica de un sitio web

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/604147c0-b135-4821-9382-b12f9eebd635)

### Tipos de estructura de un sitio web

1. Pensar el número de páginas en la estructura del sitio web.

2. Pensar los niveles de estructura de un sitio web.

3. Definir la estructura del sitio web a nivel conceptual.

4. Definir la estructura del sitio web a nivel técnico (Maquetar):

1-Hacer el árbol de la estructura de un sitio web.

2-Hacer estructura de un sitio web amigable para SEO.

3-Utilizar enlaces internos para mejorar la estructura del sitio web.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c7f17cbb-8f4c-416b-8663-efe4e7a94807)

---

##  Etiquetas semánticas

En versiones anteriores a HTML5, al crear la estructura de una página, normalmente se utilizaban etiquetas <div> para ir agrupando secciones de la página. En HTML4 se utilizaban etiquetas div diferenciadas por clases.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d1ecd9c4-51b2-496f-ba33-987a798b1741)

Son etiquetas dedicadas para cierto tipo de contenido.

Describen su significado tanto para el navegador como para el desarrollador.

Debemos respetarlas porque ayudan al navegador a entender su significado para mostrarlo en pantalla y ayudan a los buscadores a reconocer el contenido y la estructura del sitio.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/26288035-9fc0-4d3e-9bc0-d19c1d8fb204)


### Etiquetas semánticas

● ``<header>`` Se coloca en el body y es la cabecera visual de la página o de una sección (logotipo, título, etc.). No confundir con <head>, que es el encabezado del documento HTML.

● ``<nav>`` Apartado de navegación (enlaces de secciones, categorías, etc...). También permite dividir en categorías una sección.

● ``<main>`` Contenido principal del body

● ``<footer>`` Pie de página (del documento completo) o de una sección.

● ``<section>`` Define una sección en un documento

● ``<aside>`` Agrupación de contenido no relacionado con el tema principal del documento. Suele usarse para agregar publicidad.

● ``<article>`` Artículo. Parte principal de un escrito (posts en blogs, artículos en diarios, mensajes en foros, comentarios, etc.)

● ``<address>`` Agrupación con la información de contacto del autor del artículo o documento.


---
