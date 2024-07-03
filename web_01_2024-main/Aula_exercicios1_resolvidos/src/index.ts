function maiorNum(...val: number[]){
    return Math.max.apply(null, val);
}

//console.log(maiorNum(1,2,3,4,5,5,6,7,8,9))

function ePar(val:number){
    if(val%2 == 1){
        console.log("O numero " + val + " é impar");
        return false;
    }else{
        console.log("O numero " + val + " é par");
        return true;
    }
}

//ePar(32);

function calcMedia(val: number[]){
    let soma = 0;

    for(let i = 0; val[i] != null; i++){
        soma += val[i];
    }
    return soma/val.length;
}

//console.log(calcMedia([2,2]))

function caixaAlta(frase: string){
    let fraseUp = frase.toUpperCase();
    return fraseUp;
}

//console.log(caixaAlta("frase"))

function eprimo(n:number):boolean{
    let contador :number = 0;
    if(n>1){
        for(let i =1; i<=n;i++){
            if(n%i == 0){
                contador++;
            }
        }
        if(contador>2){
            return false;
        }
    }
    return true;
}

//console.log(eprimo(3));

function ePrimo(num: number){
    for(let i = 2; i<num/2; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

function inverte(vetor: number[]){
    return vetor.reverse()
}

//console.log(inverte([1,2,3,4,5,6]))


function porcentagem(valor: number, porc: number){
    return (valor+(valor*(porc/100)))
}

//console.log(porcentagem(100,50))

function reverteString(texto:string); string{
    let separa:string[] = texto.split("");
    let junta:string = separa.reverse().join("");
    return junta;
}

//console.log(reverteString('leandro'));

function somaPar(val: number[]){
    let tam = val.length
    let soma = 0
    for(let i = 0; i<=tam; i++){
        if(val[i]%2 == 0){
            soma += val[i]
        }
    }
    return soma;
}

//console.log(somaPar([1,2,3,4]))

function fatorial(n:number):number{
    let fatorial:number = 1;
    for(let i=0; i<n;i++){
        fatorial *=(n-1);
    }
    return fatorial;
}

//console.log (fatorial(5));
