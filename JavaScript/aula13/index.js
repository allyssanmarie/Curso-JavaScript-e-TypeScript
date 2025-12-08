//Strings
let  umaString = "Um \"texto\"";  //outra forma de conseguir usar aspas dentro da string
console.log(umaString);

let outraString = "Outro \\texto"; //pra aparecer a barra invertida
console.log(outraString);

//índice            
let stringIndice = "Um texto";
console.log(stringIndice[4]);  //elemento no índice 4

console.log(stringIndice[-1]); //undefined

//função charAt
console.log(stringIndice.charAt(8));  //não devolve undefined caso coloque um indice que nao tenha/ fica vazio

//função concat
console.log(stringIndice.concat(' em um lindo dia'));  //concatena com a variável

console.log(`${stringIndice} em um lindo dia`); //template string

//função indexOf
console.log(stringIndice.indexOf("texto")); // em qual índice inicia a palavra 'texto'
console.log(stringIndice.indexOf('o', 3)); //busca o 'o' a partir do índice 3

//função lastIndexOf
console.log(stringIndice.lastIndexOf('e')); //a diferença é que começa a procurar de trás pra frente

console.log(stringIndice.match(/[a-z]/g)); //expressão regular / retorna todas as letras minúsculas do texto /encontra uma array por conta da flag 'g'
console.log(stringIndice.match(/[a-z]/));

console.log(stringIndice.search(/x/)); //retorna o índice encontrado do que foi pedido, neste caso 'x'

console.log(stringIndice.replace('Um', 'Outra')); //substitui a palavra Um para Outra
console.log(stringIndice.replace(/Um/, 'Outra')); //utilizando expressão regular

let testeString = "O rato roeu a roupa do rei de roma";
console.log(testeString.replace(/r/, '#')); //substitui só o primeiro 'r'
console.log(testeString.replace(/r/g, '#')); //com a flag 'g' substitui todos os 'r'

//propriedade length
console.log(testeString.length) //tamanho da string /quantidade de caracteres

//função slice
console.log(testeString.slice(2, 6)); //pega a faixa de valores determinada pelo índice, vai começar no 2 e terminar no 5 neste caso
console.log(testeString.slice(-4)); //ao contrário /seria o tamanho de toda a string menos o valor desejado
console.log(testeString.slice(-4, -1)); 

//função substring
console.log(testeString.substring(testeString.length - 4)); //mesmo resultado do slice
console.log(testeString.substring(testeString.length - 4, testeString.length - 1));

//função split
console.log(testeString.split(' ')); //divide pelo espaço neste caso dentro de um array
console.log(testeString.split('r')); //divide na letra 'r' e não inclui o mesmo.
console.log(testeString.split(' ', 3)); //retorna somente 3 resultados, do indice 0 ao 2

//função toUpperCase
console.log(testeString.toUpperCase()); //tudo em letra maiúscula

//função toLowerCase
console.log(testeString.toLowerCase()); //tudo em letra minúscula


//documentação https://developer.mozilla.org/pt-BR/docs/Web/JavaScript