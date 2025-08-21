let listaAmigos = [];
let listaAmigosUL = document.querySelector(`#listaAmigos`);

function atualizarListaHTML() {
    listaAmigosUL.innerHTML = ''; //limpa todos os itens <li> existentes na <ul> 

    //percorre o array 'listaAmigos' e recria os <li>
    for (i = 0; i < listaAmigos.length; i++) {
        let novoAmigoLi = document.createElement('li');
        novoAmigoLi.textContent = listaAmigos[i];
        listaAmigosUL.appendChild(novoAmigoLi); //adicionar uma criança kk
    }
}


function adicionarAmigo() {
    let campo = document.querySelector('input').value;

    /*verificacao de nome valido
    1.Campo não pode estar vazio
    2.Não pode ser um número puro */
    if (campo == '' || !isNaN(Number(campo)) == true) {
        alert('Insira um nome válido!');
    }

    //adiciona o amigo ao array
    listaAmigos.push(campo);
    console.log(`Array de amigos após inserção: ${listaAmigos}`);

    atualizarListaHTML(); //atualiza a lista html

    let campoLimpo = document.querySelector('input');
    campoLimpo.value = '';

}

function sortearAmigo() {
    let numeroEscolhido = parseInt(Math.random() * listaAmigos.length); //sorteia um numero aleatorio entre 0 e o tamanho do array - 1
    let nomeEscolhido = listaAmigos[numeroEscolhido]; //adiciona ao nomeEscolhido algum elemento do array que está contido no índice igual ao número aleatório 
    let resultado = document.querySelector('#resultado'); //armazena referencia ao elemento HTML que contém o primeiro id resultado -> #resultado
    resultado.textContent = nomeEscolhido;//adiciona o nome escolhido ao objeto resultado
    listaAmigos.splice(numeroEscolhido, 1);//elimina o item do array que contém o indíce do nome escolhido
    console.log(listaAmigos);
    console.log(listaAmigos.length);
    atualizarListaHTML();

    if (listaAmigos.length == 0) {
        alert(`Não há mais amigos para sortear!`);
    }
}




