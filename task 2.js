const func = a => {
    if (typeof a === 'number' && a <= 1000) {
        if (a / a === 1 && a / 1 === a) {
            console.log('число простое');
        } else {
            console.log('введите простое число');
        }
    } else {
        console.log('Данные неверны');
    }
}
func(20);