var p1Button = document.getElementById('p1Display');
var p2Button = document.getElementById('p2Display');
var nextButton = document.getElementById('next');
var p1Marker = document.getElementById('p1Marker');
var p2Marker = document.getElementById('p2Marker');
var serverTracker = document.getElementById('serverTracker');
var courtTracker = document.getElementById('courtTracker');
var soundTracker = document.getElementById('soundTracker');
var resetButton = document.getElementById('reset');
var p1SubDisplay = document.querySelector('#p1SubDisplay');
var p2SubDisplay = document.querySelector('#p2SubDisplay');
var message = document.getElementById('message');
var p1Del = document.getElementById('p1Del');
var p2Del = document.getElementById('p2Del');
var p1GameDel = document.getElementById('p1GameDel');
var p2GameDel = document.getElementById('p2GameDel');
var winningScoreDisplay = document.querySelector('h3 span');
var h3 = document.querySelector('h3');
var select = document.querySelector('p select');
var p1Score = 0;
var p1Game = 0;
var p2Score = 0;
var p2Game = 0;
var gameOver = false;
var gameEnd = false;
var winningScore = 11;
var gameScore = 2;
var gameStarted = false;
var totalScore = 0;
var firstServer = 0;


p1Button.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#5200c4';
});

p1Button.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(101, 7, 242)';
});

p2Button.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#5200c4';
});

p2Button.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(101, 7, 242)';
});


p1SubDisplay.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'lightgray';
});

p1SubDisplay.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});


p2SubDisplay.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'lightgray';
});

p2SubDisplay.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});


p1Marker.addEventListener('click', function () {
    if (!totalScore && serverTracker.textContent === 'ON') {
        this.classList.add('serverOn');
        p2Marker.classList.remove('serverOn');
    }
});

p2Marker.addEventListener('click', function () {
    if (!totalScore && serverTracker.textContent === 'ON') {
        this.classList.add('serverOn');
        p1Marker.classList.remove('serverOn');
    }
});


serverTracker.addEventListener('click', function () {
    if (this.textContent === 'ON') {
        this.textContent = 'OFF';
        p1Marker.classList.remove('serverOn');
        p2Marker.classList.remove('serverOn');
    } else {
        this.textContent = 'ON';
        p1Marker.classList.add('serverOn');
    }
})


courtTracker.addEventListener('click', function () {
    if (this.textContent === 'ON') {
        this.textContent = 'OFF';
        if (p2Marker.classList.contains('serverOn')) {
            firstServer = 1;
        }
    } else {
        this.textContent = 'ON';
    }
})

soundTracker.addEventListener('click', function () {
    if (this.textContent === 'ON') {
        this.textContent = 'OFF';
    } else {
        this.textContent = 'ON';
    }
})





p1Del.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#5200c4';
});

p1Del.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(101, 7, 242)';
});

p2Del.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#5200c4';
});

p2Del.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'rgb(101, 7, 242)';
});

select.addEventListener('change', function () {
    gameScore = Number(select.value);
});


p1Button.addEventListener('click', function () {
    if (!totalScore) {
        gameStarted = true;
        if (serverTracker.textContent === 'ON') {
            if (p2Marker.classList.contains('serverOn')) {
                firstServer = 1;
            }
        }
    }
    if (!gameOver && !gameEnd) {
        p1Score++;
        totalScore++;
        if (totalScore % 2 === 0 && serverTracker.textContent === 'ON') {
            p1Marker.classList.toggle('serverOn');
            p2Marker.classList.toggle('serverOn');
        }
        if (p1Score === 10 && p2Score === 10) {
            p1Button.classList.add('deuce');
            p2Button.classList.add('deuce');
            winningScore += 1;
        }
        if (p1Score > 10 && p2Score > 10 && p1Score === p2Score) {
            winningScore += 1;
        }
        if (p1Score === winningScore) {
            gameOver = true;
        }
        p1Button.textContent = p1Score;
    }
});


p2Button.addEventListener('click', function () {
    if (!totalScore) {
        gameStarted = true;
        if (serverTracker.textContent === 'ON') {
            if (p2Marker.classList.contains('serverOn')) {
                firstServer = 1;
            }
        }
    }
    if (!gameOver && !gameEnd) {
        p2Score++;
        totalScore++;
        if (totalScore % 2 === 0 && serverTracker.textContent === 'ON') {
            p1Marker.classList.toggle('serverOn');
            p2Marker.classList.toggle('serverOn');
        }
        if (p1Score === 10 && p2Score === 10) {
            p1Button.classList.add('deuce');
            p2Button.classList.add('deuce');
            winningScore += 1;
        }
        if (p1Score > 10 && p2Score > 10 && p1Score === p2Score) {
            winningScore += 1;
        }
        if (p2Score === winningScore) {
            gameOver = true;
        }
        p2Button.textContent = p2Score;
    }
});


p1Del.addEventListener('click', function () {
    if (!gameOver && !gameEnd) {
        if (totalScore % 2 && serverTracker.textContent == 'ON') {
            p1Marker.classList.toggle('serverOn')
            p2Marker.classList.toggle('serverOn')
        }
        if (p1Score === 10 && p2Score === 10) {
            p1Button.classList.remove('deuce');
            p2Button.classList.remove('deuce');
            winningScore--;
        }
        if (p1Score > 0) {
            p1Score--;
            totalScore--;
            p1Button.textContent = p1Score;
        }
    }
});

