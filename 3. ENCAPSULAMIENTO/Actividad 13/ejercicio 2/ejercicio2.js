class Producto {
    // Constructor
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre;  // privado
        this._precio = precio;  // privado
        this.cantidad = cantidad;  // público
        this.categoria = categoria;  // público
    }

    // Getter para nombre
    obtenerNombre() {
        return this._nombre;
    }

    // Getter para precio
    obtenerPrecio() {
        return this._precio;
    }

    // Setter para nombre
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Setter para precio
    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`Nombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoría: ${this.categoria}<br>`);
    }
}

// Crear objeto
const producto = new Producto("Caja de zapatos", 300000, 2, "Zapatos");

// Imprimir atributos públicos y privados
producto.mostrarDetalles();

document.write("---------------------------------------------------<br>");

// Modificar atributos encapsulados usando setters y obtener usando getters
producto.establecerNombre("Camisetas");  // setter
document.write(`Nombre: ${producto.obtenerNombre()}<br>`);  // getter
producto.establecerPrecio(400000);  // setter
document.write(`Precio: ${producto.obtenerPrecio()}<br>`);  // getter
document.write(`Cantidad: ${producto.cantidad}<br>`);  // público
document.write(`Categoría: ${producto.categoria}<br>`);  // público
