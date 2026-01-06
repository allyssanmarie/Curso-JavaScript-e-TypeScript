/*Operadores de Comparação 
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) //nao indicado
=== igualdade estrita (valor e tipo)
!= diferente (valor) //nao indicado
!== diferente estrito (valor e tipo)
*/
const comp = 10 > 5;
console.log('>', comp);

console.log('>=', 20 >= 20);

console.log('<', 9 < 15);

console.log('<=', 7 <= 6);

const num1 = '10'; //string
const num2 = 10; //number
console.log('==', num1 == num2); //não indicado pois retorna true

const num3 = '20'; //string
const num4 = 20; //number
console.log('===', num1 === num2); 

console.log('!=', 60 != '60'); //false

console.log('!==', 60 !== '60'); //true