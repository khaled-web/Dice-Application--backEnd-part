var diceNumber01 = Math.floor(Math.random() * 6) + 1;

var diceImage01 = "dice" + diceNumber01 + ".png";

var diceSource01 = "images/" + diceImage01;

var imgPlayer01 = document.querySelectorAll("img")[0];

imgPlayer01.setAttribute("src", diceSource01);



var diceNumber02 = Math.floor(Math.random() * 6) + 1;

var diceimage02 = "dice" + diceNumber02 + ".png"

var diceSource02 = "images/" + diceimage02;

var imgPlayer02 = document.querySelectorAll("img")[1];

imgPlayer02.setAttribute("src", diceSource02);
