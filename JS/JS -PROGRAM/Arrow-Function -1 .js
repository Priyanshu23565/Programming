

## ✅ **Arrow Function in JavaScript**

### 📘 **Kya hota hai?**

Arrow function ek **shorter syntax** hai functions likhne ke liye.
Ye **`function` keyword** ki jagah **`=>` (arrow)** ka use karta hai.

---

## 🔹 Syntax

### 🔸 Normal Function:

```js
function add(a, b) {
  return a + b;
}
```

### 🔸 Arrow Function:

```js
const add = (a, b) => {
  return a + b;
};
```

### 🔸 One-line Arrow Function (short form):

```js
const add = (a, b) => a + b;
```

---

## 💻 Example Code with Output

```js
const greet = () => {
  return "Hello, World!";
};

console.log(greet());
```

### 📤 Output:

```
Hello, World!
```

---

## 🧠 Explanation:

* `const greet = () => {...}`
  Ye ek arrow function hai jisme koi parameter nahi hai.
* Function `Hello, World!` return karta hai.
* `console.log(greet())` us value ko print karta hai.

---

## 🔹 More Examples

### ✅ 1. With Parameters:

```js
const multiply = (x, y) => x * y;

console.log(multiply(3, 4));
```

**Output:** `12`

---

### ✅ 2. Single Parameter:

```js
const square = n => n * n;

console.log(square(5));
```

**Output:** `25`

---

### ✅ 3. Without Parameter:

```js
const sayHi = () => "Hi!";

console.log(sayHi());
```

**Output:** `Hi!`

---

## ⚠️ Arrow Function Ki Limitations

| Feature             | Arrow Function            | Normal Function |
| ------------------- | ------------------------- | --------------- |
| `this` ka behaviour | ❌ Alag hota hai (lexical) | ✅ Apna context  |
| Constructor (`new`) | ❌ Nahi ban sakta          | ✅ Ban sakta hai |
| `arguments` object  | ❌ Available nahi hota     | ✅ Hota hai      |

---

### ❗ Example: `this` difference

```js
const person = {
  name: "Rahul",
  greet: () => {
    console.log("Hi, " + this.name);
  }
};

person.greet();  // Output: Hi, undefined
```

#### 🧠 Kyun?

* `this.name` ka reference global scope ka hai, object ka nahi.
* Arrow function `this` ko bind nahi karta.

