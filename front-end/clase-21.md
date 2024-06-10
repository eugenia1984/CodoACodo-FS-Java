# Clase 21 - VUE.js 2

## DOM y Eventos

```
● Aplicaciones Reactivas. Reactividad en 2 sentidos.
● Propiedades computadas.
● Componentes.
● Watchers.
● Acceder a los elementos del DOM utilizando $refs
● Concepto MVC y MVVM.
```

---

## Aplicaciones reactivas

Una de las características que diferencian a Vue es su sistema de reactividad. Los modelos simplemente son objetos de JavaScript.
 
Cuando se modifican, se actualiza la vista. Esto hace que el gestor de estados sea simple e intuitivo.

Vue.js proporciona opciones para agregar reactividad a las propiedades, que se agregan dinámicamente, mediante el uso de observadores.

---

## Reactividad en 2 sentidos

Partiremos del ejemplo del array de frutas, donde agregamos con la directiva v-for las frutas del array de objetos y le agregamos un input y un botón para agregar la fruta que deseamos al array de objetos:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/886f3a19-2607-4cff-954b-0b73bce29918)

---

## Reactividad en 2 sentidos

Agregamos la propiedad nuevaFruta: ``‘’`` dentro de data y también agregaremos el método ``agregarFruta()``.

Con el método push agregaremos un nuevo elemento al array de objetos (frutas), con los pares clave: ``valor..`` El nombre de la fruta es el de nuevaFruta y utilizamos el this para hacer referencia a esa instancia. Además sumamos que la ``nuevaFruta`` inicie con cantidad 0.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/82398f0f-bae3-4933-a19c-c06cd29432c4)

Una mejora que se puede hacer es que se limpie la caja de texto cuando agregamos un elemento. Esto se logra agregando en el método ``agregarFruta()`` esta instrucción: `this.nuevaFruta= ''`

Podemos hacer una mejora para que no nos permite agregar una fruta hasta que no se haya completado la caja de texto:

```JavaScript
agregarFrutaConIf(){
if (this.nuevaFruta != "") {
  this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 })
  this.nuevaFruta= ''
}
```

## Manejo de eventos

Como vimos anteriormente, para interactuar con los usuarios, podemos usar la directiva v-on para adjuntar detectores de eventos que invocan métodos en nuestras instancias de Vue.

En definitiva, usamos la directiva v-on para escuchar eventos DOM y ejecutar código cuando se activan.

---

## Eventos | Modificadores de teclas

Vue es capaz de interceptar y atender eventos disparados al presionar determinadas teclas. Se pueden usar los eventos keyup y keydown, con el código de la tecla esperada:

```JavaScript
<!-- solo llame a `vm.submit ()` cuando el `keyCode` es 13 -->
<input v-on:keyup.13="submit">
```

**keyup** se dispara al soltar una tecla, y **keydown al presionarla**. Las teclas más comunes poseen una descripción propia, para evitar la necesidad de recordar su keyCode: ``.enter``, ``.tab``, ``.delete`` (captura ambas teclas “Delete” y “Backspace”), ``.esc``, ``.space``, ``.up``, ``.down``, ``.left`` y ``.right``.

El siguiente ejemplo muestra cómo invocar un método cada vez que se levanta una tecla. Concretamente, al soltar Enter:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/c70a7e94-0148-4f98-bb9c-cf4c9ceaa087)

Y en la instancia Vue tenemos, por supuesto, declarada la propiedad data1:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e8ab6851-d3c2-46df-9cb3-3e5de52defb7)

---

##  Propiedades computadas

Permiten que VUE agregue una función que realice alguna operación sobre sus propiedades, que se actualizan cuando hay algún cambio en el documento HTML. Por ejemplo, podemos sumar la cantidad de frutas:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e5eca4e0-70b9-440e-97c1-71c73504717c)

En el HTML tenemos **{{sumarFrutas}}**. Cada vez que va a ser renderizado, se ejecuta el código de **sumarFrutas()** dentro del bloque computed: **{}**

---

## Propiedades computadas

En el código HTML se realiza el renderizado que muestra el total computado:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/0e421473-8ccd-4b76-a4e3-626ce17edec7)


Como en los métodos, dentro de computed se definen todos los campos computados separados por comas. Y dentro de cada una se emplea this para acceder a los valores de las propiedades que se han declarado en data() o en los métodos de la instancia Vue.

Es importante saber que los campos computados no pueden recibir valores mediante parámetros desde fuera de la función. Si es necesario pasar un valor, en lugar de un campo computado se debe crear un método.

Otra característica importante de los campos computados es que siempre tienen que devolver un valor. No puede existir un campo computado sin su correspondiente return.

