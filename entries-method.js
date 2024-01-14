// entries method 

// Object.entries() JavaScript mein ek method hai jo ek object ke saare key-value pairs ko ek array mein return karta hai.

// Yeh method ek object ke saare enumerable (jinhe iterate kiya ja sakta hai) own properties ke [key, value] pairs ko ek array mein laata hai. Yeh pairs specified order mein return hote hain, lekin yeh guarantee nahi karta ki wo order creation order ke mutabik hoga.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const entries = Object.entries(person);
  console.log(entries);
  // Output:
  // [
  //   ['name', 'John'],
  //   ['age', 30],
  //   ['city', 'New York']
  // ]