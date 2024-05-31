# Patrones de diseño

---

## Columnas iguales - CSS - Grid

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/9eed0b82-9545-41e8-86f0-5ef64447c2e8)


```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design - 2 Columnas</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor dos-columnas">
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen1.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen2.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
    </div>
</body>
</html>
```


```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

.entrada-blog a:hover {
    background-color: black;
    transition: 0.3s;
}

@media (min-width: 480px) {
    .dos-columnas {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
}
```

---

## Columnas iguales  - Flex Box

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/cc35ea4c-7a3b-4a86-8a3f-8a893e239760)


```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design - 2 Columnas</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor dos-columnas">
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen1.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen2.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
    </div>
</body>
</html>
```


```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
}

img {
    max-width: 99%;
}

h1 {
    font-size: 4rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width:480px) {
    .dos-columnas {
        display: flex;
        justify-content: space-between;
    }
    .entrada-blog {
        flex-basis: calc(50%-1rem);
        /*calc() hace un cálculo matemático*/
        /*Ocupa el 50% del contenedor - 1 rem para dar espacio entre columnas*/
    }
}
```

---

## Columnas iguales - CSS - Grid

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/e09db394-f905-4e39-9a1d-d0c289c75b4c)

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design - 3 Columnas Iguales</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor tres-columnas">
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen1.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen2.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen3.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen1.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen2.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen3.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
    </div>
</body>
</html>
```


```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width:480px) {
    .tres-columnas {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 2rem;
    }
}
```

---

## Columnas iguales Flex Box

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/6bdf0c50-4160-4bef-9cce-ee324abcf414)

```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design - 3 Columnas Iguales</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor tres-columnas">
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen1.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen2.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen3.jpg">

            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen1.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen2.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
        <article class="entrada-blog">
            <h1>Titulo Entrada Blog</h1>
            <img src="img/imagen3.jpg">
            <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus.</p>
            <a href="#">Leer más</a>
        </article>
    </div>
