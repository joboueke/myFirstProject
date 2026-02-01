function sacar() {
    return Math.floor(Math.random() * 14) + 1;
}

// Função para receber cartas
function receberCarta() {
    const suaMao = document.getElementById('suaMao');
    const seuOponente = document.getElementById('seuOponente');

    const suaCarta = sacar();
    const cartaOponente = sacar();

    const valorAtualMinhaMao = parseInt(suaMao.textContent) || 0;
    const valorAtualMaoOponente = parseInt(seuOponente.textContent) || 0;

    suaMao.textContent = valorAtualMinhaMao + suaCarta;
    seuOponente.textContent = valorAtualMaoOponente + cartaOponente;

    const suaFinal = valorAtualMinhaMao + suaCarta;
    const oponenteFinal = valorAtualMaoOponente + cartaOponente;

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

    const cartaOponenteExtra = sacar();
    seuOponente.textContent = parseInt(seuOponente.textContent) + cartaOponenteExtra;

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

// Função para verificar se o jogador conhece as regras
function confirmAction() {
    const response = confirm("Você conhece as regras desse jogo?");

    if (response) {
        alert("Então vamos começar!");
    } else {
        alert(
            "O seu objetivo é adquirir 21 pontos. " +
            "Se passar de 21 ou se seu oponente conseguir 21 antes de você, você perde. " +
            "Ao apertar o botão sacar, você e seu oponente recebem um valor entre 1 e 14. " +
            "Se apertar segurar, você para e o oponente recebe mais uma carta."
        );
    }
}
