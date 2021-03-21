class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1,
            
        }
        
        
        //this.ballDiameter=this.radius*2;
        this.radius=130;
        this.x=x;
        this.y=y
        
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world,this.body)

    }
    display(){
        var position = this.body.position;
       
        ellipseMode(CENTER);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
       
    }
}