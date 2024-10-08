// Clase Electronico
class Electronico {
    constructor(marca, modelo, tipoProcesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipoProcesador = tipoProcesador;
        this.ram = parseInt(prompt("¿Cuál es la cantidad de memoria RAM?"));
    }

    mostrarDetalles() {
        document.write("--------------------------------------<br>");
        document.write("Detalles del producto:<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Modelo: ${this.modelo}<br>`);
        document.write(`Tipo de procesador: ${this.tipoProcesador}<br>`);
        document.write(`Cantidad de memoria RAM: ${this.ram} GB<br>`);
        document.write("--------------------------------------<br>");
    }
}

// Subclase Laptop
class Laptop extends Electronico {
    constructor(marca, modelo, tipoProcesador, tipoDiscoDuro) {
        super(marca, modelo, tipoProcesador);
        this.tipoDiscoDuro = tipoDiscoDuro;
        this.duracionBateria = prompt("¿Cuál es la duración de la batería en horas?");
    }

    encender() {
        let encender = parseInt(prompt("¿Quiere encender la laptop? Seleccione una opción \n1. Sí \n2. No"));
        if (encender === 1) {
            document.write("-------------------------------------------------------------<br>");
            document.write("LA LAPTOP ESTÁ ENCENDIDA<br>");
            document.write(`Marca: ${this.marca}<br>`);
            document.write(`Modelo: ${this.modelo}<br>`);
            document.write(`Tipo del procesador: ${this.tipoProcesador}<br>`);
            document.write(`Cantidad de memoria RAM: ${this.ram} GB<br>`);
            document.write(`Tipo de disco duro: ${this.tipoDiscoDuro}<br>`);
            document.write(`Duración de la batería en horas: ${this.duracionBateria}<br>`);
            document.write("-------------------------------------------------------------<br>");
        } else {
            document.write(`La laptop ${this.marca} ${this.modelo} está apagada.<br>`);
        }
    }
}

// Instancia
const objetoElectronico = new Laptop("ASUS", "Notebook", "Intel i7", "Sólido");
objetoElectronico.mostrarDetalles();
objetoElectronico.encender();