</body>
</html>
```

```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width:480px) {
    .tres-columnas {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .entrada-blog {
        flex-basis: calc(33.3% - 1rem);
        /*calc() hace un cálculo matemático*/
        /*Ocupa el 33% del contenedor - 1 rem para dar espacio entre columnas*/
    }
}
```

---

## Columnas  - CSS - Grid

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/1970ee9e-ae67-4817-b0b3-2b5fc078518b)


```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor contenedor-grid">
        <main>
            <article>
                <h1>Entrada del Blog</h1>
                <img src="img/imagen1.jpg">
                <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus. Praesent laoreet tortor vel mauris suscipit convallis.
                    Duis interdum venenatis metus, ut condimentum tortor fringilla eu. Curabitur mi lorem, pellentesque sed feugiat vitae, commodo id leo. Mauris nec dui consectetur, ullamcorper eros vel, volutpat nulla. Mauris mattis dignissim laoreet.
                    In at tellus et quam iaculis commodo. Aliquam cursus turpis sed elit consequat placerat sit amet in ante. Nulla libero ex, imperdiet non faucibus a, sagittis sit amet ligula. Sed blandit ante est, nec aliquet quam pulvinar sed. Sed
                    varius, lacus in facilisis ultrices, urna turpis ullamcorper nibh, sit amet interdum nisi nisi eget arcu. Vestibulum bibendum velit justo, eget cursus ipsum pharetra in.</p>
                <p>Aliquam urna enim, ullamcorper vel urna id, tincidunt lobortis tortor. Donec bibendum condimentum purus, at rhoncus sapien. Phasellus ac ipsum metus. Aliquam arcu erat, posuere ac dolor vel, imperdiet tempor enim. Fusce tristique consequat
                    convallis. Sed auctor fermentum elit. Vestibulum mi libero, tincidunt quis auctor id, faucibus nec augue. Pellentesque ut vestibulum augue. Aenean in lorem tincidunt, sodales arcu eget, bibendum nisi. Proin vitae magna eu leo vulputate
                    congue consectetur sed felis. Ut tempus neque sit amet tortor aliquet hendrerit. Nulla feugiat metus quis libero convallis fermentum. Morbi eleifend id tellus quis iaculis. Sed vitae turpis eget eros faucibus luctus at vitae lacus.
                    Nunc blandit arcu arcu, non condimentum dui posuere vitae. Nulla facilisi.</p>
                <p>Aliquam erat volutpat. Ut dapibus tincidunt odio, a pulvinar dolor dapibus varius. Quisque fringilla faucibus sapien nec blandit. Cras at lectus tincidunt mi cursus dapibus in a nunc. Suspendisse vitae velit orci. Suspendisse nisi sapien,
                    vehicula eget vehicula in, lacinia vitae tellus. Nulla facilisi. Sed consectetur consectetur sapien. Duis pretium blandit massa, mattis maximus nunc finibus in. Vestibulum ultrices ex lorem, sed ullamcorper est rhoncus sit amet. Pellentesque
                    placerat ex sed nisl posuere, a porta augue finibus. Sed auctor mauris nec lacus interdum, nec consequat est pharetra. Praesent sit amet rhoncus diam. Nullam risus sapien, euismod vitae condimentum ac, consequat quis dui. Donec varius
                    condimentum orci ac malesuada. Nulla bibendum quam viverra, bibendum ex vel, suscipit lacus.</p>
            </article>
        </main>
        <aside>
            <h2>Sobre Nosotros</h2>
            <p>Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </aside>
        <aside>
            <h2>Misión</h2>
            <p>Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </aside>
    </div>
</body>
</html>
```


```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    line-height: 2;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 3.2rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

p {
    font-size: 2rem;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width:480px) {
    .contenedor-grid {
        display: grid;
        grid-template-columns: 3fr repeat(2, 1fr);
        column-gap: 2rem;
    }
}
```

---

## COlumnas - Felx Box

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/2d8b7e49-4bea-4e88-b2f0-0de4e97f573b)


```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor contenedor-flex">
        <main class="contenido-principal">
            <article>
                <h1>Entrada del Blog</h1>
                <img src="img/imagen1.jpg">
                <p>Maecenas maximus urna vitae nisl semper, id volutpat ipsum scelerisque. Aenean nec ipsum finibus, eleifend dolor at, venenatis risus. Quisque varius orci et augue scelerisque luctus. Praesent laoreet tortor vel mauris suscipit convallis.
                    Duis interdum venenatis metus, ut condimentum tortor fringilla eu. Curabitur mi lorem, pellentesque sed feugiat vitae, commodo id leo. Mauris nec dui consectetur, ullamcorper eros vel, volutpat nulla. Mauris mattis dignissim laoreet.
                    In at tellus et quam iaculis commodo. Aliquam cursus turpis sed elit consequat placerat sit amet in ante. Nulla libero ex, imperdiet non faucibus a, sagittis sit amet ligula. Sed blandit ante est, nec aliquet quam pulvinar sed. Sed
                    varius, lacus in facilisis ultrices, urna turpis ullamcorper nibh, sit amet interdum nisi nisi eget arcu. Vestibulum bibendum velit justo, eget cursus ipsum pharetra in.</p>
                <p>Aliquam urna enim, ullamcorper vel urna id, tincidunt lobortis tortor. Donec bibendum condimentum purus, at rhoncus sapien. Phasellus ac ipsum metus. Aliquam arcu erat, posuere ac dolor vel, imperdiet tempor enim. Fusce tristique consequat
                    convallis. Sed auctor fermentum elit. Vestibulum mi libero, tincidunt quis auctor id, faucibus nec augue. Pellentesque ut vestibulum augue. Aenean in lorem tincidunt, sodales arcu eget, bibendum nisi. Proin vitae magna eu leo vulputate
                    congue consectetur sed felis. Ut tempus neque sit amet tortor aliquet hendrerit. Nulla feugiat metus quis libero convallis fermentum. Morbi eleifend id tellus quis iaculis. Sed vitae turpis eget eros faucibus luctus at vitae lacus.
                    Nunc blandit arcu arcu, non condimentum dui posuere vitae. Nulla facilisi.</p>
                <p>Aliquam erat volutpat. Ut dapibus tincidunt odio, a pulvinar dolor dapibus varius. Quisque fringilla faucibus sapien nec blandit. Cras at lectus tincidunt mi cursus dapibus in a nunc. Suspendisse vitae velit orci. Suspendisse nisi sapien,
                    vehicula eget vehicula in, lacinia vitae tellus. Nulla facilisi. Sed consectetur consectetur sapien. Duis pretium blandit massa, mattis maximus nunc finibus in. Vestibulum ultrices ex lorem, sed ullamcorper est rhoncus sit amet. Pellentesque
                    placerat ex sed nisl posuere, a porta augue finibus. Sed auctor mauris nec lacus interdum, nec consequat est pharetra. Praesent sit amet rhoncus diam. Nullam risus sapien, euismod vitae condimentum ac, consequat quis dui. Donec varius
                    condimentum orci ac malesuada. Nulla bibendum quam viverra, bibendum ex vel, suscipit lacus.</p>
            </article>
        </main>
        <aside class="sidebar">
            <h2>Sobre Nosotros</h2>
            <p>Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </aside>
        <aside class="sidebar">
            <h2>Misión</h2>
            <p>Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </aside>
    </div>
</body>
</html>
```

```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    line-height: 1.2;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 3.2rem;
}

