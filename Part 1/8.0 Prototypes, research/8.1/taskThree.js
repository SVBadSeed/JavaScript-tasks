// Объект rabbit наследует от объекта animal.
//
//     Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

    let animal = {
        eat() {
            this.full = true;
        }
    };

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // rabbit. тк при указании прототипа мы как мы отдаем функцию rabbit и this используется уже в контексте нашего объекта rabbit
// ибо вот тут rabbit.eat() мы ищем эту функцию и тянем ее в rabbit