# Clase 20 - Vue.js 1

## Introducción a Vue

```
● Introducción a Vue.js. ¿Qué es?
● Renderizado.
● Modificación del DOM.
● Instalación. CDN.
● Directivas condicionales, estructurales y de atributo.
● Métodos y eventos.
● Conceptos claves.
```

---

## ¿Qué es Vue.js?

Vue (pronunciado /vjuː/, como view) es un framework de Javascript progresivo de código abierto. Se utiliza para desarrollar interfaces web interactivas y está diseñado para simplificar el desarrollo web.

La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos web existentes en desarrollos front-end.

La instalación de Vue.js es muy fácil. Cualquier desarrollador puede crear interfaces web interactivas de forma sencilla. Vue fue creado por Evan You, un ex empleado de Google. La primera versión de Vue se lanzó en febrero de 2014.

---

## DOM Virtual

Vue utiliza **DOM virtual**, también utilizado por React. Esto **permite que los cambios no se realicen en el DOM, sino que se cree una réplica del DOM que está presente en forma de estructuras de datos JavaScript**. 

**Siempre que se deban realizar cambios, se realizan en las estructuras de datos de JS y esta última se compara con la estructura de datos original**. 

**Luego, los cambios finales se actualizan al DOM real**, que el usuario verá cambiar. Esto es bueno en términos de optimización, es menos costoso y los cambios se pueden realizar a un ritmo más rápido.


Desde JavaScript haremos cambios en las estructuras de datos propias de JS, esa copia se compara con el DOM y actualiza los cambios. Esta es la gran ventaja de trabajar con Vue, ya que **no se actualiza todo, sólo
lo que cambia**.

El sistema de renderizado de Vue se basa en este DOM virtual. El concepto de DOM Virtual fue iniciado por React y se ha adaptado en muchos otros marcos con diferentes implementaciones, incluido Vue

---

## ¿Qué es el renderizado?

El término renderización (del inglés rendering) es un anglicismo para representación gráfica, usado en la jerga informática para referirse al **proceso de generar o representar algo en la pantalla**. Los resultados de mostrar dicho modelo pueden llamarse render.

En una web el renderizado ocurre cuando se visita la página y su contenido se representa en la pantalla.

## DOM Virtual y Render

El principal beneficio del DOM virtual es que **le brinda al desarrollador la capacidad de crear, inspeccionar y componer estructuras de interfaz de usuario que desee de manera declarativa, mientras deja la
manipulación del DOM al renderizador**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/39700a9e-3c41-45dd-8f41-13d6b7c01033)

---

## Reactividad en Vue

Una de las mejoras que trae la versión 3 de Vue es en el sistema reactivo.

¿Qué es reactividad? **Reactividad es cuando la vista de la aplicación cambia cuando los valores reactivos dentro de estas cambian su valor**. Modelo de enlazado de datos: es la forma a través de la cual JavaScript se conecta (enlaza, comunica) con Vue, permitiendo comunicar el documento HTML con JS.

---

## Componentes en Vue

Los componentes son una de las características importantes de Vue.js que ayudan a crear elementos personalizados, que se pueden reutilizar en HTML.

Vue permite tomar una página web y dividirla en componentes cada uno con su HTML, CSS y JS necesario para generar esa parte de la página.

De esta manera, hacemos una “intervención por partes”, por ejemplo para intervenir sobre el header y footer, que es siempre el mismo. 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/00daf390-6fd8-4929-9ab2-a3d21e7b4593)

---

## Instalación

Hay muchas formas de instalar Vue.js. Algunas de las formas de cómo realizar la instalación se comentan a continuación.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a97e044c-0696-456a-8a33-5c5b8d6a356f)

---

## Comenzando con VUE.js

La forma más fácil de comenzar a usar Vue.js es crear un archivo ``index.html`` e incluir Vue desde el CDN de alguna de las siguientes formas: 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/73e8d118-2699-4938-bdce-354fe460fb21)

La referencia al CDN debe ir al final del <body> y antes de la referencia a nuestro archivo ``.js``:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a3ca710c-480c-40cd-8f9b-17cc2d9115f7)

---

## Hola mundo con VUE.js

En nuestro primer caso, tendremos en el documento HTML un elemento div con un ID que va a conectar con mi archivo JS:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d2cabe89-d037-42ba-91e1-8f75207064d2)

**{ createApp } = Vue** crea un objeto de tipo VUE que en su interior tiene una función data() que retorna datos (pares, propiedad: valor). A este objeto lo “montamos” (mount) dentro del #app creado en HTML. De esta manera accedemos a los datos creados dentro del objeto VUE.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/84e69ecb-2059-4c83-a6c0-ab44370cd29d)

---

## Renderización declarativa (interpolación)

Permite insertar texto en el documento HTML, valores, propiedades o atributos. VUE utiliza las llaves dobles para encerrar el dato que se quiere mostrar ``{{ }}``, es similar a Template String de JS, que lo hace con ``${ }: {{ mensaje }}``

Con el uso de la doble llave se vinculan los datos con el DOM, reaccionando a esos nuevos valores. Al cambiar esa réplica del DOM (DOM virtual) lo vemos reflejados en el DOM, ya que el framework al detectar un cambio lo actualiza.

De esta manera, los datos y el DOM ahora están vinculados, y todo es reactivo (sólo se modifica ante los cambios). Si cambia el valor de la propiedad en el objeto VUE debería ver que se ha renderizado con el nuevo valor que se acaba de ingresar.

---

## Directivas

