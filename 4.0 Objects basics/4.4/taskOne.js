// Здесь функция makeUser возвращает объект.
//
//     Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?


// будет ошибка, тк в данном случае this вызывается не как метод, а как функция. (makeUser())