"use strict";
class carro {
    constructor(ano, marca, modelo, cor) {
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
    get getAno() {
        return this.ano;
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getCor() {
        return this.cor;
    }
    get getIdade() {
        let date = new Date().getFullYear();
        return date - this.ano;
    }
}
const meuCarro = new carro(1950, "VW", "Fusca", "VerdeNeon");
//console.log (meuCarro);
console.log(meuCarro.getIdade);
