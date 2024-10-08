//Defino la clase 
class Empleado{
    //Método co5nstructor
    constructor(nombre, edad, cargo, experiencia, genero){
        //Propiedades para la instancia
        this.nombre = nombre
        this.edad = edad
        this.cargo = cargo
        this.experiencia = experiencia
        this.genero = genero
    }

    //Método para mostrar detalles del objeto
    mostrarDetalles(){
        document.write(`<h3>Empleado</h3>`)
        document.write(`Nombre: ${this.nombre}<br>`)
        document.write(`Edad: ${this.edad}<br>`)
        document.write(`Cargo: ${this.cargo}<br>`)
        document.write(`Experiencia: ${this.experiencia}<br>`)
        document.write(`Género: ${this.genero}<br>`)
        document.write(`<hr>`)
    }

    // Método para hacer que el empleado comience a laborar
    laborar() {
        // Atributo privado solo para el método encender
        let laborar = prompt("Quiere que el empleado trabaje? \n1. Sí \n2. No \nSeleccione una opción. ");
        // Evaluamos la decisión
        if (laborar == 1) {
            document.write(`El empleado ${this.nombre} está laborando.<hr>`)
        } else {
            document.write(`El empleado ${this.nombre} no está laborando. <hr>`)
        }
    }

}

document.write(`<hr>`)

//Creación de objetos
let empleado1 = new Empleado("Luis Galán", "30 años", "Obrero", "5 años", "Masculino")
let empleado2 = new Empleado("Andrea Pérez", "25 años", "Secretaria", "2 años", "Femenino")
let empleado3 = new Empleado("Jose Campo", "50 años", "Director", "10 años", "Masculino")

empleado1.mostrarDetalles()
empleado1.laborar()
empleado2.mostrarDetalles()
empleado2.laborar()
empleado3.mostrarDetalles()
empleado3.laborar()