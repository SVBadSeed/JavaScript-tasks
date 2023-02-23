// Возможно ли создать функции A и B, чтобы new A() == new B()?
//
//     function A() { ... }
//     function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true
//
// Если да – приведите пример вашего кода.


const user = {}

function A() {
    return user
}

function B() {
    return user
}

let a = new A()
let b = new B()

console.log(new A() === new B()) // да, тк функция возвращает объект и вместе с объеквтом обращает this.
// поэтому функции буквально имею одинаковый объект USER

