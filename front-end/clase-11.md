# Clase 11 - Bootstrap

## Temas:

```
● ¿Qué es un framework?
● Frameworks CSS.
● Conceptos básicos de Bootstrap.
● Componentes y funcionalidades.
● Grid Layout.
● Bootstrap Themes.
```

---

## ¿Qué es Bootstrap?

Bootstrap es un framework, es decir, un conjunto de herramientas, librerías, convenciones y
buenas prácticas que encapsulan las tareas repetitivas en módulos genéricos fácilmente
reutilizables. Contiene herramientas y hojas de estilos que nos permiten centrarnos en los
elementos centrales de cada diseño.

Bootstrap fue creado por Twitter y permite crear interfaces web con CSS y JavaScript,
adaptando la interfaz del sitio web al tamaño del dispositivo en que se visualice. Bootstrap
incluye un archivo CSS que se añade en los proyectos para tener una serie de estilos ya
preparados para utilizar. Este tipo de librerías suelen incluir estilos para los elementos más
comunes de una página web, como por ejemplo, botones, navbars, etc. Además tiene una
serie de estilos para crear columnas fácilmente.

Bootstrap es el marco de trabajo HTML, CSS y JavaScript más popular para desarrollar sitios
web receptivos y móviles.

### Ventajas de usar Bootstrap

● Fácil de usar: Sólo se necesita agregar las clases de Bootstrap a los elementos HTML.

● Responsive: Con su sistema de grilla dividida en 12 columnas permite crear páginas Web adaptables a cualquier dispositivo.

● Personalizable: Se pueden seleccionar para su descarga únicamente los elementos que necesitemos en nuestro proyecto, o utilizarlo online.

● Gran comunidad: Este framework está muy extendido y si tenemos un problema podemos encontrar mucha información en Internet. Tanto en sitios oficiales como en comunidades.

### ¿Cuáles son las novedades de Bootstrap 5?

Una de las bibliotecas más utilizadas en el desarrollo web es jQuery. Hasta ahora, Bootstrap
ha sido compatible con esta biblioteca, pero ahora, en la versión 5 dejará de usarlo de forma
nativa.

En esta nueva versión de Bootstrap se ha optado por no dar compatibilidad a los ya casi
extintos navegadores web de Microsoft Internet Explorer 9 y 10. Bootstrap solo será
compatible con Microsoft Edge.

Mejoras en formularios.

Mejoras en el excelente sistema de rejilla de Bootstrap 4. se ha añadido un nuevo
breakpoint (xxl).

Bootstrap 5 no ha reinventado toda su estructura. Esto concuerda con la intención de sus
desarrolladores, que pretendían hacer una transición fácil de la versión 4 a la 5. Los
cambios prometen unos procesos de trabajo más simples y un código más ligero y rápido

---

## Bootstrap | Instalación

Hay dos maneras de usar Bootstrap:

● Sin conexión: Descargar desde boostrap.com. En este caso los archivos deben estar en la misma carpeta del proyecto y ser referenciados en el <head> del documento HTML con ``<link>``:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/566137d4-da5c-4306-a576-07b0ce2d4f5a)

Como buena práctica, las versiones alfa y beta no se suelen usar en sitios productivos. Siempre se trabaja con la última versión estable a la fecha.

● Incluir BootstrapCDN (Content Delivery Network) en el <head>. Este
método tiene la ventaja de no necesitar instalación alguna, pero nuestro
sitio va a estar conectado permanentemente con el sitio Web de
Bootstrap, proveyendo los estilos

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1fcd793b-e540-4852-9122-b9134d018738)

---

##  Bootstrap | Class Container

Los contenedores sirven para crear una “caja” o “contenedor” dentro de la
que se coloca el contenido de una página web.

Cuando aplicamos a un elemento HTML la clase container , a ese elemento
se le aplica un ancho y un padding determinado y además se centra
horizontalmente en la página web.

Bootstrap proporciona 3 tipos de contenedores diferentes, cada uno con sus
características distintivas.

**.container**: establece un ancho máximo
o max-width para cualquier tamaño de
pantalla o anchos definidos por los
breakpoints responsive. Es sensible al
dispositivo que utilicemos. Su ancho es
determinado por el ancho de viewport.
Es el contenedor más usado de
Bootstrap.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/887d752c-af9b-47a2-8295-8b8f248688a8)


Al modificar el tamaño del viewport, el
ancho máximo de este contenedor se
corresponde con el “punto de corte”
definido.

**.container-fluid**: establece
un width: 100% del viewport en
todos los breakpoints. Siempre
ocupa el 100% del ancho de la
pantalla.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/53cd8ad2-27d3-40f4-b370-36b7da7f08da)

**.container- {breakpoint}** es similar
al container-fluid, pero posee un
ancho de 100% solamente hasta el
breakpoint definido.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a1aab21d-e568-43c0-a45d-ef2f7717ac31)

---

## Bootstrap | Grid

container delimita un ancho máximo de acuerdo al tamaño de la pantalla,
row define un grupo horizontal de columnas y col proporciona hasta 12
contenedores por fila.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/850f5059-f88b-4ca8-82d6-e196da000dbf)

Debemos comprender la estructura anidada de Bootstrap: la clase container es la de mayor jerarquía y actúa como un contenedor de **filas (rows)**, que a su vez contienen a las **columnas (col)**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0ebd0400-97be-46f1-81e4-ffd99be18505)

El código que vemos a continuación genera el container de la diapositiva
anterior.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e58cec2a-a44d-48d6-8aeb-998457ad395e)

Podemos establecer el ancho de una columna y hacer que las columnas
hermanas tomen una nueva dimensión automáticamente a su alrededor. Las
otras columnas cambiarán de tamaño sin importar el ancho de la columna
central.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/26e6b567-13bb-4a9e-bbcf-b0c63d8c78da)

El código que vemos a continuación genera el container de la diapositiva
anterior.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/96beec06-7163-48c7-878e-72bbc1169185)


---

## BOOTSTRAP | Layouts

Podemos tener un layout para
cada dispositivo. Si tenemos una
pantalla pequeña podemos
hacer que se muestre con
determinado encolumnado, y en
un dispositivo con pantalla
mayor que se muestre con otro.
De esta manera tendremos
distintos tipos de maquetados
según el dispositivo, trabajando
desde el estilo, no desde la
estructura HTML.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/59cb545a-4f43-4a5d-b570-32b3ab7ca379)

### BOOTSTRAP | Sistema de grillas

El sistema de grillas de Bootstrap permite hasta 12 columnas en la página.
Es posible agrupar las columnas para crear columnas más amplias. Este
sistema es responsivo, por lo tanto, las columnas se reorganizan
automáticamente dependiendo del tamaño de la pantalla. Recordemos que
siempre deben sumar 12.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b5f2a93a-1106-45dc-b88e-6ef5498dba82)

Se utiliza una grilla de 12 columnas que se puede dividir en 2, 3, 4… 12 partes.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/973f9262-48e5-4dda-bd6f-ef2bdc8af693)

### BOOTSTRAP | Grid system

Este ejemplo crea tres columnas
iguales utilizando las clases del
sistema grid predefinidas. Dichas
columnas serán centradas en la
página con el componente
padre **.container**. Las columnas de
la cuadrícula que no tengan un
width específico se distribuirán
automáticamente como columnas
de igual ancho.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1ccfbc9b-3a2d-4917-a70b-742f7ee635c8)

---
