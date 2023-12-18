var measure = String(measure); // вместо measure вставьте значение 'км','ч' или 'кг'
var amount = Number(amount);  // вместо amount введите любое число. К сожалению, отрицательные значения тоже вписываются

switch (measure) {
    case 'км':
        console.log((amount * 1000) + ' метров');
        break;
    case 'ч':
        console.log((amount * 60) + ' минут');
        break;
    case 'кг':
        console.log((amount * 1000) + ' грамм');
        break;
    default:
        console.log('Введите корректные данные');
}

