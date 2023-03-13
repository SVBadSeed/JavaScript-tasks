// Что выведет функция?
//
function f() {
    alert(this); // [object Window] контекст функции фиксирован, поэтому вызов вызывает null
}

let user = {
    g: f.bind(null)
};

user.g();



