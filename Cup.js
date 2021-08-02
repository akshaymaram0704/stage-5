class Cup{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
            'friction':1.0,
            'density':1.0,
            isStatic: false

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("cup.png");
        this.Visiblity = 255
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        console.log(this.body.speed)
        if(this.body.speed<70){
        imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);

        }
       else{
            World.remove(world,this.body)
       }
        
        pop();
      }
}