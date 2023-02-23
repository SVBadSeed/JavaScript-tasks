// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
//     Должно работать так:
//
//     let schedule = {};
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false


const schedule = {
    '8:30': 'get up'
}

const isEmpty = (obj) => {
    for (let key in obj) {
        return console.log(false)
    }

    return console.log(true)
}


isEmpty(schedule)