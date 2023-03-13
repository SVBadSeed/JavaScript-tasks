// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
//
//     Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
//
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ? покажет 0
alert(counter2()); // ? покажет 1. Тк мы создаем 2 переменные и вызываем функции, то они самостоятельные. Они не ЗАВИСЯТ друг от друга




