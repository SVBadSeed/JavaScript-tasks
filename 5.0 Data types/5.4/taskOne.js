// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
console.log(fruits)

// что в fruits?
alert(fruits.length); // в фрутс добавился банан, что очевидно, тк мы сделали пуш банан в массив.
// (шоппинг графт это ссылка на фруис, это один массив)