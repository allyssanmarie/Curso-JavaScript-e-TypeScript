//Operadores aritméticos 
//() ** * / % + -

const num1 = 5;
const num2 = 10;

console.log(num1 + num2); //soma
console.log(num1 - num2); //subtração
console.log(num2 / num1); //divisão
console.log(num1 * num2); //multiplicação
console.log(num2 ** num1); //potenciação
console.log(num2 % num1); //resto da divisão
console.log((num1 + num1) * num2);

//incremento e decremento
let contador = 1;
contador ++; //ou ++contador;  //melhorar maneira
console.log(contador);

let contagem = 3;
console.log(contagem++); //primeiro mostra o valor e depois incrementa 
console.log(contagem);

let conta = 5;
console.log(++conta); //primeiro incrementa e depois ja mostra o valor atualizado

let decremento = 10;
console.log(--decremento); 

//operadores de atribuição
let cont = 0;
cont += 2; // += seria cont = cont + 2
cont *= 2; 
cont **= 2;
console.log(cont);

//NaN - Not a Number // parseInt(inteiro), parseFloat(decimais) e Number(converte pra numero, decimal ou inteiro)
 const n1 = 10;
 const n2 = Number('5.6');  //convert a string pra number
 console.log(n1 + n2);
 console.log(typeof n2);