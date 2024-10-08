//Defino la clase 
class Animal{
    //Método constructor
    constructor(nombre, especie, dieta, habitad, caracter){
        //Propiedades para la instancia
        this.nombre = nombre
        this.especie = especie
        this.dieta = dieta
        this.habitad = habitad
        this.caracter = caracter
    }

    //Método para mostrar detalles del objeto
    mostrarDetalles(){
        document.write(`<h3>Animal</h3>`)
        document.write(`Nombre: ${this.nombre}<br>`)
        document.write(`Especie: ${this.especie}<br>`)
        document.write(`Dieta: ${this.dieta}<br>`)
        document.write(`Habitad: ${this.habitad}<br>`)
        document.write(`Carácter: ${this.caracter}<br>`)
        document.write(`<hr>`)
    }

    // Método para hacer que el animal haga un sonido
    sonar() {
        // Atributo privado solo para el método sonar
        let sonar = prompt("Quiere que el animal reproduzca un sonido? \n1. Sí \n2. No \nSeleccione una opción. ");
        // Evaluamos la decisión
        if (sonar == 1) {
            document.write(`El animal ${this.nombre} está reproduciendo un sonido.<hr>`)
        } else {
            document.write(`El animal ${this.nombre} no está reproduciendo ningún sonido. <hr>`)
        }
    }

}

document.write(`<hr>`)

//Creación de objetos
let animal1 = new Animal("León", "Felino", "Carnívoro", "Sabana", "Salvaje")
let animal2 = new Animal("Ballena", "Cetáceos", "Herbívoro", "Acuático", "Salvaje")
let animal3 = new Animal("Pájaro", "Aves", "Herbívoro", "Aéreo", "Salvaje")

animal1.mostrarDetalles()
animal1.sonar()
animal2.mostrarDetalles()
animal2.sonar()
animal3.mostrarDetalles()
animal3.sonar()