Una directiva es el término usado para referirse a algunos atributos especiales que le indican a Vue.js que debe realizar ciertos cambios en un elemento del DOM, cada vez que la expresión asociada con dicha directiva cambie.

Vue utiliza directivas para aplicar un comportamiento especial al DOM. Las directivas permiten enlazar VUE con el documento HTML pero con los atributos de las etiquetas, no solo con el contenido.

Tienen el prefijo v- para indicar que son atributos especiales proporcionados por Vue.

---

# v-text

La directiva v-text es una directiva Vue.js que se usa para actualizar el textContent de un elemento con nuestros datos. Es una buena alternativa a la sintaxis ``{{ }}``. Se aplica a un elemento HTML colocando ``v-text`` como atributo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/54c5764a-1611-4537-866a-4b01e4ee720b)

---

# v-html

La directiva v-html es una directiva Vue.js que se usa para actualizar el innerHTML de un elemento con nuestros datos. Esto es lo que lo separa de v-text, lo que significa que mientras v-text acepta una string y la trata como tal, v-html aceptará una string y la convertirá en HTML.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/59e28bf9-2fee-47be-8736-a50940c0f251)

---

# v-bind

La directiva v-bind es una directiva Vue.js que permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML. Podemos vincular atributos o propiedades de componentes a un elemento. Si ese atributo está vinculado a nuestros datos definidos en la instancia de Vue, se pueden observar cambios dinámicos a medida que cambian los datos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f24bd88a-3884-42e7-a673-2d5b4eedc8c6)

---

# v-show

La directiva v-show es una directiva Vue.js que muestra u oculta algo, según del valor booleano que tenga: si es true lo muestra, si es false lo oculta con CSS, mediante un ``display: none``

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/dedf711d-7534-4690-82b3-3ee4fbccb721)

Si el valor es false la etiqueta <span> existe en el código fuente resultante del navegador, pero tiene aplicado un atributo style a display: none que hace que no se muestre visualmente. Esta directiva mantiene el código en el HTML pero lo mantiene oculto.

---

# v-once

Todo elemento que posea la directiva v-once será renderizado sólo una vez.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/32639d12-6654-442a-80bd-962d22c278d4)

---

# v-for (renderización de una lista)

Usamos la directiva v-for para representar una lista de elementos basada en un Array. La directiva v-for requiere una sintaxis especial en forma de item in items, donde los items son el array de datos de origen y el item es un alias para el elemento del Array que se está iterando:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1f5719f0-f0cb-43aa-8b56-41c06669c189)

---

# v-if, v-elseif y v-else

Dentro de la vista también podemos tener cierta lógica, por ejemplo con el v-if puedes hacer que ciertos elementos se muestren o no dependiendo del valor de una variable.

El v-if se puede aplicar a cualquier elemento html o componente. Además de v-if disponemos de v-else y v-else-if, útiles para resolver situaciones condicionales más complejas. Funcionan igual que sus contrapartes de JavaScript.

La directiva v-if, a diferencia de v-show, si corresponde no mostrar un elemento directamente lo elimina del DOM. Es decir, no se limita a ocultar el elemento si no que lo elimina de la estructura del documento.

El contenido puede mostrarse dependiendo de una condición. En un listado de productos podemos destacar aquellos que tengan un stock igual a 0. Usamos v-if para determinar qué elementos no tienen stock (stock=== 0):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/91e5d2c8-947d-48da-bce6-37f5b4b92da2)

Ampliaremos el ejemplo anterior incorporando más elementos al array y estableciendo otras condiciones: 

a) Stock = 0: Sin stock;

b) Stock < 5: Stock bajo y

c) Stock >=5 Stock alto. 

Para esto emplearemos v-else-if y v-else:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/95be96f6-dd75-4e9e-b391-cd2ee4193752)

---

## v-model

La directiva v-model establece un enlace bidireccional, es decir, vincula el valor de los elementos HTML a los datos de la aplicación.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/126f5a2f-c382-4371-8824-2bbc3de72774)

---

## v-on

La directiva v-on permite escuchar eventos DOM y ejecutar instrucciones de JavaScript cuando se producen.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2ce51629-53aa-45ae-900e-7b71e21029f8)

---

##  Conceptos claves

● Data Binding: la función de data binding ayuda a manipular o asignar valores a atributos HTML, cambiar el estilo, asignar clases con la ayuda de la directiva de enlace llamada v-bind disponible en Vue.

● Event Handling: v-on es el atributo agregado a los elementos DOM para escuchar los eventos en Vue.JS.

● Computed Properties: esta es una de las características más importantes de Vue. Ayuda a escuchar los cambios realizados en los elementos de la interfaz de usuario y realiza los cálculos necesarios. No hay necesidad de codificación adicional para este fin.

● Templates: Vue.JS proporciona plantillas basadas en HTML que unen el DOM con los datos de la instancia de Vue. Vue compila las plantillas en funciones virtuales DOM Render. Podemos hacer uso de la plantilla de las funciones de render y para hacerlo tenemos que reemplazar la plantilla con la función de render.

● Directives: Vue.JS tiene directivas integradas como v-if, v-else, v-show, v-on, v-bind y v-model, que se utilizan para realizar varias acciones en la interfaz.

● Watchers: los Watchers se aplican a los datos que cambian. Por ejemplo, elementos de input en formularios. Aquí, no tenemos que agregar ningún evento adicional. Los Watchers se encargan de manejar cualquier cambio de datos haciendo que el código sea simple y rápido.

---
