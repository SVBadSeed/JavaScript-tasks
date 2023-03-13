// Давайте создадим новый объект rabbit:

    function Rabbit(name) {
        this.name = name;
    }
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет

//     rabbit.sayHi();  // тк это прототип, то он через . выведет Rabbit
// Rabbit.prototype.sayHi();  а тут выведет неопределенность, тк это и так прототип и обращаться к нему через .prototype не надо
// Object.getPrototypeOf(rabbit).sayHi(); а тут выведет неопределенность, тк это и так прототип и обращаться к нему через .prototype не надо
// rabbit.__proto__.sayHi(); а тут выведет неопределенность, тк это и так прототип и обращаться к нему через .prototype не надо