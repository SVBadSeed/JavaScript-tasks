// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// Обычный способ был бы таким:
//
// // по имени (Ann, John, Pete)
//     users.sort((a, b) => a.name > b.name ? 1 : -1);
//
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
//
// Можем ли мы сделать его короче, например вот таким?
//
//     users.sort(byField('name'));
// users.sort(byField('age'));
//
// То есть чтобы вместо функции мы просто писали byField(fieldName).
//
//     Напишите функцию byField, которая может быть использована для этого.

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
]

const byField = (fieldName) => (a, b) => a[fieldName] > b[fieldName] ? 1 : -1

users.sort(byField('age'))
users.forEach(user => console.log(user.age))  // показываем результат относительно пройденной сортировки

users.sort(byField('name'))
users.forEach(user => console.log(user.name)) // показываем результат относительно пройденной сортировки

users.sort(byField('surname'))
users.forEach(user => console.log(user.surname)) // показываем результат относительно пройденной сортировки