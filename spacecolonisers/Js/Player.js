class Player extends BaseClass {
    constructor(){
      super(windowWidth/2,windowHeight+30,100,150,true);
      this.image = loadImage("Images/spaceship.png");
      Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-25})
      this.av=0
    }
  
    display(){
      super.display();
      if(keyDown('W')){Matter.Body.applyForce(this.body,this.body.position,{x:0,y:-5})}
      if(keyDown('S')){Matter.Body.applyForce(this.body,this.body.position,{x:0,y:5})}
      if(keyDown('A')){Matter.Body.applyForce(this.body,this.body.position,{x:-5,y:0})}
      if(keyDown('D')){Matter.Body.applyForce(this.body,this.body.position,{x:5,y:0})}
      if(keyDown('Q')){this.av-=0.004}
      if(keyDown('E')){this.av+=0.004}
      camera.on()
      Matter.Body.setAngularVelocity(this.body,this.av)
      this.av *= 0.986
    }

    updatePos(){
      camera.position.x = (camera.position.x+this.body.position.x)/2
      camera.position.y = (camera.position.y+this.body.position.y)/2
    }
}
