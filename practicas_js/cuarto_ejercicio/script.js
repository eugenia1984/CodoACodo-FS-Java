let nombreUsuario = prompt("Bienvenido alumn@, ingrese su nombre: ");

if (nombreUsuario === null) { // si hacen click en cancelar
  alert(`Debía ingresar el nombre, en vez de hacer click en cancelar.`);
} else if (nombreUsuario === "") { // si no completan nada
  alert(`Debía ingresar un nombre`);
} else {
  alert(`Hola ${nombreUsuario}`);
}
