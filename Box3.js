class Box3 extends BaseClass {
    constructor(x, y, width, height)
    {
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
    }

    display()
    {
        fill("yellow");
        super.display();
    }
  }
  