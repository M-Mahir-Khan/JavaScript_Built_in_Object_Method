// toString method

// Object.prototype.toString() JavaScript mein ek method hai jo har object ke saath use hota hai. Jab aap is method ko kisi object par call karte hain, toh yeh method us object ka string representation return karta hai.

// Is method ko commonly override kiya jata hai taaki custom string representations create kiye ja sakein. Default behavior mein, yeh method "[object Object]" return karta hai.

const person = {
    name:"Alice",
    age:25,
    toString:function(){
        return `${this.name} is ${this.age} years old`
    }
}

console.log(person.toString); // Alece is 25 year old