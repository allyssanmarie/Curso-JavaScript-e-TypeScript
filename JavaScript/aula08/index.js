/* Luiz Otavio Mirando tem 30 anos, pesa 84kg tem 
1.8 de altura e seu IMC é de 25.925
Luiz Otavio nasceu em *ano de nascimento*
*/

const nome = "Allyssan Marie";
const idade = 31;
const peso = 55;
const alturaMetros = 1.69;

let imc = peso / (alturaMetros * alturaMetros);
let anoNascimento = 2025 - idade

console.log(nome, "tem", idade, "anos, pesa", peso, "kg tem", alturaMetros, "de altura e seu IMC é de", imc)
console.log(`${nome} nasceu em ${anoNascimento}`)  //template strings