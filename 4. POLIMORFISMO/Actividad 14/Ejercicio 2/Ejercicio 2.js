// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase base Vehiculo
class Vehiculo {
  mostrarDetalles() {
    // Método vacío para ser sobrescrito
  }
}

// Clase Carro
class Carro extends Vehiculo {
  constructor(marca, modelo, año) {
    super();
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrarDetalles() {
    output.innerHTML += `Automóvil marca: ${this.marca}<br>`;
    output.innerHTML += `Modelo: ${this.modelo}<br>`;
    output.innerHTML += `Del año: ${this.año}<br><br>`;
  }
}

// Clase Moto
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super();
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.cilindrada = cilindrada;
  }

  mostrarDetalles() {
    output.innerHTML += `Motocicleta marca: ${this.marca}<br>`;
    output.innerHTML += `Modelo: ${this.modelo}<br>`;
    output.innerHTML += `Año: ${this.año}<br>`;
    output.innerHTML += `Cilindrada: ${this.cilindrada} cc<br><br>`;
  }
}

// Clase Bicicleta
class Bicicleta extends Vehiculo {
  constructor(marca, material, tipo) {
    super();
    this.marca = marca;
    this.material = material;
    this.tipo = tipo;
  }

  mostrarDetalles() {
    output.innerHTML += `Bicicleta marca: ${this.marca}<br>`;
    output.innerHTML += `Material: ${this.material}<br>`;
    output.innerHTML += `Tipo: ${this.tipo}<br><br>`;
  }
}

// Función para mostrar los detalles del vehículo
function mostrarDescripcion(vehiculo) {
  vehiculo.mostrarDetalles();
}

// Instancias de cada clase
const carro = new Carro("Ford", "Mustang", "2015");
const moto = new Moto("Ducati", "Panigale", "2020", "1299");
const bicicleta = new Bicicleta("Shimano", "aluminio", "Carreras");

// Llamada al método mostrarDetalles() usando polimorfismo
mostrarDescripcion(carro);
mostrarDescripcion(moto);
mostrarDescripcion(bicicleta);
