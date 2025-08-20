class Person {
  #name 
  #age; // private field = encapsulated

  constructor(name,age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  ageis(){
    return this.#age;
  }
}

const p = new Person("Amit",12);
console.log(p.getName()); // ✅ Amit
console.log(p.ageis()); // ✅ 12
// console.log(p.#name);     // ❌ Error: Private field can't be accessed
