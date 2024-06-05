# Clase 16 - Programación modular con funciones

## Temas

```
Programación modular con funciones:
● Funciones. ¿Qué son? Scope global y local.
● Programación modular vs. Funciones.
● Función anónima y función flecha.
● Callbacks y clausuras.
```

---

## Funciones

Las funciones son estructuras esenciales dentro del código. Una función es
un grupo de instrucciones que constituyen una unidad lógica del programa
y resuelven un problema muy concreto. Presentan varias ventajas, entre ellas
las de permitir dividir un problema complejo en partes menores y más
simples, reutilizar código en el mismo o en otro programa, simplificar
la depuración, etcétera.

JavaScript proporciona al usuario una serie de funciones implementadas y
listas para utilizar. Sin embargo, no es difícil encontrar situaciones en las que
necesitamos realizar alguna tarea para la cual no existe una función
disponible, y debemos utilizar los mecanismos que nos proporciona JS para
construir nuestras propias funciones.

---

## Programación modular

La metodología de división por módulos se conoce habitualmente
como “divide y vencerás” y en programación se llama **Desarrollo Top
Down**.

**¿Cuál será la estrategia para resolver problemas?** Pensar en el
problema general e ir descomponiéndolo en sub-problemas
(sub-algoritmos). A su vez, estos subproblemas se podrán seguir
dividiendo hasta llegar a un subproblema lo bastante simple como
para poder resolverse de forma sencilla.

---

## Abstracción

Podemos definir la abstracción como el aislamiento de un elemento
de su contexto o del resto de los elementos que lo acompañan. En
programación la abstracción está relacionada con “qué hace”.

Concretamente, la abstracción se produce cuando creamos módulos.

Lo importante, para entender el concepto de abstracción, es
comprender que cada módulo es independiente de los demás
módulos (bajo acoplamiento) y que es ideal que realice una sola
tarea (alta cohesión).

Los módulos son independientes entre sí, aunque algunos pueden
necesitar colaborar con otros, o trabajar de forma conjunta.


---
