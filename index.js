const Coche = {
    marca: "",
    modelo: "",
    matricula: "",
    acelerar: function() {
        console.log("a todo gas");
    },
    frenar: function() {
        console.log("cuidado con la abuelita en el paso de cebra")
    },
}

class Turismo {
    constructor(marca, modelo, matricula) {
        this.marca = marca;
        this.modelo = modelo;
        this.matricula = matricula;
    }
    acelerar() {
        Coche.acelerar();
    }

    frenar() {
        Coche.frenar();
    }
}

const miTurismo = new Turismo("Asiento", "Leon", "1234AAA");

const miSegundoTurismo = new Turismo("Vuelve", "XC90", "1540GAB");

class Persona {
    constructor(nombre, apellidos, edad, gustosMusicales) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.gustosMusicales = gustosMusicales;
    }
    envejecer() {
        this.edad = this.edad + 1;
    }
    nuevoGusto(string) {
        this.gustosMusicales.push(string);
    }
}

const rockero = new Persona("Freddie", "Mercury", 45, ["Queen", "AC/DC"]);
console.log(rockero);

function aplicar__nuevoGusto() {
    rockero.nuevoGusto("My Chemical Romance");
    console.log(rockero);
}

//He terminado hasta la 7

const Perro = [
    "nombre",
    "raza",
    function popo() {
        return ("Ha hecho " + Math.random() * 3 + " caquitas")
    }
]