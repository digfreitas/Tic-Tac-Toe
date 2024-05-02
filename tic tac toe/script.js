
const jogadorAtual = document.querySelector(".jogadorAtual");

let selecionado;
let jogador = "X";

const board = document.getElementsByClassName('jogo');  //tabuleiro
const boxes = document.querySelectorAll(".jogo button");  //cada quadrado do tab.

const combinacoesVitoria = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function iniciar() {
    selecionado = [];

    jogadorAtual.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

    document.querySelectorAll(".jogo button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click" , novaJogada);
    });
}

iniciar();

function novaJogada(e) {
    const indice = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", novaJogada);

    selecionado[indice] = jogador;

    setTimeout(()=> {
        checar();
    }, [100]);

    jogador = jogador === "X" ? "O" : "X";
    jogadorAtual.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function checar() {
    let ultimaJogadaJogador = jogador === "X" ? "O" : "X";

    const items = selecionado
        .map((item, i) => [item, i])
        .filter((item) => item[0] === ultimaJogadaJogador)
        .map((item) => item[1]);

        for(cons of combinacoesVitoria) {
            if(cons.every((item) => items.includes(item))) {
                alert("O JOGADOR '" + ultimaJogadaJogador + "' GANHOU!");
                iniciar();
                return;
            }
        }

        if(selecionado.filter((item) => item).length === 9) {
            alert("DEU VELHA!");
            iniciar();
            return;
        }
}


//reseta o jogo e quando chama a função iniciar() ele libera as boxes pra click de novo.
function reiniciar() {
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '' 
        
    }
    jogador = jogador;
    iniciar();
}


    
};



