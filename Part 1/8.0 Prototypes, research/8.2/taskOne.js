// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
//
//     Сначала у нас есть такой код:

function Rabbit() {
}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit2() {
}

Rabbit2.prototype = {
    eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype = {};

alert(rabbit2.eats); // тут будет true, тк  мы просто переобределяем Rabbit2 на {}

// …А если код такой (заменили одну строчку)?

function Rabbit3() {
}

Rabbit3.prototype = {
    eats: true
};

let rabbit3 = new Rabbit3();

Rabbit3.prototype.eats = false;

alert(rabbit3.eats); // тут будет false тк мы передали как бы объект и указали ключу eats false

// Или такой (заменили одну строчку)?

function Rabbit4() {
}

Rabbit4.prototype = {
    eats: true
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

alert(rabbit4.eats); //  true. мы создаем новую переменную раббит4 и ничего не передаем. УДАЛЯЕМ мы как раз таки в пустой переменной,
// там попрусту нет свйсоват eats. так что будет true

// Или, наконец, такой:

function Rabbit5() {
}

Rabbit5.prototype = {
    eats: true
};

let rabbit5 = new Rabbit5();

delete Rabbit5.prototype.eats;

alert(rabbit5.eats); //  а вот уже тут мы удаляем свойство из прототипа, поэтому, будет undefined