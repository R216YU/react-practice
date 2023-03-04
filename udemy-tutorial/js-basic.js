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


// DOM操作　イベントリスナ

const h1Element = document.querySelector("h1");
console.log(h1Element);
h1Element.textContent = "変更後 Hi"
console.log(h1Element.textContent);

const btnElement = document.querySelector("button");
btnElement.addEventListener("click", (e) => {
    console.dir(e.target.textContent);
    console.log("hello")
});


// 
const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i < arry.length; i += 1) {
    newArry.push(arry[i] * 2);
};

console.log(newArry);

const newArry2 = arry.map(val => {
    return val * 2;
})

console.log(newArry2);