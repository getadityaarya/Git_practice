/*
Task 1 (Polymorphism): Create an Employee class with getSalary(). Create FullTimeEmployee and
PartTimeEmployee classes that override getSalary().
*/
class Employee{
    getSalary(){
        console.log("Salary is 45000")
    }
}
class FullTimeEmployee extends Employee{
    getSalary(){
        console.log("Salary is 95000")
    }
}
class PartTimeEmployee extends Employee{
    getSalary(){
        console.log("Salary is 25000")
    }
}
let E1 = new Employee();
let E2 = new FullTimeEmployee();
let E3 = new PartTimeEmployee();

E1.getSalary();
E2.getSalary();
E3.getSalary();

/*
Task 2 (Polymorphism): Create a Notification class with send(). Create EmailNotification and
SMSNotification classes with different behavior.
*/
class Notification{
    send(){
        console.log("Notification Send")
    }
}
class EmailNotification extends Notification{
    send(){
        console.log("Email Send")
    }
}
class SMSNotification extends Notification{
    send(){
        console.log("SMS Send")
    }
}
let A1 = new Notification()
let A2 = new EmailNotification()
let A3 = new SMSNotification()
A1.send();
A2.send();
A3.send();

/*
Task 3 (Polymorphism): Create a Shape class with area(). Create Rectangle and Circle classes that
calculate area differently.
*/
class Shape{
    area(){
        console.log("This is a geometric shape");
    }
}
class Rectangle extends Shape{
    area(){
        console.log("Formula of Rectangle is: 2(l+b)");
    }
}
class Circle extends Shape{
    area(){
        console.log("Area of Circle is: 3.14*radius*radius");
    }
}
let B1 = new Shape()
let B2 = new Rectangle()
let B3 = new Circle()
B1.area();
B2.area();
B3.area();
/*
Task 4 (Encapsulation): Create an ATM class with a private PIN. Create methods to set and verify
the PIN. Direct access should not be allowed.
*/
class ATM {
    #pin;

    setPin(userInput) {
        this.#pin = userInput;
    }

    verifyPin(userInput) {
        return this.#pin === userInput;
    }
}

const atm = new ATM();
atm.setPin(100);

console.log(atm.verifyPin(100)); // true
console.log(atm.verifyPin(123)); // false

/*
Task 5 (Encapsulation): Create a Mobile class with a private battery level. Create methods to
charge and check battery percentage.
*/

class Mobile {
    #batteryLevel = 46;

    chargeBattery() {
        this.#batteryLevel = 100;
    }

    checkBattery() {
        return this.#batteryLevel;
    }
}
const mob = new Mobile();

console.log(mob.checkBattery()); // 46
mob.chargeBattery();
console.log(mob.checkBattery()); // 100

/*
Task 6 (Abstraction): Create a WashingMachine class with startWash(). Internally handle water,
washing, and drying.
 */
class WashingMachine{
    startWash(){
            this.water();
            this.washing();
            this.drying();
            console.log("The cloth is washed.")
    }
    water(){
        console.log("Add water.");
    }
    washing(){
        console.log("Wash Cloth");
    }
    drying(){
        console.log("Dry Cloth");
    }
}
let cloth = new WashingMachine();
cloth.startWash()    

/*
Task 7 (Abstraction): Create an OnlineOrder class with placeOrder(). Internally handle payment and
confirmation.
*/
class OnlineOrder {
    placeOrder() {
        this.#processPayment();
        this.#sendConfirmation();
        console.log("Order placed successfully.");
    }

    #processPayment() {
        console.log("Payment processed.");
    }

    #sendConfirmation() {
        console.log("Order confirmation sent.");
    }
}

const order = new OnlineOrder();
order.placeOrder();

/*
Task 8 (Abstraction): Create a MusicPlayer class with playSong(). Internally load and play music.
*/
class MusicPlayer{
    playSong(){
        this.#load();
        this.#playSong();
        console.log("You are listening to Indi Music.")
    }
    #load(){
        console.log("Loading this Song")
    }
    #playSong(){
        console.log("Play Music")
    }
}
const music = new MusicPlayer();
music.playSong();


/*
Task 9 (Mixed): Create a GameCharacter class with attack(). Create different characters with
different attack styles
*/
class GameCharacter{
    attack(){
        this.#char1();
        this.#char2();
        this.#char3();
        console.log("Your type is been Assigned.")
    }
    #char1(){
        console.log("Air-Bender");
    }
    #char2(){
        console.log("Water-Bender");
    }
    #char3(){
        console.log("Fire-Bender");
    }
}
const type = new GameCharacter();
type.attack();