// Clase Dispositivo
class Dispositivo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.capacidad = prompt("¿Cuál es la capacidad de la batería (en mAh)?");
    }

    mostrarDetalles() {
        document.write("----------------------------------------------<br>");
        document.write("Detalles iniciales del producto:<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Modelo: ${this.modelo}<br>`);
        document.write(`Año: ${this.año}<br>`);
        document.write(`Capacidad de la batería: ${this.capacidad} mAh<br>`);
        document.write("----------------------------------------------<br>");
    }

    detallesActualizados() {
        document.write("-----------------------------------------------<br>");
        document.write("Detalles actualizados del producto:<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Modelo: ${this.modelo}<br>`);
        document.write(`Año: ${this.año}<br>`);
        document.write(`Capacidad de la batería: ${this.capacidad} mAh<br>`);
        document.write(`Sistema operativo: ${this.so}<br>`);
        document.write(`Tipo de conectividad: ${this.conectividad}<br>`);
        document.write("-----------------------------------------------<br>");
    }

    encender() {
        const encender = parseInt(prompt("¿Quiere encender el dispositivo? \n1. Sí \n2. No"));
        if (encender === 1) {
            document.write("-------------------------------------------------------------<br>");
            document.write("Acción de encender el dispositivo:<br>");
            document.write(`Marca: ${this.marca}<br>`);
            document.write(`Modelo: ${this.modelo}<br>`);
            document.write(`Año: ${this.año}<br>`);
            document.write(`Capacidad de la batería: ${this.capacidad} mAh<br>`);
            document.write(`El dispositivo ${this.marca} ${this.modelo} está encendido.<br>`);
            document.write("-------------------------------------------------------------<br>");
        } else {
            document.write(`El dispositivo ${this.marca} ${this.modelo} está apagado.<br>`);
        }
    }
}

// Subclase Smartphone
class Smartphone extends Dispositivo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
        this.so = prompt("¿Qué sistema operativo tiene el celular? \n-iOS \n-Android");
        this.conectividad = prompt("¿Cuál es el tipo de conectividad? \n-4G \n-5G");
    }
}

// Instancia
const objetoDispositivo = new Smartphone("Samsung", "S21 Ultra", "2022");
objetoDispositivo.mostrarDetalles();
objetoDispositivo.encender();
objetoDispositivo.detallesActualizados();
