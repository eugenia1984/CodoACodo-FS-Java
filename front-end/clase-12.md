# Clase 12 - Git

## Temas:

```
● Introducción a GIT y GitHub.
● Comandos básicos.
● Creación de repositorios y ramas.
```

---

## ¿Qué es GIT?

Git es **un sistema de control de versiones distribuido**, diseñado por **Linus Torvalds**. Está optimizado para guardar cambios de forma incremental. Permite contar con un historial, regresar a una versión anterior y agregar funcionalidades.

Además, es capaz de **llevar un registro de los cambios que otras personas realicen en los archivos**, gracias a GitHub, donde podemos almacenar y compartir nuestros proyectos de forma gratuita. Es **multiplataforma**, es decir, es compatible con Linux, MacOS y Windows. En la máquina local se encuentra Git, se utiliza bajo la terminal o línea de comandos y tiene comandos como ``merge``, ``pull``, ``add``, ``commit`` y ``rebase``, entre otros.

Con Git se obtiene una mayor eficiencia usando archivos de texto plano, ya que con archivos binarios no puede guardar solo los cambios, sino que debe volver a grabar el archivo completo ante cada modificación, por mínima que sea, lo que hace que incremente el tamaño del repositorio.

---

## GIT | Definición

Es un sistema que ayuda a organizar el código, el historial y su evolución, funciona como una máquina del tiempo que permite navegar a diferentes
versiones del proyecto y si queremos agregar una funcionalidad nueva nos permite crear una rama (branch) para dejar intacta la versión estable y crear un ambiente de trabajo en el cual podemos trabajar en una nueva funcionalidad sin afectar la versión original. 

Permite:

● Manejar distintas versiones del proyecto.

● Guardar el historial o guardar todas las versiones de los archivos del proyecto.

● Trabajar simultáneamente sobre un mismo proyecto.

---

## GIT | ¿Cómo funciona?

Git almacena instantáneas de un mini sistema de archivos. Cada vez que
confirmamos un cambio, Git toma una "foto" del aspecto del proyecto en ese
momento y crea una referencia a esa instantánea. Si un archivo no cambió
Git sólo crea un enlace a la imagen anterior idéntica que tiene almacenada.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1e295c83-8fe4-47a5-8fcc-78aa6727366c)

---

## GIT | Terminología

● **Repositorio**: es la carpeta principal donde se encuentran almacenados los archivos que componen el proyecto. El directorio contiene metadatos gestionados por Git, de manera que el proyecto es configurado como un repositorio local.

● **Commit**: un commit es el estado de un proyecto en un determinado momento de la historia del mismo, imaginemos esto como punto por punto cada uno de los cambios que van pasando. Depende de nosotros determinar cuántos y cuales archivos incluirá cada commit.

● **Rama (branch)**: una rama es una línea alterna del tiempo en la historia de nuestro repositorio. Funciona para crear **features**, arreglar **bugs**, experimentar, sin afectar la versión estable o principal del proyecto. La rama principal por defecto es master(ahora es **main**).

● **Pull Request**: en proyectos con un equipo de trabajo, cada persona puede trabajar en una rama distinta, pero llegado el momento puede
pasar que dicha rama se tenga que unir a la rama principal. Para eso se crea un pull request donde comunicamos el código que incluye los
cambios, es revisado, comentado y aprobado para darle merge. En el contexto de GIT, merge significa unir dos trabajos, en este caso la rama
branch con la rama master.

---

## GIT | Flujo de trabajo

Git registra en nuestro directorio
local los cambios que se produzcan
en los archivos o código, cada vez
que se lo indiquemos. De esta
forma podemos “viajar en el
tiempo” revirtiendo cambios o
restaurando versiones de código.
Esto puede hacerse localmente o de
forma remota (servidor externo).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/bbc890b1-57a3-4c4a-a03d-06f80bc017a4)


## GIT | Estados

**Working directory** es nuestro directorio de trabajo. Cada vez que queremos agregar un archivo al **staging area**, usamos ``git add``.

Luego, cuando queremos establecer un punto de restauración, ejecutamos ``git commit``, y los archivos son actualizados en el repositorio **(repository)**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6a0bd418-67be-4390-a6d5-10343b1a7e24)


---

## GIT | Ramas (branch y merge)

● **Crear una rama**: ``git branch <nombreBranch>``

● **Unir la rama a Master**: ``git merge <nombreBranch>``

● **Mostrar en qué rama nos encontramos**: ``git branch``

● **Cambiar a una rama determinada**: ``git checkout <nombreBranch>``

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/34e52b05-b654-4170-b646-304449cccf5f)


---