---

## Componentes

El sistema de componentes de Vue.js nos permite crear aplicaciones a gran escala compuestas por componentes pequeños, autónomos y reutilizables. Dado que los componentes son instancias de Vue reutilizables, aceptan las mismas opciones que cualquier instancia
Vue, como datos, propiedades computadas, métodos, etc. La siguiente figura muestra cómo una interfaz de aplicación típica se abstrae en tres componentes: encabezado, barra lateral y cuerpo.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d8b29d60-bada-41f0-8698-fb90e8e6fc12)

### Creación de componentes

Los componentes son una de las características importantes de Vue.JS que ayudan a crear elementos personalizados, que se pueden reutilizar en HTML.

Dentro del componente se agrega un template el cual tiene asignado código HTML. Esta es la manera de registrar globalmente un componente en Vue.JS, que puede ser reutilizado en cualquier instancia Vue. El nombre asignado a las etiquetas será reemplazado por el código del template escrito en la creación del componente.

En el HTML no existe la etiqueta ``<saludo>``. Pero podemos crearla utilizando componentes Vue:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3aea0e92-1f86-472a-976c-7dde94f0b1bb)

El componente ``componente1`` creado se agrega a la instancia Vue mediante la palabra clave ``components:``. Se pueden crear y agregar todos los componentes que sean necesarios, cada uno con su ``template`` y, dentro de la instancia de Vue, su propio nombre.

Una vez creado el o los componentes, los utilizamos en nuestro código HTML como si fuese una etiqueta más:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/40331814-cf7f-4d73-a3e0-afacaf60a6dc)

Al renderizar la página, Vue reemplaza este par de etiquetas por el contenido que surja de la ejecución del código del componente asociado.

En nuestro caso, veremos el siguiente texto:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3711b5bb-a782-470e-87f6-4e68834161c0)

Los componentes pueden tener métodos. Agreguemos un componente más al ejemplo anterior:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/5b798b30-ff0d-42a1-9dcd-237791481e45)

**componente2** será otro componente de nuestro proyecto. Lo definimos de manera similar a
**comonente1**, pero en este caso agregamos **data()** y **métodos**.

Debemos declarar el nuevo componente en la instancia Vue, y luego podemos disponer del componente en el cuerpo del HTML:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e9b84801-88cb-4b0c-8192-4907feec79ea)

Al renderizar la página, vemos como el segundo componente renderiza diferente contenido dependiendo de la posición del mouse:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a7f44a42-5e44-4f31-a806-43043866c01a)

---

## Watchers

Un watcher (observador) en Vue es una característica especial que nos permite observar algunos datos y realizar acciones específicas cuando cambian. Es una forma más genérica de observar y reaccionar a los cambios de datos en la instancia de Vue.

Con los observadores, no solo podemos observar una propiedad y realizar acciones personalizadas; también podemos acceder al valor antiguo desde el que está cambiando esta propiedad en particular, así como al nuevo valor al que ha cambiado.

Los Watchers se aplican a los datos que cambian. Por ejemplo, elementos input en formularios. Los Watchers se encargan de manejar cualquier cambio de datos haciendo que el código sea simple y rápido.

Veamos cómo implementarlos. En el ejemplo, se crean dos **textboxes**, uno con kilómetros y otro con metros:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a6ebd3f5-c78b-4764-9e61-62c71e78788e)

En **data()** ambas propiedades son inicializadas en cero. Existe dentro de la instancia Vue un objeto watch que se crea con dos funciones, cuyo objetivo es convertir de kilómetros a metros y viceversa. Cada vez que se ingrese algún valor en los inputs, watch se encarga de actualizarlos, calculando lo que está declarado en las funciones.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4d949265-8dd4-42a1-a45e-9e78cdfc06d8)

Estos watchers sólo deben usarse cuando las propiedades calculadas resultan insuficientes,
situaciones en las que necesitamos asincronía o se trata de operaciones muy costosas para cambiar el valor de los datos.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3d576b42-4a29-40b3-b49b-e6b1aa106803)

---

## Acceder a los elementos del DOM utilizando $refs

Si necesitamos acceder a elementos del DOM, las instancias de Vue.JS cuentan con diversos mecanismos, uno de ellas es ``$refs``. Visto en código sería algo como:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8d7aaf3c-9db6-4331-8394-dd2df614a36c)

**$refs** es un objeto, dentro de él se van a almacenar todos los elementos del DOM que cuenten con el atributo “ref”. El atributo “ref” vendría a ser algo así cómo proporcionarle un ID al elemento.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f852552b-ac8a-43cb-9fdc-e0714fec3b0b)

