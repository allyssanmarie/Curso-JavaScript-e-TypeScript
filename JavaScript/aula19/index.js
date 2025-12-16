/*
Primitivos (imutáveis) - string, number, boolen, undefined, 
null (bigint, symbol) = valores primitivos são copiados se atribuir pra uma outra variável
*/

let a = 'A';
let b = a; //cópia
console.log(a, b);

a = 'D';
console.log(a, b); //o valor de b segue sendo A
b = 'teste';
console.log(a,b); //a ainda será D e b será teste

/* valores por referência (mutável) - array, object, function
valores apontam pro mesmo local na memória
*/ 

let c = [1,2,3];
//pra copiar seria let d = [...c];
let d = c;  //neste caso tanto c quanto d apontam pro mesmo valor na memória
console.log(c, d);

c.push(4);
console.log(c, d);  //d também será afetado

d.pop();
console.log(c, d); //c tbm será afetado pq aponta pro mesmo local

const x = {
    nome: 'Allyssan',
    sobrenome: 'Castro'
};

const y = {...x}; //spread = permite copiar os valores 
console.log(x, y);

x.nome = 'João';
console.log(x, y); //x = { nome: 'João', sobrenome: 'Castro' } e y ={ nome: 'Allyssan', sobrenome: 'Castro' }
