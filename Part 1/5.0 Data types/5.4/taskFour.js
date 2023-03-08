// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


const arr = []

function sumInput() {
    let number,
        sum = 0
    do {
        number = prompt('Введите какое нибудь число!!', 0)
        if (isFinite(number)) {
            arr.push(number)
        } else {
            return 0
        }
    } while (number !== null)

    for (let i = 0; i < arr.length; i++) {
        sum += (+arr[i])
    }
    return sum
}

console.log(sumInput())