**“app”** o **“vm”** representan la instancia misma de Vue. También puedes utilizar la palabra reservada **“this”** para referirte a la instancia. **$refs** es una propiedad de la instancia. Se pueden tener varios elementos con el atributo **“ref”**, siempre y cuando el valor del atributo sea diferente para cada elemento:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/87679ebc-5f92-41d2-a896-45d9e75814e7)

Para acceder al objeto que almacena estos elementos lo hacemos con app.$refs, y para acceder al elemento dentro del objeto usamos ``app.$refs.entrada``

Apliquemos lo anterior con una aplicación sencilla. Lo que hace la aplicación es añadir a un párrafo el texto que escribamos en una entrada:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6e41a840-b150-4f43-8fe6-49cada1687b4)

Colocamos los atributos “ref” a los elementos cuyas propiedades queremos acceder, que en este caso son el input y el párrafo. Y por último ponemos los botones a la escucha, para invocar los métodos correspondientes.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/ed3ff6dc-2bcd-4161-a1fb-cb5d7c4f2a09)

Los métodos ``addText()`` y ``delText()`` de la instancia de Vue se encargan de responder al click de los botones. Y con innerHTML cambiamos el contenido del párrafo.

---

## Patrón MVC | Modelo-Vista-Controlador

El **patrón MVC (Model-View-Controller)** es un patrón de arquitectura de software.

Busca desacoplar al máximo la **interfaz de usuario** de la **lógica de la aplicación**, separando los componentes de una aplicación en tres grupos (o capas) principales: 

- el modelo

- la vista

- y el controlador

y describe cómo se relacionarán entre ellos para mantener una estructura organizada, limpia y con un acoplamiento mínimo entre las **distintas capas**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/939915e6-cb8f-4960-be61-8cab2697ac2d)


- **Vista:** son los elementos visuales que contienen la información. Los componentes de la Vista son los responsables de generar la interfaz de nuestra aplicación. Es una  representación del estado del Modelo en un momento concreto.
  
- **Controlador**: intermediario entre el modelo y la vista, entre el usuario y el sistema. Capturará las acciones del usuario sobre la Vista, las interpretará y actuará en consecuencia (por ejemplo, cambiando la vista o invocando al Modelo para actualizar información). Es como un coordinador general del sistema, que regula la navegación y el flujo de información con el usuario. 

- **Modelo**: aquí encontraremos la representación de los datos del dominio, es decir, aquellas entidades que nos servirán para almacenar información del sistema que estamos desarrollando. Por ejemplo, si estamos desarrollando una aplicación de facturación, en el modelo existirán las clases Factura, Cliente o Proveedor, entre otras. También encontraremos la lógica de negocio, es decir, la implementación de las reglas, acciones y restricciones que nos permiten gestionar las entidades del dominio, y los mecanismos de persistencia de nuestro sistema.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1f08df15-d8ef-4440-82ab-cedb082ffd7e)

### MVC y MVVM

De manera similar al MVC, el **MVVM** o** modelo–vista–modelo de vista (model – view – viewmodel)** es un patrón de arquitectura de software que se caracteriza por desacoplar lo máximo posible la interfaz de usuario de la lógica de la aplicación.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/73e72090-17a8-49b6-b05a-7e1ee1278ae1)

Cada capa tiene una función específica:

● El modelo representa la capa de datos y/o la lógica de la aplicación.
Contiene información, pero no interactúa con la vista.

● La vista representa la información a través de los elementos visuales que
la componen. Las vistas en MVVM son activas, contienen
comportamientos, eventos y enlaces a datos.

● El modelo de vista es un actor intermediario entre el modelo y la vista,
contiene toda la lógica de presentación y se comporta como una
abstracción de la interfaz. La comunicación entre la vista y el modelo de
vista se realiza por medio de los enlaces de datos.

### Diferencia entre MVVM y MVC

MVVM realiza la sincronización automática de la vista y el modelo, es decir, cuando cambia el atributo del modelo, no necesitamos operar manualmente el elemento dom para cambiar la visualización de la vista, la capa de la vista cambiará automáticamente.

Puntos clave del patrón MVVM:

1) El usuario interactúa con la Vista.

2) View y ViewModel tienen una relación de uno a uno, lo que significa que una Vista solo se puede asignar a un ViewModel.

3) View contiene una referencia a ViewModel, pero View no tiene información sobre el modelo.

4) Existe una relación de enlace de datos bidireccional entre View y ViewModel.
   
---

## Vue es un framework que usa la arquitectura MVVM.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f6277534-903d-4481-b495-45e7af494680)

---
