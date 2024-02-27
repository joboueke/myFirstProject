// Função para gerar números aleatórios de 1 a 14
function sacar(){
    return Math.floor(Math.random() * 14) + 1;
}
// Função para receber cartas
function receberCarta() {
    const suaMao = document.getElementById('suaMao')
    const seuOponente = document.getElementById('seuOponente')
    const suaCarta = sacar();
    const cartaOponente = sacar();
    const valorAtualMinhaMao = parseInt(suaMao.textContent)|| 0;
    const valorAtualMaoOponente = parseInt(seuOponente.textContent)|| 0;
    suaMao.textContent = valorAtualMinhaMao + suaCarta;
    seuOponente.textContent = valorAtualMaoOponente + cartaOponente;
    // Atualiza a pontuação do jogador e do oponente
    const suaFinal = valorAtualMinhaMao + suaCarta;
    const oponenteFinal = valorAtualMaoOponente + cartaOponente;
    // Lógica para verificar condições de vitória ou derrota
    if (suaFinal === 21) {
        alert("Parabéns! Você atingiu 21. Você venceu!");
    } else if (oponenteFinal === 21) {
        alert("Seu oponente atingiu 21. Você perdeu!");
    } else if (suaFinal > 21) {
        alert("Você ultrapassou 21. Você perdeu!");
    } else if (oponenteFinal > 21) {
        alert("Seu oponente ultrapassou 21. Você venceu!");
    }
}
// Função para o jogador segurar
function segurar() {
    const suaMao = document.getElementById('suaMao');
    const seuOponente = document.getElementById('seuOponente');

    const suaFinal = parseInt(suaMao.textContent) || 0;
    const oponenteFinal = parseInt(seuOponente.textContent) || 0;

    if (oponenteFinal > 21) {
        alert("Seu oponente ultrapassou 21. Você venceu!");
    } else if (oponenteFinal > suaFinal) {
        alert("Seu oponente tem uma mão maior. Você perdeu!");
    } else if (oponenteFinal < suaFinal) {
        alert("Você tem uma mão maior. Você venceu!");
    } else {
        alert("Empate! Ambos têm a mesma pontuação.");
    }   
}
//Função para verificar se o jogador sabe as regras do jogo
const confirmAction = () => {
    const response = confirm("Você conhece as regras desse jogo?");

    if (response) {
        alert("Então vamos começar!");
    } else {
        alert("O seu objetivo é adiquirir 21 pontos, se passar de 21 ou se seu oponente conseguir 21 antes de você, você perde. Ao apertar o botão sacar, você e seu oponente irão receber um valor entre 1 a 14, representando as cartas do baralho. Se você apertar segurar, você não irá receber mais cartas, porém seu oponente irá receber mais uma, e em seguida o jogo encerra declarando o vencedor. Boa sorte!");
    }
}
