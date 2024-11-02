let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextos (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextos('h1','Jogo do número secreto');
    exibirTextos('p',`Escolha um número entre 1 e ${numeroLimite}`); 
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute){
        exibirTextos('h1','Acertou');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        exibirTextos('p',`Você acertou o número secreto em ${tentativas} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > chute) {
            exibirTextos('p',`O número secreto é maior que ${chute}`);
        } else {
            exibirTextos('p',`O número secreto é menor que ${chute}`);
        }
        tentativas++;
        limparCampoChute();
    }
    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampoChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

  
function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio(),
    mensagemInicial();
    limparCampoChute();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    console.log(numeroSecreto);
    }

