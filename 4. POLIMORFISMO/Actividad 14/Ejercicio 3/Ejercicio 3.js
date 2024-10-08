// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase base Animal
class Animal {
  hacerSonido() {
    // Método vacío para ser sobrescrito
  }
}

// Clase Perro
class Perro extends Animal {
  hacerSonido() {
    output.innerHTML += "------------------------------------------------------------------------<br>";
    output.innerHTML += "El perro ladra: <br>";
    return "GUAUUU<br>";
  }
}

// Clase Gato
class Gato extends Animal {
  hacerSonido() {
    output.innerHTML += "------------------------------------------------------------------------<br>";
    output.innerHTML += "El gato maúlla: <br>";
    return "MIAUUU<br>";
  }
}

// Clase Pajaro
class Pajaro extends Animal {
  hacerSonido() {
    output.innerHTML += "------------------------------------------------------------------------<br>";
    output.innerHTML += "El loro canta: <br>";
    return "RRUUUUAAA<br>";
  }
}

// Función para imprimir el sonido del animal
function imprimirSonido(animal) {
  output.innerHTML += animal.hacerSonido();
}

// Instancias de cada clase
const miPerro = new Perro();
const miGato = new Gato();
const miPajaro = new Pajaro();

// Llamadas a la función imprimirSonido
imprimirSonido(miPerro);
imprimirSonido(miGato);
imprimirSonido(miPajaro);
