class Game{
    constructor(){
        
    }

    getState(){
        database.ref('gameState').on('value',(data)=>{
            gameState = data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            'gameState':state
        });
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            sonic = new Sonic();
            sonic.getCount();
        }

        player1 = createSprite(200,500,40,40);
        player1.addImage(playerImg);
        player1.scale = 0.4;

        player2 = createSprite(400,500,40,40);
        player2.addImage(playerImg2);
        player2.scale = 0.4;

        players = [player1, player2];
    }

    play(){
        form.hide();
        Sonic.getPlayerInfo();
        image(bg2,width/2,height/2,windowWidth,windowHeight);
        drawSprites();
        var x = 200;
        var y = 500;
        var index = 0;

        for(var plr in allPlayers){
            index++;
            x = 500-allPlayers[plr].distance;
            y = 500;

            players[index-1].x = x;
            players[index-1].y =y;

            if(index === sonic.index){
                textSize(15);
                fill("yellow");
                text(allPlayers[plr].name,x-30,y-50);
            }
        }

        if(keyDown("RIGHT_ARROW") && sonic.index !== null){
        sonic.distance -= 5;
        sonic.update();
        }

        if(keyDown("LEFT_ARROW") && sonic.index !== null){
            sonic.distance += 5;
            sonic.update();
        } 

        if(frameCount%50 === 0){
            obstacles = createSprite(random(100,width-100),-30,10,10);
            obstacles.addImage(obstaclesImg);
            obstacles.scale = 0.5;
            obstacles.lifetime = 700;
            obstacles.velocityY = 5;
            obstaclesG.add(obstacles);
        }

        if(frameCount%90 === 0){
            coins = createSprite(random(100,width-100),-30,10,10);
            coins.addImage(coinsImg);
            coins.scale = 0.5;
            coins.lifetime = 700;
            coins.velocityY = 5;
            coinsG.add(coins);
        }

        if(sonic.index !== null){
            for(var i = 0;i<obstaclesG.length;i++){
                if(obstaclesG.get(i).isTouching(players)){
                    obstaclesG.get(i).destroy();
                }
            }
        }
    }
}