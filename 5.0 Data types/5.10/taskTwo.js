// У нас есть объект salaries с зарплатами:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//
//     P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

const topSalary = (salaries) => {
    let max = 0
    let zero = null

    for (const [name, price] of Object.entries(salaries)) { // вытаскиваем имя и деньги из объекта и делаем из объекта массив
        // сравниваем 0 < от денег у людей (100, 300, 250) и получаем больше всех у пете
        // присваиваем максимальные деньги переменной(это нам и нужно)
        // и делаем zero имененем Pete
        if (max < price) {
            max = price
            zero = name
        }
    }

    return zero
}
console.log(topSalary(salaries))