class Home{
    Add(){
        let a=2;
        let a1=2;
        console.log("add "+(a+a1));
    }
    Mul(){
        let a=12;
        let a1=2;
        console.log("Mul "+(a*a1));
    } 
}
class Home2  extends Home{
    Add1(){
        let a=2;
        let a1=2;
        console.log("add "+(a+a1));
    }
    Mul112(){
        let a=12;
        let a1=2;
        console.log("Mul "+(a*a1));
    }
}

h=new Home2();
h.Add();
h.Mul();
h.Mul112();
 