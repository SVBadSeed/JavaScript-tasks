// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.
//
//     Можем ли мы сделать так?
//
//     let obj2 = new obj.constructor();
//
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.


function User(name) {
    this.name = name
}

let user = new User('vladimir')
let user2 = new user.constructor('Serega')

console.log(user2.name) // выведет серегу, потому что у нас функция является конструктором


function User2(name) {
    this.name = name
}

User2.prototype = {}

let user1 = new User2('vladimir')
let user3 = new user1.constructor('Serega')

console.log(user3.name) // undefined, а тут не получитс, потому что мы создаем объект в прототипе и это уже не конструктор