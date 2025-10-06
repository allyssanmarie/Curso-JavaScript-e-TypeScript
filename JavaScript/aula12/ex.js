let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

//ou [varA, varB, varC] = [varB, varC, varA] //melhor jeito

console.log(varA, varB, varC);