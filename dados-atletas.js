class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this.notasValidas = [];
        this.media = 0;

    }
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <=11){
            return "Infantil"
        }else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        }else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }else{return "Sem categoria"}
    }
    
    calculaIMC(){
        return this.peso/(this.altura*this.altura)
    }

    calculaMediaValida(){
        this.notasValidas = this.notas.sort((a,b) => a - b).slice(1, 4)
        return this.media = this.notasValidas.reduce(function(total, current) { 
            return total + current},0)/this.notasValidas.length
    }

    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
        
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`

    }
    obtemAlturaAtleta(){
        return `Altura: ${this.altura}`
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }
    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria()}`

    }
    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`
    } 
    obtemMediaValida(){
        return `Média Valida: ${this.calculaMediaValida()}`
    }
};

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);



console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta()); 
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());