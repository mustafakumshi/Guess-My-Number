'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}

const displayScore = function (scoreValue){
    document.querySelector(".score").textContent = scoreValue;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    //When there is no input
    if(!guess) {
        displayMessage("⛔ No Number!");

    //When player Wins
    } else if(guess === secretNumber){
        displayMessage("🎉 Correct Number!");

       document.querySelector(".number").textContent = secretNumber;

       document.querySelector("body").style.backgroundColor = "#60b347"

       document.querySelector(".number").style.width = "30rem"

       if(score > highScore){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
       }

       //When Guess is Wrong
    } else if(guess !== secretNumber){
    
        if(score > 1 ){
            displayMessage(guess > secretNumber? "📈 Too High!" : "📈 Too Low!");
            score--;
             displayScore(score);
        } else {
            displayMessage("You Lost the Game!");
            displayScore(0);
        }
    }
});

//        //When Guess is too High
//     } else if(guess > secretNumber){

//         if(score > 1 ){
//             document.querySelector(".message").textContent = "📈 Too High!";
//             score--;
//              document.querySelector(".score").textContent = score;
//         } else {
//             document.querySelector(".message").textContent = "You Lost the Game!";
//             document.querySelector(".score").textContent = 0;
//         }

//    //When Guess is too Low
//     } else if(guess < secretNumber){

//         if(score > 1 ){
//             document.querySelector(".message").textContent = "📈 Too Low!";
//             score--;
//              document.querySelector(".score").textContent = score;
//         } else {
//             document.querySelector(".message").textContent = "You Lost the Game!";
//             document.querySelector(".score").textContent = 0;
//         }

//     }

// }

document.querySelector(".again").addEventListener("click", 
function (){
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".number").style.width = "15rem"
document.querySelector(".number").textContent = "?";
displayScore(score);
displayMessage("Start guessing...");
document.querySelector(".guess").value = "";
});