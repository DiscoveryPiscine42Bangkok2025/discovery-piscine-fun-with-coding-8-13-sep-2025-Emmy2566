let now = 0;
let color = ["red", "green", "blue"]
let current = document.getElementById("b").style.backgroundColor;
let Hei = document.getElementById("b").offsetHeight
let wid = document.getElementById("b").offsetWidth
let ball = document.getElementById("b")

function clickball() {
    Hei += 10;
    wid += 10;
    ball.style.height = Hei + "px";
    ball.style.width = wid + "px";
    if (now >= 2)
        now = -1;
    ball.style.backgroundColor = color[++now]
    if (Hei >= 420 || wid >= 420) {
        ball.style.height = 200+"px"
        ball.style.width = 200+"px"
    }
}

function outball() {
    Hei -= 5;
    wid -= 5;
    ball.style.height = Hei + "px";
    ball.style.width = wid + "px";
     if ( now <= 0 )
            now = 3;
    ball.style.backgroundColor = color[--now]
    if (Hei <= 200|| wid <= 200) {
        ball.style.height = 200+"px"
        ball.style.width = 200+"px"
    }
}