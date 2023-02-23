// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
//
//     Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
//
//     Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
//
//     let room = {
//         number: 23
//     };
//
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     /* ваш код */
// }));
//
// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

let room = {
    number: 23
}

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
}

room.occupiedBy = meetup
meetup.self = meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key !== "" && value === meetup) ? undefined : value
}))  // перевордим в json формат, и вставляем туда наш объект и делаем функцию на основе объекта митап.
// делаем проверки если ключ не равен пустой срочке или велью не равен метап(соот), то будет андефайд ИЛИ велью

