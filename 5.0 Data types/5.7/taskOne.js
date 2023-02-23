// Допустим, у нас есть массив arr.
//
//     Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
//
//     Например:
//
// function unique(arr) {
//     /* ваш код */
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O
//
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
//
//     P.P.S. Используйте Set для хранения уникальных значений.


let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

const unique = (arr) => {
    const newSet = new Set(arr)
    return console.log(Array.from(newSet))  // array.from(newSet) мы делаем для того, чтобы из коллекции set появился массив.
}

unique(values)