p {
    font-size: 2rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width: 768px) {
    .contenedor-flex {
        display: flex;
        justify-content: space-between;
    }
    .contenido-principal {
        flex-basis: calc(60% - 1rem);
    }
    .sidebar {
        flex-basis: calc(20% - 1rem);
    }
    /*calc() hace un cálculo matemático*/
    /*Ocupa el 60% y el 20% del contenedor respectivamente - 1 rem para dar espacio entre columnas*/
}
```


---

## Clumn Drop - CSS - Grid

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/f2a9d64e-58ed-4a90-97a2-2f51ec678c6b)


```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor column-drop-css">
        <main class="contenido-principal">
            <h1>Column Drop (primera columna)</h1>
            <p>
                Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>

        <aside class="primera">
            <h1>Titulo Blog (segunda columna)</h1>
            <p>
                Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </aside>
        <aside class="segunda">
            <h1>Titulo Blog (tercera columna)</h1>
            <p>
                Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </aside>
    </div>
</body>
</html>
```


```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    line-height: 2;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 3.2rem;
}

p {
    font-size: 2rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width: 320px) {
    .column-drop-css {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    .segunda {
        grid-column: 1 / 3;
    }
}

@media (min-width: 560px) {
    .column-drop-css {
        grid-template-columns: repeat(3, 1fr);
    }
    .segunda {
        grid-column: 3 / 4;
    }
}
```

---

## Column Drop - Flex Box

![image](https://github.com/eugenia1984/CodoACodo-FS-Java/assets/72580574/b5081dde-cd1d-4028-8919-89fa307afda2)

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Patrones Responsive Web Design</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="contenedor column-drop-flex">
        <main class="contenido-principal">
            <h1>Column Drop (primera columna)</h1>
            <p>
                Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>
        <aside class="primera">
            <h1>Titulo Blog (segunda columna)</h1>
            <p>
                Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </aside>
        <aside class="segunda">
            <h1>Titulo Blog (tercera columna)</h1>
            <p>
                Titulo Blog, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </aside>
    </div>
</body>
</html>
```

```CSS
html {
    font-size: 62.5%;
}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    line-height: 2;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 3.2rem;
}

p {
    font-size: 2rem;
}

.contenedor {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
}

.entrada-blog a {
    display: inline-block;
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
}

@media (min-width:480px) {
    .column-drop-flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .contenido-principal,
    .primera {
        flex-basis: calc(50% - 1rem);
    }
}

@media (min-width:768px) {
    .contenido-principal,
    .primera,
    .segunda {
        flex-basis: calc(33.3% - 2rem);
    }
}
```

---
