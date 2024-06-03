# Clase 09 - CSS

## Temas:

```
CSS 5 - Flexbox
● Media Queries.
● ¿Qué es Flexbox?
● Propiedades para el contenedor Flex, y los Flex items.
```

---

## Media Queries

### Puntos de corte (Breakpoints)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3114c49b-8359-43f9-a64a-cae5b98019b3)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4f7e4a0c-2e79-420c-a8aa-c46ec84cd9a1)

Puntos de corte (según ancho):

- Hasta 600 px: Fondo rojo

- Desde 600 px: Fondo verde

- Desde 768 px: Fondo azul

- Desde 992 px: Fondo naranja

- Desde 1200 px: Fondo rosa

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/cb1533a6-0c14-4457-891a-cb15c3053cf9)

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/005926d0-779b-432b-8522-56fac96c1fe0)

---

## FlexBox

### ¿Qué es Flexbox?

Tradicionalmente, en CSS se ha utilizado el posicionamiento (static, relative,
absolute...), los elementos en línea o en bloque (y derivados) o los float, lo que
a grandes rasgos no deja de ser un sistema de creación de diseños bastante
tradicional que no encaja con los retos que tenemos hoy en día: sistemas de
escritorio, dispositivos móviles, múltiples resoluciones, etc…

Flexbox es un sistema de elementos flexibles que llega con la idea de olvidar
estos mecanismos y acostumbrarnos a una mecánica más potente, limpia y
personalizable, en la que los elementos HTML se adaptan y colocan
automáticamente y es más fácil personalizar los diseños. Está especialmente
diseñado para crear, mediante CSS, estructuras de una sola dimensión.


### Flexbox | Conceptos

Elementos básicos de Flexbox:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/dfd4ec55-e147-4f95-a308-acc64f138fcc)

● **Contenedor**: Es el elemento padre que tendrá en su interior cada uno de los ítems flexibles.

○ **Eje principal**: Los contenedores flexibles tienen una orientación principal específica. Por defecto es el eje horizontal.

○ **Eje secundario**: La orientación secundaria es perpendicular a la principal.

● **Ítem**: Son los elementos hijos flexibles del contenedor.

Imaginemos el siguiente escenario:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b9a7aa28-ae65-40da-96b1-41a36fe8720a)

Para activar el modo **flexbox**, hemos utilizado sobre el elemento contenedor la propiedad **display** y especificamos el valor **flex** o **inline-flex** (dependiendo de cómo queramos que se comporte el contenedor).

- **Propiedad display**:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/aa161519-03a7-42d9-a5d1-4a37c93555c6)


- **Direcciones de los ejes**: Existen dos propiedades principales para manipular la dirección y comportamiento de los ítems a lo largo del eje principal del contenedor. Son las siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/90e7db14-f090-42ff-b067-037de1adebda)

Mediante la propiedad **flex-direction** podemos modificar la dirección del eje principal del contenedor para que se oriente en horizontal (por defecto) o en vertical. Además, también podemos incluir el sufijo **-reverse** para indicar que coloque los ítems en orden inverso.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3ecb9cac-872e-471e-a047-f91504ec96c1)

- **row** y **row-reverse** determinan el orden de los elementos. Aplicando estas propiedades modificamos el flujo del eje principal:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/33cff47a-f1f0-4756-9492-bfc6597def6c)

- **flex wrap**: Existe otra propiedad llamada flex-wrap con la que podemos especificar el comportamiento del contenedor respecto a evitar que se desborde (nowrap, valor por defecto) o permitir que lo haga, en cuyo caso, estaríamos hablando de un contenedor flexbox multilínea.
  
![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b61e360a-eb90-4cd7-bfba-082a5bdcf4f3)

Teniendo en cuenta estos valores de la propiedad flex-wrap, podemos conseguir cosas como la siguiente:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8c5854b4-4f51-4d47-9ed9-99ae8d599536)

Con **nowrap** los 3 ítems se muestran en una misma línea. El tamaño de los items se ajustan al contenedor, manteniendo sus proporciones.
Si especificamos wrap el contenedor se puede desbordar, pasando a ser un contenedor multilínea que muestra uno o más elementos en la línea
siguiente.  

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b904eb8b-acb6-40ce-92bf-0b2d36a230a6)

### Flexbox | Atajo: dirección de los ejes

Existe una propiedad de atajo (short-hand) llamada flex-flow, con la que podemos resumir los valores de las propiedades flex-direction y flex-wrap, especificandose en una sola propiedad y ahorrándonos utilizar las propiedades concretas: 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9c9b0cfc-0a08-4702-8332-8e5d155469f0)

### Flexbox | Propiedades de alineación

