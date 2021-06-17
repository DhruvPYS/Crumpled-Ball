class Ground {
    constructor (x,y)
    {
   
    this.body = Bodies.rectangle(x,y, 800, 50, {isStatic: true})
    
    World.add(world, this.body)
    }
    
    display()
    {      fill ("green")

    rectMode(CENTER)
    rect(this.body.position.x, this.body.position.y, 800, 50)
    
    
    
    }
}