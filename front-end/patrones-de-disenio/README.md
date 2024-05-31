# Patrones de diseño

---

## Columnas iguales - CSS - GRid

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
