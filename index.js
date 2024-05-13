function myFunction(){
    var randomNumber1 = parseInt(Math.random() * 6) + 1;
    var randomNumber2 = parseInt(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if(randomNumber1 > randomNumber2){
        document.getElementById("switch").textContent = "Player 1 WON!";
    }else if(randomNumber1 < randomNumber2){
        document.getElementById("switch").textContent = "Player 2 WON!";
    }else{
        document.getElementById("switch").textContent = "DRAW!";
    }
}


