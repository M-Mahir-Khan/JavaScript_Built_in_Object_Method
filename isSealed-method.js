// isSealed method 
// Object.isSealed() JavaScript mein ek method hai jo check karta hai ki kya ek object sealed hai ya nahi, yaani ki kya us object ke properties ko modify karna bandh kiya gaya hai.

// Jab aap Object.isSealed() method ko kisi object par apply karte hain, toh yeh method check karta hai ki kya us object ke properties ko modify karne se rok laga hai (seal kiya gaya hai) ya nahi.

// Yeh method boolean value return karta hai:

// true agar object sealed hai aur uske properties ko modify karne se roka gaya hai.
// false agar object sealed nahi hai ya fir usme koi changes karne se rok nahi hai.

const object1 ={
    property1:42,
}
console.log(Object.isSealed(object1)); // false

Object.seal(object1)
console.log(Object.isSealed(object1)); // true