// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
// пока посетитель его не введёт.
//
//     Функция должна возвращать числовое значение.
//
//     Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
//     В этом случае функция должна вернуть null.


const readNumber = () => {
    let number

    while (!Number.isFinite(number)) {
        number = +prompt('введите число!')
    }

    return number === null || number === 0 ? null : number
}

console.log(readNumber())