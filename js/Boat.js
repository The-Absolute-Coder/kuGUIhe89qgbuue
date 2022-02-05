class Boat {

  constructor(x, y, width, height,boatpos) {
    var options = {
      Friction:0.99 + 0.01,
      Density:0.99 + 0.01
    };
    this.width = width;
    this.height = height;
    this.boatpos = boatpos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
    this.image = loadImage("./assets/boat.png")
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image,0,this.boatpos,this.width,this.height);
    pop();
  }
}
