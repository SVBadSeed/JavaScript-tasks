// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
//     Сделайте два варианта решения.
//
//     Используя setInterval.
//     Используя рекурсивный setTimeout.
//

const printNumber = (from = 0, to = 10) => {
    console.log(from)
    from++
    (from <= to) ? setTimeout(printNumber, 1000, from, to) : console.log('счетчик закончил счет')
}


printNumber() // прогоняем функцию через рекурсию

const printNumbersInterval = (from = 5, to = 10) => {
    let current = from

    let timerId = setInterval(() => {
        console.log(current)
        if (current === to) {
            clearInterval(timerId)
        }
        current++
    }, 1000) // задержка 1 секунда
}

printNumbersInterval(5, 10)

const printNumbersRec = (from = 5, to = 10) => {
    let current = from

    console.log(from, to)
    setTimeout(function go() {
        console.log(current)
        if (current < to) {
            setTimeout(go, 1000)
        }
        current++
    }, 1000)  // задержка 1 секунда
}

printNumbersRec()