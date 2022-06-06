var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]


// Player 1
var randonNumber1 = Math.floor(Math.random() * 6);
var player1Img = document.querySelector(".img1");
var img1 = images[randonNumber1]
player1Img.setAttribute("src", img1);

// Player 2
var randonNumber2 = Math.floor(Math.random() * 6);
var player2Img = document.querySelector(".img2");
var img2 = images[randonNumber2]
player2Img.setAttribute("src", img2);


// Analyzing result
var result = document.querySelector(".container h1");

if (randonNumber1 > randonNumber2) {
    result.innerHTML = "🚩 Player 1 Wins!"
} else if (randonNumber1 < randonNumber2) {
    result.innerHTML = "Player 2 Wins! 🚩"
} else {
    result.innerHTML = "Draw!";
}