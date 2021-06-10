class Rubber {

constructor(BodyA,BodyB){

var options={

    bodyA : BodyA,
    bodyB : BodyB,
    stiffness : 0.04

}

this.band = Matter.Constraint.create (options)
World.add(world,this.band)




}

display(){

var ba = this.band.bodyA.position
var bb = this.band.bodyB.position

line(ba.x,ba.y,bb.x,bb.y)


}




}