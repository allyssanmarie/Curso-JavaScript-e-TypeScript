//Avaliação de curto-circuito(short-circuit)
/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
FALSY = valores que avaliam em false
0, '', "", ``, null, undefined, NaN
FALSE = valor literal false
*/

//retorna o 0 pois a partir do momento que o JavaScript 
//encontra uma expressão que julga falsa ele retorna o valor falso, 
//caso não encontre nenhuma, retorna o último valor verdadeiro
console.log('Luiz Otávio' && 0 && 'Maria'); // 0 - false
console.log('Luiz Otávio' && true && 'Maria'); //Maria - ultimo true
console.log('Luiz Otávio' && true && NaN && 'Maria'); //NaN - false


function falaOi () {
    return 'Oi';
}

let vaiExecutar;
const Executar = 'Teste'; 
console.log(vaiExecutar && falaOi()); //undefined
console.log(Executar && falaOi()); //Oi
console.log(falaOi() && Executar); //Teste

//retorna o primeiro valor verdadeiro encontrado
console.log(0 || false || null || 'Allyssan Marie' || true); //Allyssan Marie

//const corUsuario = null;
//const corPadrao = corUsuario || 'black';
//console.log(corPadrao); //black

const corUsuario = 'red';
const corPadrao = corUsuario || 'black';
console.log(corPadrao); //red

const a = 0;
const b = null;
const c = false;
const d = NaN;

//como nao tem valor verdadeiro mostra o ultimo valor falso
console.log(a || b || c || d); //NaN
console.log(a || b || 'test' || c || d); //test = valor verdadeiro