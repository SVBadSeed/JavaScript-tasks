// Пусть arr – массив строк.
//
//     Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//
//     Например:

function unique(arr) {
    return arr.filter((item, index, array) => index === array.indexOf(item))
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O