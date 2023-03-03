import { hello, funcB, User } from "./moduler.js";

// アロー関数
function fn(num) {
    return num * 2;
};
console.log(fn(2))



const fnArrow = (num) => {
    return num * 2;
};
console.log(fnArrow(2))


const fnArrowObj = (num) => ({ result: num * 2 });
console.log(fnArrowObj(2))


// ESModule export import
hello();
funcB();
const user = new User("R216YU");
user.hello()


// callback function
function print(callback) {
    const result= callback();
    console.log(result);
};

function sayHi() {
    return "say Hi!";
};

print(sayHi);