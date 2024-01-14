// preventExtension ethod

// Object.preventExtensions() JavaScript mein ek method hai jo ek object ko "extend" hone se rok deta hai, yaani us object mein new properties add karne se rokta hai.

// Jab aap Object.preventExtensions() ko kisi object par apply karte hain, toh aap us object mein new properties add karne se rokte hain. Lekin aap existing properties ki values ko modify kar sakte hain.

// Yeh method object ko extend hone se protect karta hai, lekin uske existing properties ki values change karne mein allow karta hai.

const extendObject = {
    pro1:43,
    pro2:"Hello"
};

Object.preventExtensions(extendObject);


// Trying to add a new property
extendedObject.prop3 = 'New Property'; // Won't add prop3

// Modifying existing property
extendedObject.prop1 = 100; // Allowed

// Deleting an existing property
delete extendedObject.prop2; // Allowed

console.log(extendedObject); // Output: { prop1: 100 }