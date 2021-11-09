class Form{
    constructor(){
        this.title = createElement('h1');
        this.button = createButton('Play');
        this.greetings = createElement('h1');
        this.input = createInput('Name');
    }

    display(){
        this.title.html("The Super Sonic Run");
        this.title.position(width/2-100,100);
        this.title.style('color','red');

        this.input.position(this.title.x+70,350);

        this.button.position(width/2+35,this.input.y+50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            sonic.name = this.input.value();

            this.greetings.html("Hello " + sonic.name);
            this.greetings.position(windowWidth/2,windowHeight/2);

            playerCount += 1;
            sonic.index = playerCount;
            sonic.updateCount(playerCount);
            sonic.update(); 
            
        })
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }
}