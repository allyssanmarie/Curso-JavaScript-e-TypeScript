//if, else if e else
/*
entre 0 - 11 =  Bom dia
12 - 17 = Boa tarde
18 - 23 = Boa noite
*/

//if pode ser usado sozinho

const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}
else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}
else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
}
else {
    console.log('Olá')
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
}
else {
    console.log('Não vou sair de casa');
}