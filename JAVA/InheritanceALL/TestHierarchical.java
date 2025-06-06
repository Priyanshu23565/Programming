package InheritanceALL;
// Parent class
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}
// Child class 1
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}
// Child class 2
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}
public class TestHierarchical {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // From Animal class
        d.bark();  // Dog class

        Cat c = new Cat();
        c.eat();   // From Animal class
        c.meow();  // Cat class
    }
}
