// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
//     Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
//
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

const camelize = (str) => {
    return str
        .split('-') // через сплит мы удаляет с массива - и получаем 3 разных элеменета массива(в наших случаях)
        .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1) // перебираем имеющийся
            // массив и на его основе создаем новый и делаем му заглавные буквы
        )
        .join('') // ну и на последок соединяем элементы в одно целое чтобы получить oMyGod
}


camelize('o-my-god')
camelize('list-style-image')