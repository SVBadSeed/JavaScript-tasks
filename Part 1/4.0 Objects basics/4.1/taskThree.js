// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
//
// const user = {
//     name: "John"
// };
//
// // это будет работать?
// user.name = "Pete";


const user1 = {
    name: "John",
}

user1.name = "Pete"
console.log(user1.name) // разумеется, это сработает. const не разрешает менять саму перемененную, а не свойства объекта.