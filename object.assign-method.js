// Object.assign() ek JavaScript method hai jo ek ya multiple source objects se destination object ko create karta hai. Ye method destination object ke properties ko merge karta hai source objects ke properties se, aur ye properties ke values ko copy karta hai. Agar koi property same key se already destination object me exist karti hai, to Object.assign() us property ki value ko overwrite kar dega. Is method se ek naya object banta hai, jo source objects ke properties se populate hota hai.

const obj1 = {
    name:"john",
    age:29,
    designation:"SE"
}

const obj2 = {
    comany:"Google"
}

const newObj = Object.assign(obj2,obj1);
console.log(newObj);    //{comany: 'Google', name: 'john', age: 29, designation: 'SE'}