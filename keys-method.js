// keys method

// Object.keys() JavaScript mein ek method hai jo ek object ke enumerable (jinhe iterate kiya ja sakta hai) properties ke names ko ek array mein return karta hai.

// is method ka use karke aap kisi bhi object ke keys ko iterate kar sakte hain. Yeh method sirf object ke own (directly attached) properties ke names ko hi laata hai, inherited properties ko nahi.

const car = {
    brand:"toyota",
    model:"Corolla",
    year:2024
}
const keys = Object.keys(car);
console.log(keys); // Output: ['brand', 'model', 'year']