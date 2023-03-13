// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// Напишите функцию printList(list), которая выводит элементы списка по одному.
//
//     Сделайте два варианта решения: используя цикл и через рекурсию.
//
//     Как лучше: с рекурсией или без?


let list4 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printListWhile(list) {
    let tmp = list

    while (tmp) {
        console.log(tmp.value)   // опять же через цикл менее затратно, поэтому, он эффективней.
        tmp = tmp.next
    }
}

printListWhile(list4)

const printList = (list) => {

    console.log(list.value)

    if (list.next) {
        console.log(list.next)
        printList(list.next) // выводим так же как и сверху вывели для value
    }
}

printList(list4)