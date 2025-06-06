package InheritanceALL;

// Parent class
class Parent {
    void show() {
        System.out.println("This is parent class");
    }
}

// Child class inherits Parent
class Child extends Parent {
    void display() {
        System.out.println("This is child class");
    }
}

public class TestSingle {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();    // Parent class method
        c.display(); // Child class method
    }
}

