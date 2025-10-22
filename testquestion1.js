let xpos;
let xSpeed;

function setup(){
    createCanvas(600, 400);
    xpos = 300;
    xSpeed = 5;
    background(0, 0, 200);
    fill('limegreen');
}

function draw(){
    background(0, 0, 200);
    circle(xpos, 200, 50);
    xpos = xpos + xSpeed;
    if ( xpos === 575 ){
        xSpeed = xSpeed * -1;
    }
    if ( xpos === 25 ){
        xSpeed = xSpeed * -1;
    }
}

