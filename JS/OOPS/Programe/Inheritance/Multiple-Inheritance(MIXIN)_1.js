ERRORR  --> 

// class A {
//     showA() {
//         console.log("Class A");
//     }
// }
// class B {
//     showB() {
//         console.log("Class B");
//     }
// }

// class C extends A, B {
//     showC() {
//         console.log("Class C");
//     }
// }

// let obj = new C();
// obj.showA();
// obj.showB();
// obj.showC();



  --> MIXIN METHOD 


CanFly = {
    fly() {
        console.log("✈️ I can fly");
    }
};
CanSwim = {
    swim() {
        console.log("🏊 I can swim");
    }
};
CanSwim2 = {
    swim2() {
        console.log("I can swim2");
    }
};
class Duck {}

Object.assign(Duck.prototype, CanFly, CanSwim,CanSwim2);


let d = new Duck();
d.fly(); 
d.swim();  
d.swim2();


