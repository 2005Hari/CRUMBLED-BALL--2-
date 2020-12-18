class Dustbin {
    constructor(x, y, width, height) {
      this.bin= loadImage ("dustbingreen.png")
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);

      

      image(this.bin,this.body.position.x, this.body.position.y, this.width, this. height);
    }
  };
