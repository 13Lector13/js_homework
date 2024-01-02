// ДЗ 1: 

var a = prompt('Введите любое значение', 'Значение');
function funcIsNaN() {
    if (a = Number(a)) {
        console.log('a = ' + a + ' - является числовым значением')
    } else if (a === 0) { 
        console.log('a = ' + a + ' - является числовым значением')
    } else {
        console.log('a = ' + a + ' - не является числомым значением')
    }
}
funcIsNaN()

// ------------------------------------------------------------------------
// ДЗ 2:


var str = String(str);
var symbol = String(symbol);
var amount = Number(amount);
var bool = Boolean(bool);

function pad(str,symbol,amount,bool) {
    if (bool === true) {
        if (str.length < amount) {
            var rez = Number.parseInt(amount - str.length);
            var symbolRep = symbol.repeat(rez);
            console.log(symbolRep + str);
        } else {
            console.log(str);
        }
    } else if (bool === false) {
        if (str.length < amount) {
            var rez = Number.parseInt(amount - str.length);
            var symbolRep = symbol.repeat(rez);
            console.log(str + symbolRep);
        } else {
            console.log(str);
        }
    } else {
        console.log('Error');
    }
}

// ------------------------------------------------------------------------------
// ДЗ 3:

function checkProbabilityTheory(count) {

//    count = Math.floor(Math.random() * 50) + 11;
    
    var odd = 0;
    var even = 0;
    
    for (var i = 0; i < count; i++) {
        var rnd = Math.floor(Math.random() * 1000) + 101;
        if (rnd % 2 === 0) {
            even++;
        } else {
            odd++
        }
    }

    var percent = even / odd * 100;

    console.log('Количество сгенерированных чисел: ' + count);
    console.log('Количество парных чисел: ' + even);
    console.log('Количество непарных чисел: ' + odd);
    console.log('Процент парных к непарным: ' + percent + '%');

}