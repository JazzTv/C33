class Slingshot 
{
    constructor(body1,point2)
    {
        var options = {
            bodyA : bird.body,
            pointB : point2,
            stiffness : .03,
            length : 10
      }
    this.Slingshot = Constraint.create(options);
    World.add(world,this.Slingshot);

    this.sling1 = loadImage ("sprites/sling1.png");
    this.sling2 = loadImage ("sprites/sling2.png");
    this.sling3 = loadImage ("sprites/sling3.png");
    }
    display ()
    { 
        image (this.sling1,280,85,40,140);
        image (this.sling2,252,75,40,100);
       if ( this.Slingshot.bodyA)
        { var pointA = this.Slingshot.bodyA.position;
          var pointB = this.Slingshot.pointB;
            
          push ()
          if (pointA.x < 250)
          {
          strokeWeight (3);
          stroke ("#401E0B");
          line (pointA.x - 15, pointA.y, pointB.x - 30, pointB.y + 30);
          line (pointA.x + 20, pointA.y, pointB.x + 15, pointB.y + 30);
          image(this.sling3, pointA.x- 30, pointA.y - 10,20,30);
          } else
          {
              strokeWeight (7);
              stroke ("#401E0B");
              line (pointA.x - 15, pointA.y, pointB.x - 30, pointB.y + 30);
              line (pointA.x + 20, pointA.y, pointB.x + 15, pointB.y + 30);
              image(this.sling3, pointA.x + 10, pointA.y - 10,20,30);
          } 
          pop ()
        } 
    } 
    
    fly ()
    {
        Matter.Body.applyForce (this.Slingshot.bodyA, this.Slingshot.bodyA.position, {x: 150, y: 100})
        this.Slingshot.bodyA = null;
    } 

    attach (body1)
    {
        this.Slingshot.bodyA = body1;
    }
} 
