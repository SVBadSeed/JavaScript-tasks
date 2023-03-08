// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема:
// БЛОК СХЕМА на сайте.

// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

let value = prompt('Кто вы?')

if (value === 'Админ') {
    let password = prompt('Введите пароль')

    if (password === 'Я главный') {
        alert('Здравствуйте!')
        console.log('Здравствуйте!')
    } else if (password === '' || password === null) {
        alert('Отменено')
        console.log('Отменено')
    } else {
        alert('Я вас не знаю')
        console.log('Я вас не знаю')
    }
}