package InheritanceALL;

interface Printable {
    void print();
}
interface Showable {
    void show();
}
class Demo implements Printable, Showable {
    public void print() {
        System.out.println("Print method");
    }
    public void show() {
        System.out.println("Show method");
    }
}

public class TestMultiple {
    public static void main(String[] args) {
        Demo obj = new Demo();
        obj.print();
        obj.show();
    }
}
