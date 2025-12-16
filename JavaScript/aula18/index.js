//POO objetos - basico {}

const array = [1,2,3];

array.push(4); //acrescenta no final o 4
console.log(array);

array[0] = 'Luiz'; //altera indice 0 para Luiz
//array = 'Outra'  //Ñ é possível atribuir pois se trata de um const
console.log(array);

const pessoa01 = {
    nome: 'Allyssan',
    sobrenome: 'Castro',
    idade: 31,

    fala() {  //método
        console.log(`Me chamo: ${this.nome} ${this.sobrenome} e a minha idade atual é: ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala(); //incrementou mais um na idade

const pessoa02 = {
    nome: 'Brenda',
    sobrenome: 'Geraldo',
    idade: 28
};

console.log(pessoa02.nome);
console.log(pessoa02.sobrenome);
console.log(pessoa02.idade);

/*function criaPessoa (nome, sobrenome, idade){ //parâmtero
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}*/

 //mais simples
function criaPessoa (nome, sobrenome, idade){ //parâmetro
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Allyssan', 'Castro', 31); //argumento = valor passado pro parâmetro
const pessoa2 = criaPessoa('Leonardo', 'Estevo', 31);
const pessoa3 = criaPessoa('Diavany', 'Gladys', 49);
const pessoa4 = criaPessoa('Sergio', 'Castro', 60);
const pessoa5 = criaPessoa('Rebeca', 'Silva', 27);

console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);

