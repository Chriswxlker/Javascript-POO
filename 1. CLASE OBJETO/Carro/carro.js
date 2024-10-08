//Defino la clase 
class Carro{
    //Método co5nstructor
    constructor(marca, modelo, potencia, color, nacionalidad){
        //Propiedades para la instancia
        this.marca = marca
        this.modelo = modelo
        this.potencia = potencia
        this.color = color
        this.nacionalidad = nacionalidad
    }

    //Método para mostrar detalles del objeto
    mostrarDetalles(){
        document.write(`<h3>Carro</h3>`)
        document.write(`Marca: ${this.marca}<br>`)
        document.write(`Modelo: ${this.modelo}<br>`)
        document.write(`Potencia: ${this.potencia}<br>`)
        document.write(`Color: ${this.color}<br>`)
        document.write(`Nacionalidad: ${this.nacionalidad}<br>`)
        document.write(`<hr>`)
    }

    // Método para encender el carro
    encender() {
        // Atributo privado solo para el método encender
        let encender = prompt("Quiere que el carro encienda? \n1. Sí \n2. No \nSeleccione una opción. ");
        // Evaluamos la decisión
        if (encender == 1) {
            document.write(`El carro ${this.marca} ${this.modelo} está encendido.<hr>`)
        } else {
            document.write(`El carro ${this.marca} ${this.modelo} no está encendido. <hr>`)
        }
    }

}

document.write(`<hr>`)

//Creación de objetos
let carro1 = new Carro("Toyota", "Prado", "300hp", "Gris", "Japonés")
let carro2 = new Carro("Ford", "f150", "260hp", "Rojo", "Americano")
let carro3 = new Carro("Lamborghinni", "Huracán", "700hp", "Anaranjado", "Italiano")

carro1.mostrarDetalles()
carro1.encender()
carro2.mostrarDetalles()
carro2.encender()
carro3.mostrarDetalles()
carro3.encender()