// object.value method

// object.value method JavaScript mein use hota hai jab aap ek object ke values ko retrieve karna chahte hain. Yeh method ek object ke saare values ko ek array mein return karta hai.

const person = {
    name: "John",
    age: 30,
    city: "New York"
}

const value = Object.values(person);
console.log(value);