Disponemos de 4 propiedades relativas a la alineación, la primera relativa al eje principal y las restantes al secundario:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bdef385e-4284-482e-a0ae-112723e76611)

● **justify-content**: Alinea los ítems del eje principal.

● **align-items**: Alinea los ítems del eje secundario.

### Flexbox | Eje principal

La propiedad justify-content sirve para colocar los ítems de un contenedor
mediante una disposición concreta a lo largo del eje principal:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/91405a12-8259-4e7a-a148-a800f5ad1dfc)

Con estos valores de la propiedad justify-content modificamos la disposición
de los ítems del contenedor, distribuyéndose como se ve en el siguiente
ejemplo (nótense los números para observar el orden de cada ítem):

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/73e0fe99-2869-440c-85f3-8f02240caf89)

- **align-content**: permite manejar contenedores flex multilínea. Estos
contenedores dividen el eje principal en múltiples líneas, dado que los ítems
no caben en el ancho disponible. Sus valores son los siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3678f027-2e1e-421f-a67c-4c02242217e8)

En un contenedor multilínea de 200 píxeles de alto con ítems de 50px de
alto, podemos utilizar la propiedad align-content para alinear los ítems de
forma vertical de modo que se queden en la zona inferior del contenedor:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/8c0a45bd-e253-44fa-b3c5-3dda9faf264a)


### Flexbox | Eje secundario

- **align-items**: alinea los ítems en el eje secundario del contenedor. A diferencia
de align-content, align-items opera sobre el eje secundario. Los valores que
puede tomar son los siguientes:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/eef49deb-8951-48d7-af1a-382062e0ba5e)

- **align-self** actúa como align-items, pero sobre un ítem hijo específico,
sobreescribiendo su comportamiento. La propiedad puede tomar los
siguientes valores:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/11d57dc4-780b-456b-b270-e03a66936cd2)

Si se especifica el valor auto a la propiedad align-self, el navegador le asigna
el valor de la propiedad align-items del contenedor padre, y en caso de no
existir, el valor por defecto stretch. Ver segundo ejemplo interactivo aquí.
Existe un atajo para establecer valores de align-content y de justify-content
a la vez, denominada place-content. Las dos clases siguientes proporcionan
las mismas características:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/02f6b988-1a40-4942-8b0d-62166e8e301e)


### Flexbox | Propiedades de hijos

Las siguientes propiedades se aplican sobre los ítems hijos:

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3e0405ba-ba73-4d4d-9ddc-264a1219ee36)

Si con flex-grow indicamos un valor de 1 a todos los ítems, todos serán del
mismo tamaño. Si colocamos un valor de 1 a todos, pero a uno le indicamos 2,
ese ítem será más grande que los anteriores. Por defecto tienen un valor de
0.

- **flex-shrink** es opuesta a flex-grow, aplica un factor de decrecimiento. De
esta forma, los ítems que tengan un valor numérico más grande, serán más
pequeños, mientras que los que tengan un valor numérico más pequeño
serán más grandes, justo al contrario de como funciona la propiedad
flex-grow.

- Por último, tenemos la propiedad **flex-basis**, que define el tamaño por
defecto (de base) que tendrán los ítems antes de aplicarle la distribución de
espacio. Generalmente, se aplica un tamaño (unidades, porcentajes, etc...),
pero también se puede aplicar la palabra clave content que ajusta
automáticamente el tamaño al contenido del ítem, que es su valor por
defecto.

### Flexbox | Atajo: Propiedades de hijos

Existe una propiedad llamada flex que sirve de atajo para estas tres
propiedades de los ítems hijos. Funciona de la siguiente forma:

```CSS
.item {
  /* flex: <flex-grow> <flex-shrink> <flex-basis> */
  flex: 1 3 35%;
}
```

### Flexbox | Huecos (gaps)

Las propiedades row-gap y column-gap establecen el tamaño del «hueco»
entre ítems desde el elemento contenedor, sin necesidad de utilizar padding
o margin en los elementos hijos. 

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6c53e293-0ced-4820-a058-e0d4e4665a7e)

Sólo una de las dos propiedades tendrá efecto, dependiendo de si
flex-direction está establecida en column o en row. Es posible usar ambas
cuando flex-wrap: wrap, disponiendo de multicolumnas flexbox

### Flexbox | Orden de los ítems

Por último, y quizás una de las propiedades más interesantes, es order, que
modifica y establece el orden de los ítems según una secuencia numérica.

Por defecto, todos los ítems flex tienen un order: 0 implícito, aunque no se
especifique. Si indicamos un order con un valor numérico, se reubican los
ítems según su número, colocando primero los ítems con número más
pequeño (incluso valores negativos) y después los ítems con números más
altos. De esta forma reordenamos fácilmente los ítems, incluso utilizando
media queries o responsive design.

---
