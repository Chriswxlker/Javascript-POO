class Persona {
    // Constructor
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
        this._nombres = nombres;  // privado
        this._apellidos = apellidos;  // privado
        this._identidad = identidad;  // privado
        this.fechanacimiento = fechanacimiento;  // público
        this.sexo = sexo;  // público
    }

    // Getter para nombres
    obtenerNombres() {
        return this._nombres;
    }

    // Getter para apellidos
    obtenerApellidos() {
        return this._apellidos;
    }

    // Getter para identidad
    obtenerIdentidad() {
        return this._identidad;
    }

    // Setter para nombres
    establecerNombres(nuevoNombres) {
        this._nombres = nuevoNombres;
    }

    // Setter para apellidos
    establecerApellidos(nuevoApellidos) {
        this._apellidos = nuevoApellidos;
    }

    // Método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`Nombres: ${this._nombres}<br>`);
        document.write(`Apellidos: ${this._apellidos}<br>`);
        document.write(`N° Identidad: ${this._identidad}<br>`);
        document.write(`Fecha de nacimiento: ${this.fechanacimiento}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
    }
}

// Crear objeto
const persona = new Persona("Jorge", "Rojas", 1102345678, "14/09/2000", "M");

// Imprimir atributos públicos y privados
persona.mostrarDetalles();

document.write("---------------------------------------------------<br>");

// Modificar atributos encapsulados usando setters y obtener usando getters
persona.establecerNombres("Carlos");  // setter
document.write(`Nombres: ${persona.obtenerNombres()}<br>`);  // getter
persona.establecerApellidos("Perez");  // setter
document.write(`Apellidos: ${persona.obtenerApellidos()}<br>`);  // getter
document.write(`N° de Identidad: ${persona.obtenerIdentidad()}<br>`);  // getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento}<br>`);  // público
document.write(`Sexo: ${persona.sexo}<br>`);  // público
