class Box {
    constructor(x, y, width, height)
     { var option = { 
        restituition: 0.4,
        friction:0.0

         }
          this.body = Bodies.rectangle(x,y,width,height, option);
           this.width = width;
            this.height = height;
            this.Visibility = 255;
             World.add(world, this.body);
             }
             
display(){
    console.log("Speed"+this.body.speed)
    if (this.body.speed<3){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    strokeWeight(4);
    stroke(255,234,0);
    fill(27,27,224);
    rect(0,0,this.width,this.height); 
    pop();
        } 
     else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
       // tint(255,this.Visiblity);
        //image(this.body,this.body.position.x, this.body.position.y,50,50)
        pop();
    }
}
}