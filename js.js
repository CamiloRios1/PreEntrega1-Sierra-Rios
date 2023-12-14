// Simulador interactivo de compra en una tienda en línea

// Variables
let totalCompra = 0;
let descuento = 0;

// Ciclo para simular la selección de productos
let producto;
do {
    producto = prompt("Ingrese el nombre del producto (Para calcular el total escriba 'fin')")

    if (producto.toLowerCase() !== 'fin') {
        let precio = parseFloat(prompt(`Ingrese el precio del ${producto}:`));
        totalCompra += precio;
    }
} while (producto.toLowerCase() !== 'fin');

// Función para calcular el descuento
function calcularDescuento(total) {
    if (total >= 100) {
        return 0.1; // 10% de descuento si el total es igual o mayor a 100
    } else {
        return 0; // Sin descuento
    }
}

// Llamada a la función para calcular el descuento
descuento = calcularDescuento(totalCompra);

// Aplicar descuento
let totalConDescuento = totalCompra - (totalCompra * descuento);

// Resultados
console.log(`Total de la compra: $${totalCompra.toFixed(2)}`);
console.log(`Descuento aplicado: ${descuento * 100}%`);
console.log(`Total con descuento: $${totalConDescuento.toFixed(2)}`);
