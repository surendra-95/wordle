const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
suri=document.querySelector(".suri span")
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [],score=0,times=0;

// document.getElementById("akshay").innerHTML(score);


function randomWord() {
    times=times+1;
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
    suri.innerText=score;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            
            if(maxGuesses>=4){
                score=score+10;
            }else{
                score=score+5;
            }
            alert(`Congrats! You found the word ${word.toUpperCase()} your score is score is ${score}`);
            console.log(score);
            // await;
            if(times===3){
                alert(`no.of turns exhausted.\n Your total score is ${score}`);
            }else{
                return randomWord();
            }
           
        } else if(maxGuesses < 1) {
            alert(`Game over! You donot have remaining guesses Your score is ${score}`);
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
            randomWord();
        }
    }, 100);
}

resetBtn.addEventListener("click",function(){
    if(times==3){
        document.getElementById("reset-btn").disabled = true;
    }else{
    randomWord();
    }
    });
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());



let popup = document.getElementById('popup')
// let x=document.getElementById('nextbutton')
// function openbutton{
//     if(x.disabled===true){

//     }
// }
function openPopup(){
  popup.classList.add('open-popup')
}

function closePopup(){
  popup.classList.remove('open-popup')
}

function mysuri(){
    document.getElementById("akshay").innerHTML=score;
}