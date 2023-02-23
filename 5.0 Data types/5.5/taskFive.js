// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//
//     Создайте функцию copySorted(arr), которая будет возвращать такую копию.


let arrow2 = ["HTML", "JavaScript", "CSS"]

const copySorted = (arr) => {
    return arr.slice().sort()  // возвращаем новый массив через слайс и сортируем его.
}


let sorted = copySorted(arrow2)

alert(sorted) // CSS, HTML, JavaScript
alert(arrow2)// HTML, JavaScript, CSS (без изменений)