// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
//
//     К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
//
//     Функция должна надёжно работать при значении days=365 и больших значениях:
//
//     let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
//
// P.S. Функция не должна изменять переданный ей объект date.

let date2 = new Date(2015, 0, 2)
const getDateAgo = (date, days) => {
    let dateDuplicate = new Date(date)
    dateDuplicate.setDate(date.getDate() - days)

    return dateDuplicate.getDate()
}


console.log(getDateAgo(date2, 1)) // 1
console.log(getDateAgo(date2, 5)) // 28
console.log(getDateAgo(date2, 365)) // 2