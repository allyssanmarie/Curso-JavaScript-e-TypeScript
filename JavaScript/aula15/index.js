//Objeto Math

let num1 = 9.54578;
//let num2 = Math.floor(num1); //arredonda para baixo o num1 = 9
//let num2 = Math.ceil(num1); //arredonda pra cima = 10
let num2 = Math.round(num1); //arredonda pro mais próximo, neste caso está mais perto do 10

console.log(num2);

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 8, 7, 6)); //maior numero da sequência
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 8, 7, 6)); //menor numero da sequência

console.log(Math.random()); //gera um numero aleatório entre 0 e 1

const aleatório = Math.random() * (10 - 5) + 5; //numero aleatório fica entre 10 e 5
console.log(aleatório);

//const aleatório = Math.round(Math.random() * (10 - 5) + 5); //numero aleatório será arredondado
//console.log(aleatório);

console.log(Math.PI);

console.log(Math.pow(5, 2)); //exponenciação numero e a qual numero sera elevado
//console.log(5 ** 2); //também exponenciação

console.log(num1 ** 0.5); //raiz quadrada

console.log(100 / 0); //não gera um erro e também da true = infinity



