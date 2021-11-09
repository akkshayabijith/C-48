var database;
var canvas;
var playerCount = 0;
var bg,bg2;
var form,game,sonic;
var gameState = 0;
var allPlayers;
var player1, player2, playerImg, playerImg2, players;
var obstacles,obstaclesImg,obstaclesG;
var coins,coinsImg,coinsG;

function preload(){
    bg = loadImage("rivals.png");
    bg2 = loadImage("Bg3.jpg");
    playerImg = loadImage("sonic2.png");
    playerImg2 = loadImage("sonic2red.png");
    obstaclesImg = loadImage("land.png");
    coinsImg = loadImage("donet.png")
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    obsaclesG = new Group();
}

function draw(){
    imageMode(CENTER);
    image(bg,width/2,height/2,width,height);

    if(playerCount === 2){
        game.updateState(1);
    }

    if(gameState === 1){
        game.play();
    }
}