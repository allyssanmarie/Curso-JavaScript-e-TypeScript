//CONSTANTES COM CONST

/*Não pode modificar o valor de uma constante.
Ex:
const nome = "Marie";
nome = "Caroline";
*/

const nome = "João";  //com constante precisa ser declarado e inicializado ao mesmo tempo.
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

console.log(typeof(primeiroNumero)); //informa o tipo da variável
console.log(typeof resultado); //funciona mesmo sem o parentese
console.log(typeof nome);
console.log(typeof (primeiroNumero + segundoNumero));