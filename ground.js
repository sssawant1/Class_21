class Ground{
    constructor(x,y,w,h){
        let options ={
            isStatic:true,
        };
    this.body =Bodies.rectangle(x,y,w,h,options);
    //this width belongs to the "w" shown in the input of the constructor 
    //of THIS ground class
    this.w =w;
    this.h =h;
    World.add(world,this.body);

    }
    show(){
        //refer to the marvel push and pop functions
        var pos =this.body.position;
        // "push" is used to insert a particular behavior (e.g. angle) 
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x,pos.y,this.w, this.h);
        // removing the angle
        pop();

    }
}