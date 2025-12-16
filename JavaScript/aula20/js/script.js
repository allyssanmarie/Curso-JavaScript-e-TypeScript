function meuEscopo () {
    const form = document.querySelector('.form'); //document pq está dentro do documento html
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    /*form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado');
    }; //lembrar do ; porque esta usando = na function*/

    function recebeEventoForm (evento) {
        evento.preventDefault(); //impede o comportamento padrão do navegador para um evento, neste caso enviar os dados e recarregar a pág

        const nome = form.querySelector('.nome'); //form pq sabemos que esta dentro do forms o que queremos pegar
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value  
        });

        console.log(pessoas); //pra conseguir ver o array dentro do console na pág

        resultado.innerHTML += `<p>Dados <br>Nome: ${nome.value} <br>Sobrenome: ${sobrenome.value} <br>Peso: ${peso.value} <br>Altura: ${altura.value}</p>`; //pra mostrar os dados no html
    }

    form.addEventListener('submit', recebeEventoForm); //quando o form for enviado execute a função recebeEventoForm
}

meuEscopo();