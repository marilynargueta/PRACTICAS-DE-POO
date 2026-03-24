const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Transporte {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcularCosto(distancia: number): number;

    mostrarDetalle(distancia: number): void {
        const total = this.calcularCosto(distancia);
        console.log(`Transporte: ${this.nombre}`);
        console.log(`Distancia: ${distancia} km`);
        console.log(`Total a pagar: $${total.toFixed(2)}`);
    }
}

class Taxi extends Transporte {
    constructor() {
        super("Taxi");
    }

    calcularCosto(distancia: number): number {
        return distancia * 0.50;
    }
}

class Uber extends Transporte {
    constructor() {
        super("Uber");
    }

    calcularCosto(distancia: number): number {
        return distancia * 0.75;
    }
}

rl.question("¿Qué transporte desea (taxi/uber)? ", (tipo: string) => {
    rl.question("Ingrese la distancia en km: ", (dist: string) => {
        const distancia = parseFloat(dist);
        let transporte: Transporte;

        if (tipo.toLowerCase() === "taxi") {
            transporte = new Taxi();
        } else if (tipo.toLowerCase() === "uber") {
            transporte = new Uber();
        } else {
            console.log("Opción no válida");
            rl.close();
            return;
        }

        transporte.mostrarDetalle(distancia);
        rl.close();
    });
});