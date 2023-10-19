let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("Dener");

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Desafio');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log (chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns! Você descobriu o número com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p','O número secreto é maior');
        } 
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    console.log(numeroSecreto);
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}