// Clase Electrodomestico
class Electrodomestico {
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumo = prompt("¿Cuál es el consumo eléctrico en kilowatts del electrodoméstico?");
    }

    mostrarDetalles() {
        document.write("--------------------------------------<br>");
        document.write("Detalles del producto:<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Color: ${this.color}<br>`);
        document.write(`Capacidad (en litros): ${this.capacidad}<br>`);
        document.write(`Consumo en kWh: ${this.consumo}<br>`);
        document.write("--------------------------------------<br>");
    }
}

// Subclase Refrigerador
class Refrigerador extends Electrodomestico {
    constructor(marca, color, capacidad) {
        super(marca, color, capacidad);
        this.tipo = prompt("¿Qué tipo de refrigerador es? \n-Frost \n-No Frost");
        this.temperatura = parseInt(prompt("¿Cuál es la temperatura inicial? (en °C):"));
        this.nuevaTemperatura = parseInt(prompt("¿Cuál es la nueva temperatura?:"));
    }

    detallesActualizados() {
        document.write("--------------------------------------<br>");
        document.write("Detalles actualizados del producto:<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Modelo: ${this.color}<br>`);
        document.write(`Capacidad (en litros): ${this.capacidad}<br>`);
        document.write(`Consumo en kWh: ${this.consumo}<br>`);
        document.write(`Tipo de refrigerador: ${this.tipo}<br>`);
        document.write(`Temperatura inicial: ${this.temperatura}<br>`);
        document.write(`Nueva temperatura: ${this.nuevaTemperatura}<br>`);
        document.write("--------------------------------------<br>");
    }
}

// Instancia
const objetoElectrodomestico = new Refrigerador("LG", "Gris", "500L");
objetoElectrodomestico.mostrarDetalles();
objetoElectrodomestico.detallesActualizados();