class Libro {
    // Constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo;  // privado
        this._autor = autor;  // privado
        this._isbn = isbn;  // privado
        this.editorial = editorial;  // público
    }

    // Getter para título
    obtenerTitulo() {
        return this._titulo;
    }

    // Getter para autor
    obtenerAutor() {
        return this._autor;
    }

    // Getter para ISBN
    obtenerIsbn() {
        return this._isbn;
    }

    // Setter para título
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    // Setter para autor
    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    // Setter para editorial
    establecerEditorial(nuevoEditorial) {
        this.editorial = nuevoEditorial;  // Cambia el atributo público
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nTítulo: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Crear objeto
const libro = new Libro("Meditaciones", "Marco Aurelio", 321654653, "eBOOK");

// Imprimir atributos públicos y privados
libro.mostrarDetalles();

document.write("---------------------------------------------------<br>");

// Modificar atributos encapsulados usando setters
libro.establecerTitulo("Cómo ser un Estoico");  // setter
document.write(`Título: ${libro.obtenerTitulo()}<br>`);  // getter
libro.establecerAutor("Massimo Pigliucci");  // setter
document.write(`Autor: ${libro.obtenerAutor()}<br>`);  // getter
libro.establecerEditorial("coLibros");  // setter
document.write(`Editorial: ${libro.editorial}<br>`);  // público
