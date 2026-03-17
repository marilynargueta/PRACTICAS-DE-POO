abstract class persona {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract Saludar(): void;
}

class formal extends persona {
    Saludar(): void {
        console.log("Mucho gusto, mi nombre es " + this.nombre);
    }
}

class informal extends persona {
    Saludar(): void {
        console.log("Que onda, soy  " + this.nombre);
    }
}

const persona1 = new formal("Gabriela");
const persona2 = new informal("Enmanuel");

persona1.Saludar();
persona2.Saludar();