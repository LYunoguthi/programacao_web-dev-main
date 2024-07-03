class carro{
    private ano: number;
    private marca: string;
    private modelo: string;
    private cor: string;

    constructor(ano:number, marca:string, modelo:string, cor:string){
        this.ano=ano;
        this.marca=marca;
        this.modelo=modelo;
        this.cor=cor;
    }

    get getAno():number{
        return this.ano;
        
    }

    get getMarca():string{
        return this.marca;
        
    }

    get getModelo():string{
        return this.modelo;
        
    }

    get getCor():string{
        return this.cor;
        
    }

    get getIdade(): number{
        let date = new Date().getFullYear();
        return date - this.ano;
    }
}

const meuCarro = new carro(1950,"VW" ,"Fusca" ,"VerdeNeon");

//console.log (meuCarro);
console.log (meuCarro.getIdade);

//aeaeae eh eh eh ohohohohohohoh