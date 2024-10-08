//Defino la clase 
class Figura{
    //Método co5nstructor
    constructor(nombre, lados, alto, ancho, color){
        //Propiedades para la instancia
        this.nombre = nombre
        this.lados = lados
        this.alto = alto
        this.ancho = ancho
        this.color = color
    }

    //Método para mostrar detalles del objeto
    mostrarDetalles(){
        document.write(`<h3>Figura</h3>`)
        document.write(`Nombre: ${this.nombre}<br>`)
        document.write(`Lados: ${this.lados}<br>`)
        document.write(`Alto: ${this.alto}<br>`)
        document.write(`Ancho: ${this.ancho}<br>`)
        document.write(`Color: ${this.color}<br>`)
        document.write(`<hr>`)
    }

    // Método para calcular el área de la figura
    calcular_area() {
        // Atributo privado solo para el método encender
        let calcular_area = prompt("Quiere calcular el área de la figura? \n1. Sí \n2. No \nSeleccione una opción. ");
        // Evaluamos la decisión
        if (calcular_area == 1) {

            let base = 10
            let altura = 10

            let area = (base * altura) / 2
            document.write(`el area de la figura geométrica es: ${area}<hr>`)
        } else {
            document.write(`No se calculará ningún área.<hr>`)
        }
    }

}

document.write(`<hr>`)

//Creación de objetos
let figura1 = new Figura("Triangulo", "3", "10 cm", "10 cm", "Azul")
let figura2 = new Figura("Círculo", "0", "5 cm", "5 cm", "Rojo")
let figura3 = new Figura("Cuadrado", "4", "7 cm", "7 cm", "Verde")

figura1.mostrarDetalles()
figura1.calcular_area()
figura2.mostrarDetalles()
figura3.mostrarDetalles()