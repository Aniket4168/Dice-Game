var sett1= Math.floor(Math.random() *6) +1;
var sett2 =Math.floor(Math.random() *6) +1;


document.querySelector(".img1").setAttribute("src", "./images/dice" + sett1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + sett2 + ".png");


if(sett1>sett2) {
    document.querySelector("h1").textContent= "🚩 Player 1 wins ";
}

else if(sett2>sett1) {
    document.querySelector("h1").textContent= " Player 2 wins 🚩";
}

else if(sett1===sett2) {
    document.querySelector("h1").textContent= "🚩 It's a Draw! 🚩";
}