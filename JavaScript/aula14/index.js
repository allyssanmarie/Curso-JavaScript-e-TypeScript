//numbers
//let num1 = 10;
//let num2 = 0.7;


//console.log(num1.toString() + num2);
//num1 = num1.toString(); 
//console.log(typeof num1);

//console.log(num1.toString(2)); //varíavel num1 convertida pra base 2 (binário)

//console.log(num1.toFixed(2)); //arruma as casas decimais, '2' pra ter somente duas após vírgula.

//console.log(Number.isInteger(num1)); //verifica se a variável é numero inteiro

//let temporaria = num1 * 'Ola'; 
//console.log(temporaria); //resultado NaN = not a number
//console.log(Number.isNaN(temporaria)); //verifica se a variável é NaN


//MODOS DE ARRUMAR IMPRECISÃO//
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; 
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2)); 
console.log(num1);
console.log(Number.isInteger(num1));

//OU//

//num1 = ((num1 * 100) + (num2 * 100)) / 100; 
//num1 = ((num1 * 100) + (num2 * 100)) / 100; 
//num1 = ((num1 * 100) + (num2 * 100)) / 100; 

//num1 = Number(num1.toFixed(2)); 
//console.log(num1);
//console.log(Number.isInteger(num1));

