// Случайное целое число от min до max
// важность: 2
//
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//
//     Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//
//     Пример работы функции:


const randomInteger = (a, b) => {
    let random = a + Math.random() * (b + 1 - a)
    return Math.floor(random)
}

console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))