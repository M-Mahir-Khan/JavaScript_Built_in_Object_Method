// Object.is method 

// Object.is() JavaScript mein ek method hai jo do values ko compare karta hai aur unki equality ko determine karta hai.

// Yeh method dono values ke equal hone ki conditions ko evaluate karta hai aur comparison ke result ko boolean value mein return karta hai. Yeh comparison strict equality ke basis par hota hai, lekin kuch cases mein Object.is() traditional === operator se thoda alag behave karta hai.

// Yeh method comparison rules ko is tarah define karta hai:

// Agar dono values same hain (same primitive value ya same reference object), tab true return hota hai.
// NaN aur NaN ko compare karne par true return hota hai, jo ki === operator mein nahi hota.
// Positive aur negative zero ko compare karne par bhi true return hota hai, jo ki === operator mein nahi hota.
// Yahan ek example hai Object.is() ka use karne ka:/

console.log(Object.is(5, 5)); // Output: true
console.log(Object.is('hello', 'hello')); // Output: true
console.log(Object.is({}, {})); // Output: false (different objects)

console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0)); // Output: false

const obj = { name: 'John' };
const sameObj = obj;
console.log(Object.is(obj, sameObj)); // Output: true (same reference)