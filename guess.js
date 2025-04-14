let button = document.getElementById('guessbtn');
let result = document.getElementById('result');
let input = document.getElementById('inputfield');
let com = Math.floor(Math.random()*10)+1;
let life = document.getElementById('tries')
let tries = 5
let resetbt = document.getElementById('resetbtn');
let div = document.getElementById('div');
let failed = new Audio('failsound.wav');
let claps = new Audio('claps.mp3')
let gameOver = new Audio('gameOver.wav')
let resetSound = new Audio('equaltone.mp3')
div.style.backgroundColor = 'blue'

button.addEventListener('click', () =>{
    let guessN = parseInt(input.value);
    
    if(isNaN(guessN) || guessN < 1 || guessN >10 ){
        result.value = 'invalid number';
        result.style.color = 'red';
        result.fontWeight.style = 'bold'
        input.value = '' 
        return;
    }
    else if(guessN === com){
        claps.play()
        result.value = '👑 YOU WON 👑';
        result.style.color = 'green'
        div.style.backgroundColor = 'green'
        com = Math.floor(Math.random()*10)+1;
        input.value = '';
        setTimeout(() =>{
            div.style.backgroundColor = 'blue'
        }, 700

        )

    }else{
        if(guessN > com){
            result.value = 'You guessed High';
            result.style.color = 'blue';
            result.style.fontWeight = 'bold'
        }else{
            result.value = 'you guessed low';
            result.style.color = 'black'
            result.style.fontWeight = 'bold'
        }
        failed.play()
        tries--
        life.textContent = `❤️ ${tries}`
        input.value = ''
        
    }
    if(tries === 0){
        gameOver.play()
        result.value = 'GAME OVER!! 💔'
        result.style.color = 'red'
        result.style.fontWeight = 'bold'
        button.disabled = true
        div.style.backgroundColor = 'red'
        setTimeout(() =>{
            div.style.backgroundColor = 'blue'
        }, 700

        )
        
    }
})

   
    resetbt.addEventListener('click',() => {
        resetSound.play()
        if(button.disabled = true){
            button.disabled = false
            tries = 5
            life.textContent = `❤️ ${tries}`;
            
        };
        
    })

