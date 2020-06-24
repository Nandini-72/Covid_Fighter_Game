function load_images(){
    //player , virus , gem
    
}
function init(){
    cvs = document.getElementById('mycanvas');
    W = cvs.width = 1252;
    H = cvs.height = 516;
    pen = cvs.getContext('2d');
    
    box = {
        x:150,
        y:50,
        w:60,
        h:60,
        speed:10,
    };
}
function draw(){
   pen.clearRect(0,0,W,H);
   pen.fillRect(box.x,box.y,box.w,box.h);
}
function update(){
    box.y += box.speed;
    if(box.y > H-box.h || box.y <= 0){
        box.speed   *= -1;
    }
}
function gameloop(){
    draw();
    update();
}
load_images();
init();
var f = setInterval(gameloop,100);