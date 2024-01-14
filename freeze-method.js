// freeze method 

// Object.freeze() JavaScript mein ek method hai jo ek object ko "freeze" kar deta hai, yaani us object ko modify hone se puri tarah se rok deta hai.

// Jab aap Object.freeze() ko kisi object par apply karte hain, toh aap us object ko puri tarah se immutable (badalne se mukt) bana dete hain. Yani us object ke properties ki values change nahi ho sakti, aur na hi koi naye properties add ki ja sakti hain.

// Yeh method object ko read-only banata hai, jisme existing properties ki values change nahi ho sakti hain aur new properties add nahi ki ja sakti hain.

const frozenObject = {
    pro1: 42,
    pro2: "hello"
}

Object.freeze(frozenObject)


// Trying to modify existing property
frozenObject.prop1 = 100; // Won't change prop1

// Trying to add a new property
frozenObject.prop3 = 'New Property'; // Won't add prop3

console.log(frozenObject); // Output: { prop1: 42, prop2: 'Hello' }