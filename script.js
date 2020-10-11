class User {
    constructor(obj) {
        this.name = obj.name
        this.age = obj.age
        this.foll = obj.foll
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.foll} folloers`)
    }
};

const mango = new User ({
    name: 'mango',
    age: 3,
    foll: 30
})