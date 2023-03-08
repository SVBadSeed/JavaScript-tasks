// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";


const ucFirst = (str) => {
    return console.log(str.replace(str[0], str[0].toUpperCase()))
}

ucFirst('cерега')