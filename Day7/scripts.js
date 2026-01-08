// POLYMORPHISM (Method Overriding)


class Animal {
    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog says Bow");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat says Meow");
    }
}

let a1 = new Animal();
let a2 = new Dog();
let a3 = new Cat();

a1.speak();
a2.speak();
a3.speak();


// CONSTRUCTOR

class Student {
    constructor() {
        console.log("Hello, I'm constructor");
    }
}

let s1 = new Student();



// THIS KEYWORD

class StudentName {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

let s2 = new StudentName("Rahul");
s2.sayName();



// ENCAPSULATION

class Bank {
    #balance = 0; // private variable

    addMoney(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let SBI = new Bank();

SBI.addMoney(100);
console.log(SBI.getBalance());

SBI.addMoney(240);
console.log(SBI.getBalance());


// ABSTRACTION

// Without abstraction
class Car {
    start() {
        console.log("Check Battery");
        console.log("Check Fuel");
        console.log("Start Engine");
        console.log("Car Started");
    }
}

let car = new Car();
car.start();


// With abstraction
class Bike {
    start() {
        this.checkBattery();
        this.checkFuel();
        this.startEngine();
        console.log("Bike started");
    }

    checkBattery() {
        console.log("Check Battery");
    }

    checkFuel() {
        console.log("Check Fuel");
    }

    startEngine() {
        console.log("Start Engine");
    }
}

let bike = new Bike();
bike.start();
