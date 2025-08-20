/*
🔷 Kya hota hai?
•	Same method name, different parameters.
•	
•	Compiler decide karta hai kaun sa method run karega.
•	
•	Java me hota hai, lekin JavaScript me nahi.


⚠️ JavaScript me kyu nahi?
•	JS me function overloading officially supported nahi hai.
•	Agar same naam se do function likhe, to last wala overwrite kar deta hai.

*/

function greet(name) {
  console.log("Hello " + name);
}

function greet(name, time) {
  console.log("Good " + time + ", " + name);
}

greet("Amit"); 
greet("Amit",67); 
