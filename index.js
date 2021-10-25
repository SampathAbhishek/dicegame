randomNumber1 = Math.floor(6*Math.random())+1;
randomNumber2 = Math.floor(6*Math.random())+1;
var getimg1 = "images/dice"+randomNumber1+".png"
var getimg2 = "images/dice"+randomNumber2+".png"
document.querySelector(".img1").setAttribute("src",getimg1);
document.querySelector(".img2").setAttribute("src",getimg2);
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
