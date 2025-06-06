package InheritanceALL;
interface A {
    void methodA();
}
interface B {
    void methodB();
}
// Class C implements two interfaces
class C implements A, B {
    public void methodA() {
        System.out.println("Method A");
    }
    public void methodB() {
        System.out.println("Method B");
    }
}
// Class D inherits class C and interface A again (just example)
class D extends C {
    void methodD() {
        System.out.println("Method D");
    }
}
public class TestHybrid {
    public static void main(String[] args) {
        D obj = new D();
        obj.methodA();
        obj.methodB();
        obj.methodD();
    }
}

