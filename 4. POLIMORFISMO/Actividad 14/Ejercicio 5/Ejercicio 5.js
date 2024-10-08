// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Medico
class Medico {
  constructor(nombre, especialidad, experiencia) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.experiencia = experiencia;
  }

  trabajar() {
    output.innerHTML += "-----------------------------------------------<br>";
    output.innerHTML += `Nombre del médico: ${this.nombre}<br>`;
    output.innerHTML += `Especialidad: ${this.especialidad}<br>`;
    output.innerHTML += `Experiencia: ${this.experiencia} años<br>`;
    output.innerHTML += "-----------------------------------------------<br><br>";
  }
}

// Clase Ingeniero
class Ingeniero {
  constructor(nombre, especialidad, experiencia) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.experiencia = experiencia;
  }

  trabajar() {
    output.innerHTML += "-----------------------------------------------<br>";
    output.innerHTML += `Nombre del ingeniero: ${this.nombre}<br>`;
    output.innerHTML += `Especialidad: ${this.especialidad}<br>`;
    output.innerHTML += `Experiencia: ${this.experiencia} años<br>`;
    output.innerHTML += "-----------------------------------------------<br><br>";
  }
}

// Clase Docente
class Docente {
  constructor(nombre, area, experiencia) {
    this.nombre = nombre;
    this.area = area;
    this.experiencia = experiencia;
  }

  trabajar() {
    output.innerHTML += "-----------------------------------------------<br>";
    output.innerHTML += `Nombre del docente: ${this.nombre}<br>`;
    output.innerHTML += `Área: ${this.area}<br>`;
    output.innerHTML += `Experiencia: ${this.experiencia} años<br>`;
    output.innerHTML += "-----------------------------------------------<br><br>";
  }
}

// Función para ejecutar el método trabajar
function trabajarProfesion(profesiones) {
  profesiones.trabajar();
}

// Instancias de cada clase
const medico = new Medico("Juan Aragon", "Neurólogo", 19);
const ingeniero = new Ingeniero("David Visbal", "Ingeniero de sistemas", 8);
const docente = new Docente("Carlos Salcedo", "Química", 35);

// Llamada al método trabajar()
trabajarProfesion(medico);
trabajarProfesion(ingeniero);
trabajarProfesion(docente);
