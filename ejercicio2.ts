abstract class MaquinaBebida {
    abstract servir(): void;
}

class cafetera extends MaquinaBebida {
    servir(): void {
        console.log("Sirviendo un café caliente");
    }
}

class TorreBebidas extends MaquinaBebida {
    servir(): void {
        console.log("Sirviendo una soda con hielo");

    }
}

const cafetera1 = new cafetera();
const soda = new TorreBebidas();

cafetera1.servir();
soda.servir();