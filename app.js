let listaAmigos = [];
let listaAmigosUL = document.querySelector(`#listaAmigos`);

function limparCampos(){
    listaAmigosUL.innerHTML = '';
    resultado.innerHTML = '';
}

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
    let verificador = false;//false por definicao para nao ativar o alerta de nomes iguais
    
    //pega o nome add em campo e verifica se já está no array listaAmigos 
    for (let i = 0; i < listaAmigos.length; i++) {
        if (campo.toUpperCase() === listaAmigos[i].toUpperCase()) {
            verificador = true;//se a condicao de encontro de nomes iguais for validada a função retorna verdadeiro
            break;//caso encontre um nome em um indice inferior ao tamanho do array, nao precisa percorrer ele todo para finalizar
        }
    }
    //se o for modificar a variavel *verificador* de false para true (nomes iguais) aciona o alerta
    if (verificador === true) {
        alert('Esse amigo já tá lista ;D');
    }

    /*verificacao de nome valido
    1.Campo não pode estar vazio
    2.Não pode ser um número puro */
    else if (campo == '' || !isNaN(Number(campo)) == true) {
        alert('Insira um nome válido!');
    }

    //adiciona o amigo ao array
    else {
        listaAmigos.push(campo);
        console.log(`Array de amigos após inserção: ${listaAmigos}`);
        atualizarListaHTML(); //atualiza a lista html
    }

    let campoLimpo = document.querySelector('input');
    campoLimpo.value = '';//limpa o campo ao final das verificacoes e insercao do novo amigo ao array

}

function sortearAmigo() {
    let numeroEscolhido = parseInt(Math.random() * listaAmigos.length); //sorteia um numero aleatorio entre 0 e o tamanho do array - 1
    let nomeEscolhido = listaAmigos[numeroEscolhido]; //adiciona ao nomeEscolhido algum elemento do array que está contido no índice igual ao número aleatório 
    let resultado = document.querySelector('#resultado'); //armazena referencia ao elemento HTML que contém o primeiro id resultado -> #resultado
    resultado.textContent =`O amigo secreto sorteado é: ${nomeEscolhido}`;//adiciona o nome escolhido ao objeto resultado
    listaAmigos.splice(numeroEscolhido, 1);//elimina o item do array que contém o indíce do nome escolhido
    console.log(listaAmigos);
    console.log(listaAmigos.length);
    atualizarListaHTML();

    if (listaAmigos.length == 0) {
        alert(`Não há amigos para sortear!`);
        limparCampos();
    }
}

function limparLista() {
    limparCampos();
    listaAmigos = [];
    console.log(listaAmigos);
}


