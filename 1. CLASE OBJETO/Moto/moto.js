//Defino la clase 
class Moto{
    //Método constructor
    constructor(marca, modelo, potencia, color, peso){
        //Propiedades para la instancia
        this.marca = marca
        this.modelo = modelo
        this.potencia = potencia
        this.color = color
        this.peso = peso
    }

    //Método para mostrar detalles del objeto
    mostrarDetalles(){
        document.write(`<h3>Carro</h3>`)
        document.write(`Marca: ${this.marca}<br>`)
        document.write(`Modelo: ${this.modelo}<br>`)
        document.write(`Potencia: ${this.potencia}<br>`)
        document.write(`Color: ${this.color}<br>`)
        document.write(`Peso: ${this.peso}<br>`)
        document.write(`<hr>`)
    }

    // Método para encender la moto
    encender() {
        // Atributo privado solo para el método encender
        let encender = prompt("Quiere que la moto encienda? \n1. Sí \n2. No \nSeleccione una opción. ");
        // Evaluamos la decisión
        if (encender == 1) {
            document.write(`La moto ${this.marca} ${this.modelo} está encendida.<hr>`)
        } else {
            document.write(`La moto ${this.marca} ${this.modelo} no está encendida. <hr>`)
        }
    }

}

document.write(`<hr>`)

//Creación de objetos
let moto1 = new Moto("Yamaha", "Bwis", "10hp", "Azul", "120kg")
let moto2 = new Moto("Yamaha", "V80", "12hp", "Rojo", "90kg")
let moto3 = new Moto("Kawasaki", "ZX10R", "180hp", "Verde", "180kg")

moto1.mostrarDetalles()
moto1.encender()
moto2.mostrarDetalles()
moto2.encender()
moto3.mostrarDetalles()
moto3.encender()