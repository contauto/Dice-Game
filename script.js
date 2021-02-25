var randomNumber1 = ((Math.floor(Math.random()*6))+1);
var randomDiceImg1 = ("images/dice"+randomNumber1+".png");
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImg1);
var randomNumber2 = ((Math.floor(Math.random()*6))+1);
var randomDiceImg2 = ("images/dice"+randomNumber2+".png");
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImg2);
var x=document.getElementsByClassName("refme")[0];


if (randomNumber2<randomNumber1){
    
    x.innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    
    x.innerHTML="Player 2 Wins! 🚩";
}
else {
    x.innerHTML="Draw!";
}