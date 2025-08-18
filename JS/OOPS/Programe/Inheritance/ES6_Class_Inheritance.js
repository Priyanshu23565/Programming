
// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//  greet() {
//     console.log("Hello from Pare121212nt");
//   }
// }

// const child = new Child();
// child.greet(); 

// ------------------------------------------>


// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   greet() {
//     super.greet();           // Parent का greet() कॉल कर रहा हूँ
//     console.log("Hello from Child");
//   }
// }

// const child = new Child();
// child.greet();

// --------------------------------------------------->

class Parent {
  greet() {
    console.log("Hello from Parent");
  }
  greet1() {
    console.log("Hello from Parent 1");
  }
}

class Child extends Parent {
  greet1() {
    // super.greet();  
     super.greet1();  
    console.log("Hello from Child");
  }
}

const child = new Child();
child.greet1();

