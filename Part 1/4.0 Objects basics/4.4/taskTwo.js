// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//
//     let calculator = {
//     // ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calculator = {
    read() {
        prompt('')
        prompt('')
    },
    sum() {
        return this.b + this.a
    },
    mul() {
        return this.b * this.a
    }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())