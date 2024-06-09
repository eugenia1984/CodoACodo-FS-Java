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
