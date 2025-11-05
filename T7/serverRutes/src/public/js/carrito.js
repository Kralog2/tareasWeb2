var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];
let carrito = [];

// mostrar menu
function menu(){
    alert(`
       hola que tal c:
       bienvenido a la tienda de ropa
        Porfavor eliga una opcion:
        `);
    let opcion;
    do{
        opcion=prompt(`
            Opciones :
            1.-Agregar Producto al carrito
            2.-Mostrar carrito
            3.-Comprar carrito
            4.-Salir
            "Elige una opcion"
            `);

        switch(opcion){
        
            case "1":
                agregarProducto();      
                break;
            case "2":
                mostrarCarrito();
                break;      
            case "3":
                alert("Gracias por su compra:");
                mostrarCarrito();
                break;  
            case "4":
                alert("Gracias por su visita vuela pronto");
                break;    
            default:
                alert("selecciona una opcion valida")
        }
    }while(opcion !== '3' && opcion !== '4');
}



//Funcion para agregar productos al carrito
function agregarProducto(){
    let mensaje = "Productos Disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
    });
    let eleccion = prompt(mensaje + "Elige el producto para agregar al carro");
    let indice = parseInt(eleccion) - 1;
    if (indice >= 0 && indice < productos.length) {
        carrito.push(productos[indice]);
        alert(`se agrego ${productos[indice].nombre} al carrito.`);
    } else {
        alert("No existe ese producto.");
    }   
}

// mostrar los productos en el carrito
function mostrarCarrito(){
    if (carrito.length === 0) {
        alert("El carrito está vacío.");    
    } else {
        let mensaje = "Productos en el carrito:\n";
        let total = 0;
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
            total += producto.precio;
        });
        mensaje += `Total: $${total}`;
        alert(mensaje);
    }   
}

menu();