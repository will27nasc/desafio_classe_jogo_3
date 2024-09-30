import Heroi from './Heroi';

class Main {
    public static main(): any 
    {
        const Mago = new Heroi("Mago Negro", 100, "MAGO");
        Mago.msg();

        const Guerreiro = new Heroi("Conan", 45, "Guerreiro");
        Guerreiro.msg();

        const Monge = new Heroi("Jin", 62, "monge");
        Monge.msg();

        const Ninja = new Heroi("Shupuken", 30, "ninJA");
        Ninja.msg();
    }
}

Main.main();