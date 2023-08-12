var times = 60;
var score = 0;
var dets = 0;
function makeBubble() {
    var clutter = "";

    for (let i = 0; i < 85; i++) {
        clutter += `<div class="bubble" onclick=scorey();>${Math.floor(Math.random() * 101)}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function time() {
    var timess = setInterval(function () {
        if (times > 0) {
            times--;
            document.querySelector("#clock").innerHTML = times;
        }
        else {
            clearInterval(timess);
            document.querySelector("#pbottom").innerHTML = `<h2>Your score is ${score}</h2>`;
        }
    }, 1000);
}

function newHit(blepts) {
    document.querySelector("#hitVal").innerHTML = blepts;
}
function scorey(dets) {
    document.querySelector("#score").innerHTML = dets;
    makeBubble();
}
newHit(0);
document.querySelector("#pbottom").addEventListener("click", function (dets) {
    if (dets.target.textContent < 101) {
        score += Number(dets.target.textContent);
        scorey(score);
        newHit(dets.target.textContent);
    }
})
makeBubble();
time();