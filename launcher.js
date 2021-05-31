class launcher{
    constructor(BodyA, pointB){
        var options={
            bodyA : BodyA ,
            pointB: pointB,
            stiffness : 0.004 ,
            length : 100
        }
        this.pointB = pointB ;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    // makes the stone fly away and leave the constraint
    fly(){
        this.launcher.bodyA = null ;
    }
    // re-attaches the stone to constraint
    attach(){
        
    }
    display(){
        if(this.launcher.bodyA){  
        var pointA = this.launcher.bodyA.position ;
        var pointB = this.pointB ;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}}