// У нас есть объект:
//
//     let user = {
//         name: "John",
//         years: 30
//     };
//
// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
//
// Пример переменных после вашего присваивания:
//
//     let user = { name: "John", years: 30 };
//
// // ваш код должен быть с левой стороны:
// // ... = user
//
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let user = {
    name: "John",
    years: 30
}


const {name, years: age, isAdmin = false} = user // вытаскивем свойства с помощью деструктуризации, years меняем на age и
// isAdmin = false (хотя в начальном объекте все равн будет years и не будет isAdmin


console.log(name)
console.log(age)
console.log(isAdmin)