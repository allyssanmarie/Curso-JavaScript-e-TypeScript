//Arrays = lista de coisas []

//índice          0        1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

//quando usamos const com valores mutáveis (como arrays e objetos), 
//a variável continua sendo constante, 
//porém os valores dentro do objeto poderão ser alterados.

//exibe por índice
console.log(alunos[1]); 

//altera pelo índice
alunos[0] = 'Eduardo'; 
//console.log(alunos);

//adiciona no índice informado
alunos[3] = 'Luiza'; 

//pra saber o tamanho do array
console.log(alunos.length); 

//adicionando no final
alunos[alunos.length] = 'Luiza'; 
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';
//console.log(alunos);
//console.log(alunos.length);

//adiciona no final do array
alunos.push('Otávio'); 
//console.log(alunos);

//adiciona no início do array
alunos.unshift('Isabela'); 
//console.log(alunos);

//remove o último elemento
alunos.pop();  
//possível salvar o elemento removido em uma variável
const removidoFim = alunos.pop() 
console.log(removido);
console.log(alunos);

//remove o primeiro elemento
alunos.shift();  
//tbm possível salvar o elemento removido em uma variável
const removidoInicio = alunos.shift() 
console.log(removidoInicio);
console.log(alunos);

//deleta pelo índice
delete alunos[1];  //não altera o índice, neste caso o restante segue sendo 0, undefined, 2
console.log(alunos[1]); //se quiser acessar encontra como undefined*/

//quando tenta acessar algo que não existe = undefined
console.log(alunos[50]); 

alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos);
console.log(alunos.slice(0, 3)); //vai incluir até o índice 2, nao colocando o índice 3
console.log(alunos.slice(0, -1)); //vai retirar um, neste caso para no índice 3 pois tem 4 no total
console.log(alunos.slice(2, 5)); //começando agr pelo índice 2 e para no 4.*/

//array retorna como object
console.log(typeof alunos); 

//perguntando se é uma instância de array
console.log(alunos instanceof Array); //devolve um booleano true or false




