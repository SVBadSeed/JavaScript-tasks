// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//
//     Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
//
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
//     Например:
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
//
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
const aclean = (array) => {
    let map = new Map()
    array.forEach((item) => {
        let key = item.toLowerCase().split("").sort().join("")   // сплитом делим каждый элемент на отдельные буквы,
        // потом сортируем и приблавяем join(соединяем снова в одно слова, чтобы до сплита)
        map.set(key, item) // ну и записываем по ключу то что получили сверху (key) значение перебранного элемента массива item
    })

    return console.log(Array.from(map.values()))
}

aclean(arr)