class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y, 10, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, 10);
      //ellipse(0, 0, this.r, this.r);
      //image(this.image, pos.x, pos.y, 10, 10);
    }
  };
