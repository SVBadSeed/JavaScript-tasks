// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
//     Функция должна быть нечувствительна к регистру:
//
//     checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false


const checkSpam = (str) => {
    return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')

}

console.log(checkSpam('viaGra'))
console.log(checkSpam('XxX'))
console.log(checkSpam('hahaah'))