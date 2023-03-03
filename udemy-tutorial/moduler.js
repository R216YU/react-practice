const hello = () => {
    console.log("Hello!");
};


const funcB = () => {
    console.log("funcB output");
};


class User {
    constructor(name) {
        this.name = name;
    }
    
    hello() {
        console.log(this.name)
    }
};

export { hello, funcB, User }