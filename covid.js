function load_images(){
    //player , virus , gem
    enemy_img = new Image();
    enemy_img.src = "Assets/enemy.png";
    
    player_img = new Image();
    player_img.src = "Assets/fighter.png";
    
    gem_img = new Image;
    gem_img.src = "Assets/vac1.png";
    
}
function init(){
    cvs = document.getElementById('mycanvas');
    W = cvs.width = 1252;
    H = cvs.height = 516;
    pen = cvs.getContext('2d');
    
    e1 = {
        x:200,
        y:50,
        w:100,
        h:100,
        speed:20,
    };
     e2 = {
        x:450,
        y:150,
        w:100,
        h:100,
        speed:35,
    };
    
    
     e3 = {
        x:700,
        y:200,
        w:100,
        h:100,
        speed:40,
    };
    e4 = {
        x:900,
        y:100,
        w:100,
        h:100,
        speed:30,
    };
    
    enemy = [e1,e2,e3,e4];
    player = {
        x:20,
        y:H/2,
        w:150,
        h:150,
        speed:30,
        moving:"false"
    }
    gem = {
        x:W-100,
        y:H/2,
        w:100,
        h:100,
    }
    document.addEventListener('keydown',function(e){
        console.log("HEy")
        if(e.key == "ArrowRight"){
            console.log("Pressed");
            player.moving = true;
        }
        if(e.key == "ArrowLeft"){
            console.log("Relaessed");
            player.moving = false;
        }
    })
}
function draw(){
   pen.clearRect(0,0,W,H);
   //pen.fillRect(box.x,box.y,box.w,box.h);
  //pen.drawImage(enemy_img,box.x,box.y,box.w,box.h);
    for(let i = 0; i<enemy.length; i++){
     pen.drawImage(enemy_img,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }
    // draw the player
    pen.drawImage(player_img,player.x,player.y,player.w,player.h);
}
function update(){
//    box.y += box.speed;
//    if(box.y > H-box.h || box.y <= 0){
//        box.speed   *= -1;
//    }
    // if player is moving
    if(player.moving == true){
        player.x += player.speed;
        
    }
    
    for(let i = 0; i<enemy.length; i++){
        enemy[i].y += enemy[i].speed;
        if(enemy[i].y > H-enemy[i].h || enemy[i].y <= 0){
            enemy[i].speed *= -1;
        }
    }
}
function gameloop(){
    draw();
    update();
}
load_images();
init();
var f = setInterval(gameloop,100);