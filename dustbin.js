class Dustbin{

    constructor(){

        var options={
            isStatic:true
        }

      this.image=loadImage("dustbingreen.png")
      this.body=Matter.Bodies.rectangle(650,580,100,20,options);
      
      this.rightBody=Matter.Bodies.rectangle(700,530,20,100,options)
      World.add(world,this.rightBody)

      this.leftBody=Matter.Bodies.rectangle(600,530,20,100,options)
      World.add(world,this.leftBody)
     
	
	//box1= Bodies.rectangle(570,580,160,20,{isStatic:true});
	//World.add(world,box1)
	

	
	//box=Bodies.rectangle(650,540,20,100,{isStatic:true});
	//World.add(world,box)
	


	
    //box2=Bodies.rectangle(490,540,20,100,{isStatic:true});
	//World.add(world,box2)
     // this.width=60
      //this.height=50
      World.add(world,this.body)
    }

    display(){

        imageMode(CENTER);
        image(this.image,650,540,[100],[100]);

       
        
    }

}