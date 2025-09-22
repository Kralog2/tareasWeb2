var carrito = [];
var productos = [
  { nombre: "Camisa", precio: 300 },
  { nombre: "Pantalón", precio: 500 },
  { nombre: "Zapatos", precio: 800 },
  { nombre: "Sombrero", precio: 200 },
];

var userSelection = prompt(
  "Productos disponibles:\n" +
    productos.map((p) => p.nombre).join(", ") +
    "\nSeleccione una opción:\n1. Agregar al carrito\n2. Eliminar del carrito\n3. Mostrar carrito\n4. Salir"
);

while (userSelection !== "4") {
  switch (userSelection) {
    case "1":
      var productoAgregar = prompt("Ingrese el nombre del producto a agregar:");
      var producto = productos.find((p) => p.nombre === productoAgregar);
      if (producto) {
        agregarAlCarrito(producto);
        alert("Producto agregado al carrito.");
      } else {
        alert("Producto no encontrado.");
      }
      break;

    case "2":
      var productoEliminar = prompt(
        "Ingrese el nombre del producto a eliminar:"
      );
      eliminarDelCarrito(productoEliminar);
      break;

    case "3":
      mostrarCarrito();
      break;

    default:
      alert("Opción no válida.");
  }

  userSelection = prompt(
    "Productos disponibles:\n" +
      productos.map((p) => p.nombre).join(", ") +
      "\nSeleccione una opción:\n1. Agregar al carrito\n2. Eliminar del carrito\n3. Mostrar carrito\n4. Salir"
  );
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
}

function eliminarDelCarrito(nombreProducto) {
  var index = carrito.findIndex((p) => p.nombre === nombreProducto);
  if (index !== -1) {
    carrito.splice(index, 1);
    alert("Producto eliminado del carrito.");
  } else {
    alert("Ese producto no está en el carrito.");
  }
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  var lista = carrito.map((p) => p.nombre + " - $" + p.precio).join("\n");
  alert(
    "Carrito de compras:\n" + lista + "\n\nTotal a pagar: $" + calcularTotal()
  );
}

function calcularTotal() {
  return carrito.reduce((total, producto) => total + producto.precio, 0);
}
