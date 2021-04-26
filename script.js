var colorblocks = document.getElementsByClassName("colorblocks");
var RGBtext = document.getElementById("RGBtext");
var scoretext = document.getElementById("scoretext");
var resulttext = document.getElementById("resulttext");
var percenttext = document.getElementById("percenttext");
var turncolors = [];
var colorarray = [];
var correct;
var score = 0;
var percent;
var turns = 0;
turn();

// change colors 
function turn(){
    turns++;
    correct = randomNumber(0,6);
    for (b = 0; b < colorblocks.length; b++){
        let color1 = randomNumber(0,255);
        let color2 = randomNumber(0,255);
        let color3 = randomNumber(0,255);
        colorarray = [color1,color2,color3];
        turncolors.push(colorarray);
        colorblocks[b].style.backgroundColor = ('rgb('+colorarray[0]+','+colorarray[1]+','+colorarray[2]);
        console.log(correct);
        RGBtext.innerText = 'Color: rgb('+colorarray[0]+','+colorarray[1]+','+colorarray[2]+")";
    }
        
}

function guess(g){
    console.log("score: " +score);

    if (g == correct){
        score++;
        resulttext.innerText = ("Correct!");
        resulttext.style.backgroundColor = ("green");
        scoretext.innerText = ("Score: " + score);
    }else{
        resulttext.style.backgroundColor = ("red");
        resulttext.innerText = ("Incorrect");
    }

    percent = score / turns;
    percenttext.innerText = ((percent*100).toFixed(0) + "%");

    turn();
    turncolors = [];
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 