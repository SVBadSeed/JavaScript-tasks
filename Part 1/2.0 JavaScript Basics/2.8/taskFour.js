// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
//
//     Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
//
// В чём ошибка? Исправьте её. Результат должен быть 3.

let a1 = prompt("Первое число?", 1)
let b2 = prompt("Второе число?", 2)

alert(+a1 + +b2) // дело в том, что промпт возвращает ответ в видел строки. те и 1, и 2 становятся '1' '2'
// просто ставим + перед а и б в конечном алерте и получаем нужные там чиса (1 + 2) = 3