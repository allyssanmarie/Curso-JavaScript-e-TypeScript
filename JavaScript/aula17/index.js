//função = function

             //parâmetro//
/*function saudacao(nome){
    console.log(`Bom dia ${nome}!`)
    //return 123456; //na variável vai retornar este valor
} 

saudacao('Allyssan');
saudacao('Brenda');
saudacao('Leonardo');*/

//const variavel = saudacao('Luiz'); //salvando em uma variável
//console.log(variavel); //retorna undefined pq no momento a função não retorna valor

function saudacao(nome){
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Allyssan');
console.log(variavel);

    //caso ñ passe nenhum parâmetro assume esses valores//
function soma(x=1, y=1){
    const resultado = x + y;
    return resultado;
}

//console.log(resultado); //ñ é possível acessar pq tudo dentro do corpo da função está protegido
console.log(soma(5,6));
console.log(soma(10,20));
console.log(soma());
console.log(soma(6));

const resultado = soma(54, 78); 
console.log(resultado); 

//função anônima
const raiz = function(n) {
    return n ** 0.5;
}; //neste caso precisa do ; no final da chave

console.log(raiz(9)); //verificando a raiz quadrada
console.log(raiz(16));
console.log(raiz(25));

//arrow function =>  //retira a palavra function e utiliza => tbm é possível simplificar a função pra usar menos linha
const multi = (a, b) => a * b;    

console.log(multi(7,7));