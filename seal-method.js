// seal method

// Object.seal() JavaScript mein ek method hai jo ek object ko "sealed" (bandh) kar deta hai, yaani us object ke properties ko modify hone se rok deta hai.

// Jab aap Object.seal() ko kisi object par apply karte hain, toh aap us object ke properties ko change karne se rokte hain, lekin aap existing properties ki valu/es ko modify kar sakte hain.

// Yeh method ek object ko modify hone se protect karta hai, lekin uske properties ki values change karne mein allow karta hai. New properties add ya remove nahi kiye ja sakte jab object sealed hai.

const sealedObject = {
    pop1:42,
    pop2:"hello"
}
Object.seal(sealedObject);

// Trying to add a new property
sealObject.pop3 = "New Property"; // Won't add pop3

//Modigying existing property
sealedObject.pop1 = 100; // Allowed

//deleting ann existing property
delete sealedObject.pop2 // not allowed

console.log(sealedObject);// output: { prop1: 100, prop2: 'Hello' }