"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heroi = /** @class */ (function () {
    function Heroi(nome, idade, tipo) {
        this.nome = "";
        this.idade = 0;
        this.tipo = "";
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    Heroi.prototype.definiAtaque = function (tipo) {
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
    };
    Heroi.prototype.atacar = function () {
        var ataque = this.definiAtaque(this.tipo.toLowerCase());
        return "O ".concat(this.tipo.toLowerCase(), " atacou usando ").concat(ataque);
    };
    Heroi.prototype.msg = function () {
        console.log(this.atacar());
    };
    return Heroi;
}());
exports.default = Heroi;
