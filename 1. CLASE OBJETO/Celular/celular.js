//Defino la clase
class Celular{
    //Método constructor
    constructor(marca, modelo, almacenamiento, ram, camara){
        //Propiedades para la instancia
        this.marca = marca
        this.modelo = modelo
        this.almacenamiento = almacenamiento
        this.ram = ram
        this.camara = camara
    }

    //Método para mostrar detalles del objeto
    mostrarDetalles(){
        document.write(`<h3>Dispositivo móvil</h3>`)
        document.write(`Marca: ${this.marca}<br>`)
        document.write(`Modelo: ${this.modelo}<br>`)
        document.write(`Almacenamiento: ${this.almacenamiento}<br>`)
        document.write(`Memoria RAM: ${this.ram}<br>`)
        document.write(`Cámara: ${this.camara}<br>`)
        document.write(`<hr>`)
    }

    // Método para encender el celular
    encender() {
        // Atributo privado solo para el método encender
        let energia = parseInt(prompt("Digíte el valor de la carga: "));
        // Evaluamos si tiene carga el celular
        if (energia > 0) {
            document.write(`El celular: ${this.modelo} se puede encender.<br>`)
            document.write(`----- ${energia}% de carga. <br>`)
            document.write(`<hr>`)
        } else {
            document.write(`El celular ${this.modelo} no se puede encender. <br>`)
            document.write(`----- ${energia}% de carga. <br>`)
            document.write(`<hr>`)
        }
    }

}

document.write(`<hr>`)

//Creación de objetos
let celular1 = new Celular("Apple", "iPhone 8 Plus", "64gb", "4gb", "12mp")

let celular2 = new Celular("Xiaomi", "Redmi Note 8 Pro", "128gb", "6gb", "108mp")

let celular3 = new Celular("Samsung", "A21", "256gb", "8gb", "200mp")

celular1.mostrarDetalles()
celular1.encender()
celular2.mostrarDetalles()
celular2.encender()
celular3.mostrarDetalles()
celular3.encender()