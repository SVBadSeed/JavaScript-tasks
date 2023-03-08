// Есть массив сообщений такой же, как и в предыдущем задании.
//
//     let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];
//
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
//
//     В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
// Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
//
//     P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.


let messages1 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

let timeMessages = new WeakMap()

console.log(timeMessages.set(messages1[0], new Date()))  // new Date() создает дату (т.е мы как бы получаем дату написания "сообщения")
console.log(timeMessages.set(messages1[1], new Date()))
console.log(timeMessages.set(messages1[2], new Date()))

