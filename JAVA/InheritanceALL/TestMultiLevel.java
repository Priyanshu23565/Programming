package InheritanceALL;

// Grandparent class
class Grandparent {
    void greet() {
        System.out.println("Hello from Grandparent");
    }
}
// Parent class inherits Grandparent
class Parent12 extends Grandparent {
    void message() {
        System.out.println("Hello from Parent");
    }
}
// Child class inherits Parent
class Child2 extends Parent12 {
    void show() {
        System.out.println("Hello from Child");
    }
}

public class TestMultiLevel {
    public static void main(String[] args) {
        Child2 c = new Child2();
        c.greet();   // Grandparent method
        c.message(); // Parent method
        c.show();    // Child method
    }
}
