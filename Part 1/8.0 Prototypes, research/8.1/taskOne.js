// В приведённом ниже коде создаются и изменяются два объекта.
//
//     Какие значения показываются в процессе выполнения кода?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // ? (1) тут будет TRUE.тк мы буквально дали jumps: true

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) тут будет  null, ибо мы удалили true из rabbit и теперь оно берется из animal

delete animal.jumps;

alert(rabbit.jumps); // ? (3) ну и тут будет undefined, тк мы удалили даже null

// Должно быть 3 ответа.