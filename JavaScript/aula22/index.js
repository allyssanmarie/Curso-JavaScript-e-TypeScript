/*Operadores lógicos
&& AND E = todas expressões verdadeiras pra retornar true
|| OR OU = pelo menos uma expressão precisa ser verdadeira pra retornar true
! NOT NÃO = negação da expressão
*/

console.log('&&', true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log('||', true || false); //true
console.log(false || false); //false
console.log(true || true); //true
console.log('!', !true); //false
console.log(!false); //true

console.log('!!true', !!true); //true //nega uma vez sendo false e depois nega novamente voltando a ser true

const usuario = 'Marie'; //form usuario digitou
const senha = '123456' //form usuario digitou

const vaiLogar = usuario === 'Marie' && senha === '123456';
console.log(vaiLogar);
