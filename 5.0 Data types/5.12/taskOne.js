// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
}

let json = JSON.parse(JSON.stringify(user)) // сначала переводим в json формат, а потом парсим в новый объект

console.log(json)