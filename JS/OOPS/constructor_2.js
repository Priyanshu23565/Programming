class Student {
  constructor(name, age, fatherName, motherName,classA) {
    this.name = name;
    this.age = age;
    this.fatherName = fatherName;
    this.motherName = motherName;
    this.classA = classA;
  }
}

let s1 = new Student("Aman", 15, "Ramesh", "Sita",12);
let s2 = new Student("Riya", 16, "Sanjay", "Geeta",7);
let s3 = new Student("Anu", 55, "Mahesh", "Lata",12);
let s4 = new Student("Rubi", 27, "Raj", "Meena",12);
let s5 = new Student("Ronak", 37, "Amit", "Sunita",11);

console.log(s1, s2, s3, s4, s5);