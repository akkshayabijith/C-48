class Sonic{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.coinsCollected = null;
    }

    getCount(){
        var getPlayerCount = database.ref('playerCount');
        getPlayerCount.on('value',(data)=>{
             playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            'playerCount': count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            'name':this.name,
            'distance':this.distance,
            'coins':this.coinsCollected
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on('value',(data)=>{
            allPlayers = data.val();
        })
    }
}