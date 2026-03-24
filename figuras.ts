const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

class Cuadrado extends Figura {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

class Circulo extends Figura {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

rl.question("¿Qué figura desea (cuadro/circulo)? ", (tipo: string) => {
    rl.question("Ingrese el lado: ", (lado: string) => {
        const valor = parseFloat(lado);
        let figura: Figura;

        if (tipo.toLowerCase() === "cuadro") {
            figura = new Cuadrado(valor);
        } else if (tipo.toLowerCase() === "circulo") {
            figura = new Circulo(valor);
        } else {
            console.log("Opción no válida");
            rl.close();
            return;
        }

        console.log(`Figura: ${figura.constructor.name}`);
        console.log(`Lado: ${valor}`);
        console.log(`Area: ${figura.calcularArea().toFixed(2)}`);
        console.log(`Perimetro: ${figura.calcularPerimetro().toFixed(2)}`);
        rl.close();
    });
});