class Heroi {
    private nome: String = "";
    private idade: Number = 0;
    private tipo: String = "";

    constructor(nome: String, idade: Number, tipo: String) 
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    private definiAtaque(tipo: String): String | null 
    {
        switch (tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return null;
        }
    }

    private atacar(): String 
    {
        let ataque: String | null = this.definiAtaque(this.tipo.toLowerCase());
        return `O ${this.tipo.toLowerCase()} atacou usando ${ataque}`;
    }

    public msg(): void 
    {
        console.log(this.atacar());
    }
}

export default Heroi;