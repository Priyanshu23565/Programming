class Grandparent {
    showGrandparent() {
        console.log("I am Grandparent");
    }
}

class Parent extends Grandparent {
    showParent() {
        console.log("I am Parent");
    }
}

class Child extends Parent {
    showChild() {
        console.log("I am Child");
    }
}

let c = new Child();
c.showChild();
c.showParent();
c.showGrandparent();
