// это задание у меня не вышло
// пытался сделать, "запушив" полученные через цикл элементы в новые массивы для четиных и нечетных, но как-то не вышло

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = [];
let oddArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
        for (let i = 0; i < evenArr.length; i++) {
            console.log(evenArr.length);
        }
    }
}