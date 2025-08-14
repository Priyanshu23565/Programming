🔷 3. Hierarchical Inheritance

One parent class, but multiple child classes inherit from it.
code ==> 


class Parent {
    showParent() {
        console.log("I am Parent");
    }
}

class Child1 extends Parent {
    showChild1() {
        console.log("I am Child 1");
    }
}

class Child2 extends Parent {
    showChild2() {
        console.log("I am Child 2");
    }
}

let c1 = new Child1();
c1.showParent();   // I am Parent
c1.showChild1();   // I am Child 1

let c2 = new Child2();
c2.showParent();   // I am Parent
c2.showChild2();   // I am Child 2
