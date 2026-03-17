abstract class Heroe {
    abstract usarPoder(): void;
}

class Volador extends Heroe {
    usarPoder(): void {
        console.log("Estoy volando por los cielos");
    }
}

class Fuerte extends Heroe {
    usarPoder(): void {
        console.log("Estoy levantando un camión");

    }
}

const Heore1 = new Volador();
const Heroe2 = new Fuerte();

Heore1.usarPoder();
Heroe2.usarPoder();