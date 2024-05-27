# Front End - Clase 02- Continuando con HTML

##  Temas:

```
HTML 2 - Continuando con HTML
● Listas y enlaces.
● Rutas absolutas y relativas.
● Elementos en bloque y en línea.
```

---

## Listas - Tipos de listas

Utilizan las etiquetas ``<ul>``: **lista desordenada (unordered list)** u ``<ol>``: **lista ordenada (ordered list)**.

Cada elemento de la lista se representa con ``<li>`` (**ñist imtem**) y su padre siempre tiene que ser una etiqueta ``<ol>`` o ``<ul>``.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/145b0c9b-1998-4a29-8f95-74113275e1ec)


### Listas dependientes

También podemos crear listas dependientes, simplemente agregando más elementos ``<ul>`` u ``<ol>`` según corresponda.

Nada impide utilizar una lista dentro de otra lista. Este concepto se conoce como “listas anidadas” o listas dependientes y
puede ser útil cuando enumeramos ítems que contienen sub-items.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8581068a-088a-4d2d-bb37-bb4b1d44340f)


### Listas de definición

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ef6fbb98-618b-4bad-8f03-9cb356c4c342)

Las listas de definición son otro tipo de listas interesantes:

---

## Enlaces

### Enlaces absolutos y relativos

Permiten vincular unas páginas con otras. Para hacer esto utilizamos el elemento ``<a>`` con el atributo href (Hypertext Reference). 

Hay 3 tipos de enlaces:

- **Absoluto**: es un enlace que incluye todas las partes de una URL.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bb5e765d-58b3-4bbf-9951-b5bffb36a928)


- **Relativo**: hace referencia a un recurso que se encuentra en una posición relativa a nuestra URL.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9dc39c84-5c6a-4254-b98d-e9e5405cd2a8)

- **Enlaces internos (anclas)**: Se utiliza para indicar un elemento dentro de la misma página, dirigiéndose a un sector específico. Para utilizarlo necesitamos el enlace propiamente dicho y el nombre (name) del ancla al cual debemos dirigirlo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d74a548f-d458-4c5c-98ec-a62e4f258daa)

Se pueden vincular a anclas dentro de la página de destino:
  
![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6c917935-1d0b-42dc-a707-979a48bc8e3a)

Al igual que en los enlaces internos marcamos la sección con un ancla:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6e3961fa-5807-4f53-8775-23d3b5707030)


### Enlaces - Atributos

Dentro de los atributos principales de los enlaces podemos encontrar:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/77774ba0-0293-42d6-ac31-5972c11364e4)

Si aún no tenemos definido a dónde queremos hacer un hipervínculo podemos colocar dentro del atributo href el valor #.


### Enlaces locales

Permiten vincular nuestra página con otra página del mismo Sitio Web.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/039d507e-8007-4e21-a1cc-5e7d79c0b0cf)

Para agregar un enlace para regresar podemos colocar lo siguiente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6661bba4-feac-4b5f-93a2-3506f2642fcb)


### Enlaces a direcciones de correo y archivos

Permiten vincular nuestra página con el cliente de correo predeterminado en la computadora: 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5ecf5f09-f1d9-49d8-9b68-e89f7f17057c)

Se pueden agregar un “asunto”:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/290c932a-660a-4b8c-ba38-4b850fad776c)

Los enlaces también permiten vincular nuestro documento HTML con archivos:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e20aa3e3-4b58-4ad4-b66a-4fad56682d11)

---

## Rutas - Rutas absolutas y relativas

Cuando hablamos de ruta (o path) nos referimos a la dirección de destino al hacer clic en el link. Esta ruta puede ser:

● **Absoluta**: Nombre de dominio (externa): http://www.manualweb.net/img/logos/html.png

● **Relativa**: Directorios desde donde estoy (interna): /img/casa.png

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bb8ec92c-e32e-49e0-9f4f-da31766a9c99)

Mientras desarrollamos el sitio en forma local (desde nuestra computadora), nos conviene tener la información dividida en carpetas.

En general nuestro index.html será la página principal y las demás páginas estarán en el directorio raíz, pero para colocar imágenes, hojas de estilo, archivos de JavaScript nos conviene ponerlos en carpetas separadas.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2502914c-24ce-4107-8801-326cdb1a9753)

  
---

## Tipos de elemento - Elementos en bloque y en línea

### Elementos block (en bloque) e inline (en línea)

HTML clasifica a todos los elementos en dos grupos: **inline** y **block**. De por defecto, los elementos en bloque comienzan en una nueva línea y los elementos en línea pueden comenzar en cualquier parte de una línea.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f898796d-bbff-4c09-b809-cb2542583315)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1aa9db77-6ab6-4279-8fb1-b81ea36e8978)

---

## Formatos de texto

● Afectan al texto que se muestra en el documento.

● Han sido sustituidos en buena parte por CSS, pero su conocimiento nos permite modificar aspectos concretos de la fuente (estilo,  ndices y subíndices) sin tener la necesidad de definir un estilo específicamente para modificar solo un atributo (ejemplo: texto en negrita).

`<b> vs <strong>``

● Mismo efecto visual

● ``<b>`` indica negrita y ``<strong>`` indica que se debe resaltar fuertemente el texto (cada navegador lo resalta como desea).


El formato lo define el navegador a su criterio, por eso podemos encontrarnos con presentaciones levemente diferentes entre navegadores

- Etiquetas anidadas:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/efe2af20-6a0e-4080-857f-993bfd00afc5)

- Etiquetas básicas (formatos de texto)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d27cc94f-a137-4adf-a213-458dafac5336)

---
