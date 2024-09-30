// __proto__ | prototype

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//         this.state = {}
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//
//     stopEngine = () => {
//         console.log(`Stop ${this.brand}`)
//     }
//
// }

// const car1 = new Car('bmw', 200);
// const car2 = new Car('kia', 200);
// const car3 = new Car('toyota');

// console.log(car1)
// console.log(car2)
// car1.stopEngine()
// car2.stopEngine()

// car1.startEngine.bind(car3)();
// car1.stopEngine.bind(car3)();

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
        this.state = {}
    }

    startEngine() {
        console.log(`Start ${this.brand}`)
    }

    stopEngine = () => {
        console.log(`Stop ${this.brand}`)
    }

}

const car1 = new Car('bmw', 200);
const car2 = new Car('bmw', 200);

// console.log(car1 === car2)
// console.log(car1.brand === car2.brand)
// console.log(car1.state === car2.state)
// console.log(car1.startEngine === car2.startEngine)
// console.log(car1.stopEngine === car2.stopEngine)

// console.log(car1.__proto__ === Car.prototype) // proto ссылается на прототип объекта
//
// const arr = new Array()
// console.log(arr.__proto__ === Array.prototype)
//
// const arr2 = []
//
// console.log(arr2.__proto__ === Array.prototype)

// const obj = {}

// console.log(obj.__proto__ === Object.prototype);

// const str = 'string'

// console.log(str.__proto__ === String.prototype);

// const car3 = new car1.constructor('kia', 220)

// console.log(car3)

// console.log(Array.__proto__ === Function.prototype)
// console.log(Number.__proto__ === Function.prototype)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.__proto__ === Function.prototype)

console.log(Car.prototype.__proto__ === Object.prototype);
console.log(car1.__proto__.__proto__ === Object.prototype)
console.log(car1.__proto__.__proto__.__proto__)

