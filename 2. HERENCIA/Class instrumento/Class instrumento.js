// Clase Instrumento
class Instrumento {
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt("¿Cuál es el precio del instrumento?"));
    }

    mostrarDetalles() {
        document.write("--------------------------------------<br>");
        document.write("Detalles del producto:<br>");
        document.write(`Tipo de instrumento: ${this.tipo}<br>`);
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Material: ${this.material}<br>`);
        document.write(`Precio del instrumento: $${this.precio}<br>`);
        document.write("--------------------------------------<br>");
    }
}

// Subclase Guitarra
class Guitarra extends Instrumento {
    constructor(tipo, marca, material) {
        super(tipo, marca, material);
        this.nCuerdas = prompt("¿Cuál es el número de cuerdas de la guitarra?");
        this.acordes = prompt("¿Qué acordes básicos conoce?");
    }

    tocar() {
        let tocar = parseInt(prompt("¿Desea tocar la guitarra con los acordes proporcionados? \n1. Sí \n2. No"));
        if (tocar === 1) {
            document.write("--------------------------------------<br>");
            document.write("La guitarra está tocando los acordes proporcionados.<br>");
            document.write(`Número de cuerdas: ${this.nCuerdas}<br>`);
            document.write(`Acordes: ${this.acordes}<br>`);
            document.write("--------------------------------------<br>");
        } else {
            document.write("La guitarra no se está tocando en este momento...<br>");
        }
    }
}

// Instancia
const objetoInstrumento = new Guitarra("Guitarra", "Yamaha", "Madera");
objetoInstrumento.mostrarDetalles();
objetoInstrumento.tocar();
