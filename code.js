const roundsTxt = document.getElementById('currentRound');

const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');

const player1ButtonStart = document.getElementById('player1start');
const player2ButtonStart = document.getElementById('player2start');

const player1Button = document.getElementById('player1');
const player2Button = document.getElementById('player2');

const startPage = document.getElementById('startPage');
const matchPage = document.getElementById('matchPage');
const winPage = document.getElementById('winPage');

const arrow = document.createElement("img");
arrow.src = "./images/dotterArrow.svg";
const empty = document.createElement("img");
empty.src = "./images/empty.svg";

var startPlayer, rounds = 0, score1 = 0, score2 = 0;

player1ButtonStart.addEventListener('click', e => {
    startPage.setAttribute('class', 'out');
    player1Score.innerHTML = score1;
    player2Score.innerHTML = score2;
    roundsTxt.innerHTML = "Rounds: " + (score1 + score2);
    startPlayer = 1;
    setTimeout(function () {
        startPage.style.display = 'none';
        imagenSaque(startPlayer);
        matchPage.setAttribute('class', 'in');
    }, 300);
})

player2ButtonStart.addEventListener('click', e => {
    startPage.setAttribute('class', 'out');
    player1Score.innerHTML = score1;
    player2Score.innerHTML = score2;
    roundsTxt.innerHTML = "Rounds: " + (score1 + score2);
    startPlayer = 2;
    setTimeout(function () {
        startPage.style.display = 'none';
        imagenSaque(startPlayer);
        matchPage.setAttribute('class', 'in');
    }, 300);
})

player1Button.addEventListener('click', e => {
    score1++;
    player1Score.innerHTML = score1;
    player2Score.innerHTML = score2;
    roundsTxt.innerHTML = "Rounds: " + (score1 + score2);
    if (score1 == 11) {
        ganador(1);
    } else {
        quienSaca(score1 + score2);
    }
})

player2Button.addEventListener('click', e => {
    score2++;
    player1Score.innerHTML = score1;
    player2Score.innerHTML = score2;
    roundsTxt.innerHTML = "Rounds: " + (score1 + score2);
    if (score2 == 11) {
        ganador(2);
    } else {
        quienSaca(score1 + score2);
    }
})

function imagenSaque(player) {
    if (player == 1) {
        document.getElementById('score1').appendChild(arrow);
        document.getElementById('score2').appendChild(empty);
    } else {
        document.getElementById('score1').appendChild(empty);
        document.getElementById('score2').appendChild(arrow);
    }
}

function quienSaca(round) {
    // console.log("Round: " + round);
    if (round == 5) {
        startPlayer = switchSaque(+ startPlayer);
    } else if (round == 10) {
        startPlayer = switchSaque(+ startPlayer);
    } else if (round == 15) {
        startPlayer = switchSaque(+ startPlayer);
    } else if (round == 20) {
        startPlayer = switchSaque(+ startPlayer);
    } else if (round > 20) {
        startPlayer = switchSaque(+ startPlayer);
    }
    return;
}

function switchSaque(player) {
    if (player == 1) {
        player = 2;
        imagenSaque(player);
    } else {
        player = 1;
        imagenSaque(player);
    }
    // console.log("Cambio de saque a " + startPlayer);
    return player;
}

function ganador(player) {
    ganador = document.getElementById('ganadorTxt');
    if (player == 1) {
        ganador.innerHTML = "Gana el jugador " + 1;
    } else {
        ganador.innerHTML = "Gana el jugador " + 2;
    }
    matchPage.setAttribute('class', 'out');
    setTimeout(function () {
        matchPage.style.display = 'none';
        winPage.setAttribute('class', 'in');
    }, 300);

}