class Snow{
    constructor(x,y,r1,r2) {

        var options = {
            'restitution':1,
            'friction':0,
        }
        this.r1 = r1;
        this.r2 = r2;
        this.body = Bodies.circle(x, y,this.r1, options);
        
        World.add(world, this.body);

      }
      display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("white")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r1, this.r2);
        Matter.Body.setVelocity(this.body,{x:0.01,y:0.5})
        pop();
      }
  }