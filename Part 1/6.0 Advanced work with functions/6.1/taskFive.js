// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
//     Сделайте два решения: с использованием цикла и через рекурсию.

let list5 = {
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

const printListWhile5 = (list) => {
    let newList = {value: list.value, next: null}
    list = list.next

    while (list) {
        newList = {value: list.value, next: newList}
        list = list.next
    }

    while (newList) {
        console.log(newList.value)
        newList = newList.next
    }
}

printListWhile5(list5)

const printListReverse = (list) => {
    if (list.next) {
        printListReverse(list.next)
    }

    console.log(list.value) // пробегаем по списку, запоминаем и показываем элементы.
}

printListReverse(list5)