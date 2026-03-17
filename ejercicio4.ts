abstract class electrodomestico  {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    abstract funcionar(): void;
}

class Licuadora extends electrodomestico {
    funcionar(): void {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`);
}
}

class Microondas extends electrodomestico {
    funcionar(): void {
        console.log(`El microondas ${this.marca} esta calentando comida`);
    }
}

const licuadora = new Licuadora("Oster");
const microondas = new Microondas("LG");

licuadora.funcionar();
microondas.funcionar();