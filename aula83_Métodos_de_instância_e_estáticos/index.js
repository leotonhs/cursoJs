class ConstroleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estátivo
    static soma(x, y) {
        console.log(this);
        return x + y;
    }
}

const controle1 = new ConstroleRemoto('LG');
const soma = ConstroleRemoto.soma(2, 3);
console.log(soma);