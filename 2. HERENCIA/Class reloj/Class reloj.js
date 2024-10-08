// Clase Reloj
class Reloj {
    constructor(marca, tipoReloj, material) {
        this.marca = marca;
        this.tipoReloj = tipoReloj;
        this.material = material;
        this.precio = parseInt(prompt("¿Cuál es el precio del reloj?"));
    }

    mostrarDetalles() {
        document.write("--------------------------------------<br>");
        document.write("Detalles del producto:<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Tipo del reloj: ${this.tipoReloj}<br>`);
        document.write(`Material de la caja: ${this.material}<br>`);
        document.write(`Precio: $${this.precio}<br>`);
        document.write("--------------------------------------<br>");
    }
}

// Subclase RelojInteligente
class RelojInteligente extends Reloj {
    constructor(marca, tipoReloj, material, tipoPantalla) {
        super(marca, tipoReloj, material);
        this.tipoPantalla = tipoPantalla;
        this.so = prompt("¿Cuál es el sistema operativo del reloj? \n-Wear OS \n-Otro");
    }

    encender() {
        const encender = parseInt(prompt("¿Quiere encender el reloj inteligente? \n1. Sí \n2. No"));
        if (encender === 1) {
            document.write("-------------------------------------------------------------<br>");
            document.write("EL RELOJ INTELIGENTE ESTÁ ENCENDIDO<br>");
            document.write(`Marca: ${this.marca}<br>`);
            document.write(`Tipo del reloj: ${this.tipoReloj}<br>`);
            document.write(`Material de la caja: ${this.material}<br>`);
            document.write(`Precio: $${this.precio}<br>`);
            document.write(`Tipo de pantalla: ${this.tipoPantalla}<br>`);
            document.write(`Sistema operativo del reloj: ${this.so}<br>`);
            document.write("-------------------------------------------------------------<br>");
        } else {
            document.write(`El reloj inteligente ${this.marca} ${this.tipoReloj} está apagado.<br>`);
        }
    }
}

// Instancia
const objetoReloj = new RelojInteligente("Samsung", "Smart", "Aluminio", "OLED");
objetoReloj.mostrarDetalles();
objetoReloj.encender();
