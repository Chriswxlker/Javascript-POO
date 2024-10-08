// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Guitarra
class Guitarra {
  constructor(cuerdas, tipo, marca) {
    this.cuerdas = cuerdas;
    this.tipo = tipo;
    this.marca = marca;
  }

  tocar() {
    output.innerHTML += `Esta es una guitarra de ${this.cuerdas} cuerdas, del tipo ${this.tipo}.<br>`;
    output.innerHTML += `Marca: ${this.marca}. Es un instrumento de cuerda frotada o pulsada.<br><br>`;
  }
}

// Clase Piano
class Piano {
  constructor(teclas, tipo, marca) {
    this.teclas = teclas;
    this.tipo = tipo;
    this.marca = marca;
  }

  tocar() {
    output.innerHTML += `Este es un piano con ${this.teclas} teclas, del tipo ${this.tipo}.<br>`;
    output.innerHTML += `Marca: ${this.marca}. Es un instrumento de cuerda percutida.<br><br>`;
  }
}

// Clase Trompeta
class Trompeta {
  constructor(material, tipo, marca) {
    this.material = material;
    this.tipo = tipo;
    this.marca = marca;
  }

  tocar() {
    output.innerHTML += `Esta es una trompeta de ${this.material}, del tipo ${this.tipo}.<br>`;
    output.innerHTML += `Marca: ${this.marca}. Es un instrumento de viento metal.<br><br>`;
  }
}

// Función para tocar el instrumento
function tocarInstrumento(instrumento) {
  instrumento.tocar();
}

// Instancias de cada clase
const guitarra = new Guitarra(6, "Eléctrica", "Fender");
const piano = new Piano(88, "Acústico", "Yamaha");
const trompeta = new Trompeta("latón", "Bb", "Bach");

// Llamadas al método tocar()
tocarInstrumento(guitarra);
tocarInstrumento(piano);
tocarInstrumento(trompeta);
