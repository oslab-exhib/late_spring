// Sequence 1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('screen1');
var ctx = canvas.getContext('2d');

img.src = "./images/crow/crow0.png";

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        if (imgNum > 86) {
            imgNum = 0;
        }
        
        player(imgNum);
        imgNum++;
    }, 30);
}

function player(num) {
    img.src = "./images/crow/crow" + num + ".png";
}

img.addEventListener('load' ,function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});


// Sequence 2
var imgNum2 = 0;
var img2 = new Image();
var canvas2 = document.getElementById('screen2');
var ctx2 = canvas2.getContext('2d');
var scrollYPos;

img2.src = "./images/text/0.jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY/20);
    
    // play once
//    if (scrollYPos == 0) scrollYPos = 0;
//    if (scrollYPos > 63) scrollYPos = 63;
    
    // play continuously
    scrollYPos = scrollYPos % 63;
    player2(scrollYPos);
})

function player2(num) {
    img2.src = "./images/text/" + num + ".jpg";
}

img2.addEventListener('load' ,function(e) {
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.drawImage(img2, 0, 0);
});












