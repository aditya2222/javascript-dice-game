/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// hiding the dice
document.querySelector('.dice').style.display = 'none';
// setting all scores initially to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;


document.querySelector('.btn-roll').addEventListener('click', function(){
    // Random Number
    var dice = Math.floor(Math.random()*6)+1;
    // Display The Result
    var diceRoll = document.querySelector('.dice');
    diceRoll.src = 'dice-'+dice+'.png';
    diceRoll.style.display = 'block';
    // Update the round score if the rolled number was not 1
    if(dice > 1){   
        // Add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }else{
        // Next Player turn
        if (activePlayer==1){
            activePlayer = 0;
            roundScore = 0;
        }
        else{
            activePlayer = 1;
            roundScore = 0;
        }


        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }



});







