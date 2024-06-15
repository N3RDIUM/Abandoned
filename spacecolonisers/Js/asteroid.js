class Asteroid extends BaseClass {
    constructor(){
      super(0,0,50,50,false);
      this.options.friction = 0
      this.options.restitution = 0.0
      this.x = random(-10000,10000)
      this.y = random(-10000,10000)
      this.rad = random(130,100)
      this.body = Matter.Bodies.circle(this.x, this.y, this.rad/2-10, this.options)
      World.add(world, this.body);
      super.width = this.rad
      super.height = this.rad
      this.image = loadImage("Images/Asteroid.png");
      this.explosion = loadImage('Images/explode.png')
      this.rotation=random(-0.04,0.04)
      this.name = random(45,20357034786)
      this.sp = createSprite(this.x,this.y,this,this.width,this.height)
      this.sp.visible = false
    }
  
    display(){
      super.display();
      Matter.Body.setAngularVelocity(this.body, this.rotation);
      Matter.Body.applyForce(this.body,this.body.position,{x:random(-3,3),y:random(-3,3)})
      this.sp.x=this.body.position.x
      this.sp.y=this.body.position.y
    }
}