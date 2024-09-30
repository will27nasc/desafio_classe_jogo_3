"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heroi_1 = require("./Heroi");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var Mago = new Heroi_1.default("Mago Negro", 100, "MAGO");
        Mago.msg();
        var Guerreiro = new Heroi_1.default("Conan", 45, "Guerreiro");
        Guerreiro.msg();
        var Monge = new Heroi_1.default("Jin", 62, "monge");
        Monge.msg();
        var Ninja = new Heroi_1.default("Shupuken", 30, "ninJA");
        Ninja.msg();
    };
    return Main;
}());
Main.main();
