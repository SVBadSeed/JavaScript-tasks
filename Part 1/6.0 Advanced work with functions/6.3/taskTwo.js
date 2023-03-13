// Здесь объект счётчика создан с помощью функции-конструктора.
//
//     Будет ли он работать? Что покажет?
//
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

alert(counter.up()); // ?  будет 1, тк 0++
alert(counter.up()); // ? будет 2, тк 1++
alert(counter.down()); // ? и будет 1, тк 2-- (все работает по порядку, ибо создана одна переменная как конструктор)

