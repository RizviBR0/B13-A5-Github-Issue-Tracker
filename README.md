# 🐙 GitHub Issue Tracker

A simple GitHub Issue Tracker application built as part of **Batch 13 — Assignment 5** at Programming Hero. Log in with demo credentials, browse issues, and manage them from a clean dashboard.

---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

| Field    | Value      |
| -------- | ---------- |
| Username | `admin`    |
| Password | `admin123` |

---

## ❓ Question & Answer

### 1️⃣ What is the difference between `var`, `let`, and `const`?

| Keyword | Scope           | Hoisting Behaviour | Reassignable? | Redeclarable? |
| ------- | --------------- | ------------------ | ------------- | ------------- |
| `var`   | Function-scoped | ✅ Yes             | ✅ Yes        | ✅ Yes        |
| `let`   | Block-scoped    | ⚠️ TDZ             | ✅ Yes        | ❌ No         |
| `const` | Block-scoped    | ⚠️ TDZ             | ❌ No         | ❌ No         |

> `TDZ`: Temporal Dead Zone. It is a JS concept to prevent bugs. If you try to access the variable while it is in the TDZ, JavaScript will throw a ReferenceError.

```js
// var example
var x = 10;
var x = 20; // Re-declaration allowed
x = 30; // Update allowed
console.log(x); // Output: 30
```

```js
// let example
let y = 10;
// let y = 20;  // Re-declaration NOT allowed
y = 25; // Update allowed
console.log(y); // Output: 25
```

```js
// const example
const z = 10;
// z = 20;      // Re-assignment NOT allowed
console.log(z); // Output: 10
```

```js
// Block scope demonstration
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // Works (var is function/global scoped)
console.log(b); // Error (let is block scoped)
console.log(c); // Error (const is block scoped)
```

---

### 2️⃣ What is the spread operator (`...`)?

The spread operator (...) in JavaScript provides a simple and expressive way to expand elements from arrays, strings, or objects.It is incredibly useful for copying, merging, and passing data. It helps make code cleaner.

```js
const copy = [...original]; // Copy an array
const merged = { ...obj1, ...obj2 }; // Merge objects
Math.max(...numbers); // Spread as arguments
```

---

### 3️⃣ What is the difference between `map()`, `filter()`, and `forEach()`?

map, filter and forEach is used to loop through an array item by item, the crucial difference lies in what they return and what you use them for.

| Method    | Primary Purpose         | What it Returns                       |
| --------- | ----------------------- | ------------------------------------- |
| `map`     | Transform data          | A new array of the exact same length. |
| `filter`  | Selecting/Removing data | A new array which is usually shorter  |
| `forEach` | Execute action          | Undefined                             |

---

### 4️⃣ What is an arrow function?

Arrow Functions allow a shorter syntax for function expressions. It does the same thing as a regular function expression. In arrow functions the return keyword and the curly brackets can be ommited if the function is a single statement. Also arrow functions automatically inherit "this" from their surrounding scope, preventing the context from being "lost" when used inside callbacks.

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

---

### 5️⃣ What are template literals?

Template literals are a modern way to create strings in JavaScript using backticks (`) instead of traditional single (') or double (") quotes. Using this we can easily inject variables or JS expression directly into the string using ${}.

```js
const name = "World";
console.log(`Hello, ${name}!`);
```
