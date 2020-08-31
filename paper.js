class Paper{

    constructor(){
        var options={
            
            isStatic:false,
            friction : 0.5,
            restitution : 0.3,
            density : 1.2
        
        }
        this.image=loadImage("paper.png")
        this.body=Matter.Bodies.circle(350,595,10,options);
        World.add(world,this.body)
        
    }

display(){

    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x,this.body.position.y,10,10)

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40);
    
}

}