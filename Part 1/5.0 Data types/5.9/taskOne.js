// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
//     Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
const sumSalaries = (salaries) => {
    let sum = 0
    for (let item of Object.values(salaries)) {  // c помощью Object.values перебираем массив и получаем свойства ключей,
        // т.е зарплаты, затем плюсуем в отдельныую переменную и возвращаем получившееся
        console.log(item)
        sum += item
    }
    return sum
}


console.log(sumSalaries(salaries))