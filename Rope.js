class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
        }
      
        this.pointB = pointB
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    
    fly(){
      
        this.sling.bodyA = null;
    }

    display(){
    
        if(this.sling.bodyA){
            
           push()
                strokeWeight(0);
                line(this.sling.bodyA.position.x ,this.sling.bodyA.position.y, this.pointB.x ,this.pointB.y);
               pop()
          
       
           
            
           
        }
    }
    
}