p2Del.addEventListener('click', function () {
    if (!gameOver && !gameEnd) {
        if (totalScore % 2 && serverTracker.textContent == 'ON') {
            p1Marker.classList.toggle('serverOn')
            p2Marker.classList.toggle('serverOn')
        }
        if (p1Score === 10 && p2Score === 10) {
            p1Button.classList.remove('deuce');
            p2Button.classList.remove('deuce');
            winningScore--;
        }
        if (p2Score > 0) {
            p2Score--;
            totalScore--;
            p2Button.textContent = p2Score;
        }
    }
});

p1SubDisplay.addEventListener('click', function () {
    if (!gameOver && !gameEnd) {
        p1Game++;
        p1SubDisplay.textContent = p1Game;
    }
});

p2SubDisplay.addEventListener('click', function () {
    if (!gameOver && !gameEnd) {
        p2Game++;
        p2SubDisplay.textContent = p2Game;
    }
});

p1GameDel.addEventListener('click', function () {
    if (!gameOver && !gameEnd) {
        if (p1Game > 0) {
            p1Game--;
            p1SubDisplay.textContent = p1Game;
        }
    }
});


p2GameDel.addEventListener('click', function () {
    if (!gameOver && !gameEnd) {
        if (p2Game > 0) {
            p2Game--;
            p2SubDisplay.textContent = p2Game;
        }
    }
});



nextButton.addEventListener('click', function () {
    if (gameOver && !gameEnd) {
        if (p1Score === winningScore) {
            p1Game += 1;
            p1SubDisplay.textContent = p1Game;
            totalScore = 0;
        }
        if (p2Score === winningScore) {
            p2Game += 1;
            p2SubDisplay.textContent = p2Game;
            totalScore = 0;
        }
        if (p1Game === gameScore) {
            gameEnd = true;
            p1Button.classList.add('winner');
            p1Button.innerHTML = '<i class="fas fa-grin-squint-tears"></i>';
            p2Button.classList.add('loser');
            p2Button.innerHTML = '<i class="fas fa-meh"></i>';
            if (serverTracker.textContent === 'ON') {
                if (p1Marker.classList.contains('serverOn')) {
                    p1Marker.classList.add('winner');
                }
            }
        }
        if (p2Game === gameScore) {
            gameEnd = true;
            p2Button.classList.add('winner');
            p2Button.innerHTML = '<i class="fas fa-grin-squint-tears"></i>';
            p1Button.classList.add('loser');
            p1Button.innerHTML = '<i class="fas fa-meh"></i>';
            if (serverTracker.textContent === 'ON') {
                if (p2Marker.classList.contains('serverOn')) {
                    p2Marker.classList.add('winner');
                }
            }

        }
        if (!gameEnd) {
            p1Score = 0;
            p2Score = 0;
            p1Button.textContent = p1Score;
            p2Button.textContent = p2Score;
            gameOver = false;
            winningScore = 11;
            p1Button.classList.remove('deuce')
            p2Button.classList.remove('deuce')
            if (serverTracker.textContent === 'ON' && courtTracker.textContent === 'ON') {
                message.textContent = '** SCORE REVERSE AFTER 6 SEC **';
                setTimeout(messageJP, 3000);
                setTimeout(transition, 6000);
                setTimeout(serverCheckOnOn, 6000);
            }
            if (serverTracker.textContent === 'ON' && courtTracker.textContent === 'OFF') {
                serverCheckOnOff();
            }
            if (serverTracker.textContent === 'OFF' && courtTracker.textContent === 'ON') {
                message.textContent = '*** SCORE REVERSE AFTER 6 SEC ***';
                setTimeout(messageJP, 3000);
                setTimeout(transition, 6000);
            }
        }
    }
});


function messageJP() {
    message.classList.add('jp');
    message.textContent = '** 3秒後にスコアが自動で反転します **';
    message.classList.remove('jp');
}



function serverCheckOnOn() {
    if (firstServer == 0) {
        serverChange10();
    } else {
        serverChange01();
    }
}


function serverCheckOnOff() {
    if (firstServer == 0) {
        serverChange01();
        firstServer = 1;
    } else {
        serverChange10();
        firstServer = 0;
    }
}

function serverChange01() {
    p1Marker.classList.remove('serverOn');
    p2Marker.classList.add('serverOn');
}

function serverChange10() {
    p1Marker.classList.add('serverOn')
    p2Marker.classList.remove('serverOn');
}

function transition() {
    sumGame = p1Game + p2Game;
    p1Game = p2Game;
    p2Game = sumGame - p1Game;
    p1SubDisplay.textContent = p1Game;
    p2SubDisplay.textContent = p2Game;
    message.textContent = ''
}



resetButton.addEventListener('click', function () {
    p1Score = 0;
    p1Game = 0;
    p2Score = 0;
    p2Game = 0;
    totalScore = 0;
    p1Button.textContent = 0;
    p1SubDisplay.textContent = 0;
    p2Button.textContent = 0;
    p2SubDisplay.textContent = 0;
    gameOver = false;
    gameEnd = false;
    gameStarted = false;
    winningScore = 11;
    p1Button.classList.remove('deuce');
    p2Button.classList.remove('deuce');
    p1Button.classList.remove('winner');
    p2Button.classList.remove('winner');
    p1Marker.classList.remove('winner');
    p2Marker.classList.remove('winner');
    p1Button.classList.remove('loser');
    p2Button.classList.remove('loser');
});
