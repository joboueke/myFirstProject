# Blackjack 21 – JavaScript

Projeto de um jogo **Blackjack (21)** desenvolvido em **HTML, CSS e JavaScript puro**, com foco em lógica de jogo, manipulação do DOM e organização de código.

🔗 **Demo online (GitHub Pages):**  
https://joboueke.github.io/myFirstProject/

## Sobre o projeto

Este projeto simula uma partida simplificada de **Blackjack**, onde o jogador compete contra o dealer seguindo as regras clássicas do jogo.

O objetivo é chegar o mais próximo possível de **21 pontos**, sem ultrapassar esse valor.

## Regras do jogo

- Cartas numéricas valem seu próprio valor
- J, Q e K valem **10**
- Ás vale **1 ou 11**, dependendo da melhor pontuação
- O dealer compra cartas até atingir pelo menos **17 pontos**
- Se ultrapassar 21, o jogador ou dealer **estoura**

---

## Funcionalidades

- Embaralhamento de baralho completo (52 cartas)
- Compra de cartas para jogador e dealer
- Cálculo automático de pontuação
- Tratamento especial para o Ás (1 ou 11)
- Condições de vitória, derrota e empate
- Interface simples e responsiva
- Reinício de jogo sem recarregar a página


## Estrutura do projeto
```
├── index.html        # Versão final do jogo
├── script.js         # Lógica do Blackjack
├── style.css         # Estilos da mesa e cartas
├── myFirstProject/
│   └── prototype/   # Primeira versão (protótipo)
└── README.md
```
## Protótipo vs Versão Final

Este repositório contém duas versões do jogo:

- Protótipo (/myFirstProject/prototype)

Lógica simplificada

Uso de números aleatórios no lugar de cartas reais

Estrutura inicial para aprendizado

- Versão Final (raiz do projeto)

Baralho real (52 cartas)

Regras mais próximas do Blackjack clássico

Código mais organizado e reutilizável

Melhor experiência visual e de jogo

## Tecnologias utilizadas

HTML5

CSS3

JavaScript (ES6+)

Git & GitHub

GitHub Pages para deploy


## Objetivo do projeto

Projeto desenvolvido com foco em:

Prática de lógica de programação

Manipulação do DOM

Organização de código em JavaScript

Uso de controle de versão com Git

Publicação de aplicações estáticas
