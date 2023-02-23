// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:


function Calculator() {
    this.read = function () {
        this.x = +prompt('')
        this.c = +prompt('')  // обязательно добавляем + перед промпт, чтобы вводились числа и считались. Иначе будут плюсоваться строки.
    }
    this.sum = function () {
        return this.x + this.c
    }
    this.mul = function () {
        return this.x * this.c
    }
}


let calculator = new Calculator()
calculator.read()

alert("Sum=" + calculator.sum())
alert("Mul=" + calculator.mul())