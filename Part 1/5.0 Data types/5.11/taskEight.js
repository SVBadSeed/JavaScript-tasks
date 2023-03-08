// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//
//     Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
//
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


const getSecondsToTomorrow = () => {
    let timeNow = new Date()
    let hour = timeNow.getHours()
    let minutes = timeNow.getMinutes()
    let seconds = timeNow.getSeconds()
    let fullSecondsToday = (hour * 60 + minutes) * 60 + seconds
    let fullSecondsInADay = 86400

    return fullSecondsInADay - fullSecondsToday  // находим сколько секунд сейчас прошло через перевод все в секунды и вычитаем от полного кол-ва секунд
}


console.log(getSecondsToTomorrow())