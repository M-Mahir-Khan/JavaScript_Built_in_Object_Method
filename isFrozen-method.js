// /frozen method 


// Object.isFrozen() JavaScript mein ek method hai jo check karta hai ki kya ek object frozen hai ya nahi, yaani ki kya us object ko puri tarah se modify hone se roka gaya hai.

// Jab aap Object.isFrozen() method ko kisi obje/ct par apply karte hain, toh yeh method check karta hai ki object ko Object.freeze() method se freeze kiya gaya hai ya nahi.

// Yeh method boolean value return karta hai

const frozenObject = {
    prop1: 42,
    prop2: 'Hello'
  };
  
  Object.freeze(frozenObject);
  
  console.log(Object.isFrozen(frozenObject)); // Output: true