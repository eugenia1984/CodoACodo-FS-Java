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

## Comandos básicos del sistema operativo

Una vez instalado git y con la consola de comandos abierta (puede ser la terminal de VSCode), podemos utilizar comandos para movernos por el árbol de directorios (carpetas), ver su contenido, crear carpetas nuevas, etcétera.

| Comando | Descripción |
| ------- | ----------- |
| ``pwd`` | Ver en qué carpeta estamos ubicados. |
| ``ls`` | Mostrar el contenido de la carpeta. Agregando ``-l`` o ``-lh`` obtenemos más detalle y con ``-la`` muestra los archivos ocultos. |
| ``clear`` o ``CTRL+L`` | Limpiar la pantalla. |
| ``cd`` | carpeta Ingresar en la subcarpeta (cd: **change directory**). |
| ``mkdir`` | nombrecarpeta Nos permite crear una carpeta. |
| ``rm <archivo.ext>`` | Elimina el archivo, donde ext es la extensión. |
| ``rm –r <nombredecarpeta/>`` | Elimina la carpeta. |
| ``mv <nombreoriginal.ext> <nombrenuevo.ext>`` | Cambia el nombre a un archivo (agregando la extensión) o a una carpeta. |
| ``exit`` | Salimos de la terminal. |

---

## GIT | Registrar mis datos en git

Antes de realizar algunas de las operaciones más importantes de git, necesitamos indicar cuál es nuestra dirección de correo y cuál es nuestro
nombre. Esto se hace con los comandos siguientes:

● Proporcionar la dirección de correo: ``git config --global user.email "correodelusuario@dominio.com"``

● Proporcionar el nombre del propietario: ``git config --global user.name "NombreDelUsuario"``

● Consultar los datos que tenemos registrados: ``git config --global -e``

---

## GIT | Inicializar una carpeta

El primer paso para utilizar git en un proyecto consiste en inicializar la carpeta que lo contiene, convirtiéndola en un repositorio
local. 

Para ello, utilizando los comandos provistos por el sistema operativo debemos ubicarnos en ella, y utilizar el comando ``git init``. Esto genera por defecto una rama llamada “master”.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3f2d011f-05a6-468f-a3d0-0694b7e1161f)

---

## GIT | Ver y cambiar el nombre a la rama actual

Para ver el estado de la rama actual y su contenido utilizamos: ``git status``.

Es posible cambiar el nombre a la rama actual con el comando: ``git branch -m <nombre>``.

Actualmente se está realizando una campaña para utilizar como rama principal main en lugar de master.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/4daf0ab2-5591-4760-9d62-33a6835a6da1)

---

## GIT | Ver el estado de los archivos

Podemos ver el estado de los archivos que contiene la carpeta controlada por git usando ``git status``. En color rojo vemos archivos agregados/modificados, que aún no se han incluido en el **staging area**.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6222f21c-9619-4e1d-9860-f46a8fc8eafd)

---

## GIT | Agregar archivos al staging area

``git add`` incorpora los archivos que han sido creados o modificados recientemente al staging area. Se puede agregar un archivo con: ``git add <archivo>`` O todos con: ``git add .`` Los archivos listos para ser commiteados aparecen ahora en verde.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/d1433b01-0f28-4e84-937c-185bef00b49c)

---

## GIT | Agregar archivos al repositorio local

Los archivos del **staging area** se envían al repositorio local utilizando el comando ``git commit -m ”comentario”``, donde “comentario” es una explicación de los cambios implicados. Es importante incluir una descripción relevante en cada commit, ya que será lo que git nos mostrará cuando veamos el “historial” de cambios realizados.

Cada vez que realizamos un commit, git genera un punto de restauración al cual es posible volver en cualquier momento.

Si no incluimos el comentario (git commit), y hemos configurado un editor de texto, git abre una ventana para que lo hagamos. Grabamos, cerramos, y el commit se habrá realizado.

---

## GIT | Ver snapshots creados

Luego de hacer el commit, si queremos obtener un historial de los cambios realizados en los archivos que integran nuestro repositorio usamos ``git log``.

El ciclo de trabajo, entonces, consiste en editar los archivos, enviarlos al staging area, y cuando estamos listos, hacemos un commit.
Repetimos este proceso las veces que sea necesario.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/a46a1554-ec72-41d0-85e0-20dff6c6e6bf)

---

## GIT | Ver cambios en un archivo

Una característica muy potente de git es la posibilidad de visualizar los cambios que se han producido en un archivo. Con ``git diff`` podemos
ver que líneas se agregaron (verde), eliminaron (rojo) o modificaron (amarillo) entre la versión actual del mismo y la del último commit:  ``git diff <archivo>``

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/073de8b8-3a94-45b7-887e-af93fffa43e7)

---

## GIT | Descartar cambios

Existen tres maneras de descartar cambios que hayamos realizado:

- ``git checkout``: descarta los cambios sobre el archivo y vuelve a la versión que esté en el último commit del repositorio.
  
- ``git reset --hard``: descarta todos los cambios no commiteados, sin guardarlos. Vuelve a las versiones del último commit realizado.

- ``git stash``: descarta todos los cambios no commiteados, guardándolos para poder recuperarlos en un futuro.

---

## GIT | Recuperar cambios que han sido descartados

Los cambios que han sido descartados con git stash pueden ser recuperados.

- ``git stash list``: lista todos los “puntos de restauración” que hemos generado con “stash”. El más reciente tiene el índice 0 (cero).

- ``git stash show –p <stash-name>``: Muestra los cambios que se encuentran guardados en un stash en particular.

- ``git stash apply <stash-name>``: Recupera los cambios desde un stash en particular (no se elimina el punto de restauración).

- ``git stash drop <stash-name>``: Elimina un “punto de restauración” de forma definitiva, y la pila de cambios stasheados se reordenará. Esta acción es irreversible.

---

## GIT | Ignorar archivos o carpetas

Cuando no necesitamos que todos los archivos de nuestro proyecto sean gestionados por git podemos hacer una lista con los archivos y/o
carpetas a excluir, y guardarla en un archivo de texto que tenga el nombre ``.gitignore``. Se debe poner un nombre por línea, y todos los
archivos allí listados serán ignorados por git.

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/07cca113-4b00-4d8d-bfc6-ac392bea406c)

---

## GIT | Ramas (branch)

Podemos crear una nueva rama en nuestro proyecto, mediante estos comandos:

- ``git branch``: muestra la(s) ramas que componen el proyecto.

- ``git branch <nombre de la rama>``: crea una nueva rama con el nombre indicado.

- ``git checkout <nombre de la rama>``: cambio a otra rama para trabajar en ella.

---

## GIT | GitHub

GitHub es una plataforma de repositorios remotos. Además de permitir ver el código y descargar diferentes versiones de una aplicación, la
plataforma también conecta desarrolladores para que puedan colaborar en un mismo proyecto.

Podemos sincronizar repositorios locales con repositorios remotos, clonar en nuestra PC repositorios públicos de terceros, utilizar la plataforma como un mecanismo de backup de nuestros repositorios locales. Para poder subir gratis los proyectos deberán ser de código abierto. Ofrece también una herramienta de revisión de código, en la que se pueden dejar anotaciones para mejorar y optimizar el código.

---

## GIT | Crear y vincular repositorio remoto

Creamos un repositorio (1), le damos un nombre (2) y lo enlazamos con nuestro repositorio local mediante el comando que nos muestra la
plataforma (3).

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/3b7add97-db84-4cb1-9df7-d4f0d248c1df)

---
