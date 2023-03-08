// Создайте функцию-конструктор Accumulator(startingValue).
//
//     Объект, который она создаёт, должен уметь следующее:
//
//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//
//     Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
//
//     Ниже вы можете посмотреть работу кода:


function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function () {
        this.value += +prompt('добавляем')
    }
}


let accumulator = new Accumulator(1) // начальное значение 1
console.log(accumulator)
accumulator.read() // прибавляет введённое пользователем значение к текущему значению
console.log(accumulator.value) // выведет сумму этих значений в консольку
alert(accumulator.value) // выведет сумму этих значений