class Chain{
    constructor(bodyA,pointB){
        var options ={bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:200}
        
    this.chain = Constraint.create(options)
    World.add(world,this.chain)
    this.pointB = pointB
    }
  display(){
      strokeWeight(4)
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    
  }    
}