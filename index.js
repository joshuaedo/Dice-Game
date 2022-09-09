/* PROBLEMS
1. Create random number generator
2. Put the images into an array
3. Integrate the random number generator into the array
4. Make the header change text to show the winner */

// Create random number generator
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

// Put the images into an array
var imgArray = new Array();

imgArray[0] = "./images/dice1.png";

imgArray[1] = "./images/dice2.png";

imgArray[2] = "./images/dice3.png";

imgArray[3] = "./images/dice4.png";

imgArray[4] = "./images/dice5.png";

imgArray[5] = "./images/dice6.png";

// Integrate the random number generator into the array
var img1 = document.querySelector("img.img1");
img1.getAttribute("src");
img1.setAttribute("src", imgArray[randomNumber1]);

var img2 = document.querySelector("img.img2");
img2.getAttribute("src");
img2.setAttribute("src", imgArray[randomNumber2]);

// Make the header change text to show the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector(".container h1").textContent = "Draw🤝";
}
