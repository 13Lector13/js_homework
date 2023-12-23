// ДЗ 1:

// Много гуглил, никак не мог разобраться во многих вопросах, к примеру, почему в переменной line у нас пустая строка. Крутился, вертелся и без результата. 
// Плюнул и пошел к чату GPT.Там получил подробные объяснения


// Первый вариант:


function drawTriangle(rows, symbol) {
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += symbol + ' ';
        }
        console.log(line);
    }
}
drawTriangle(rows, symbol)

//  ---------------------------------------------------------------
// Второй вариант:

// let rows = 5;
function drawTriangle(rows, symbol) {
    let i = 0;
    // Внешний цикл отвечает за количество строк в треугольнике
    while (i < rows) {
        let line = '';
        let j = 0;
        // Внутренний цикл добавляет звездочки в строку
        while (j <= i) {
            line += symbol + ' ';
            j++;
        }
        console.log(line);
        i++;
    }
}
drawTriangle(rows, symbol)



//  -----------------------------------------------------------------------------------------------------------------------------------------------
// ДЗ 2:

let sum = 0;
for (i = 0; i <= 100; i++) {
    if (!(i % 3 === 0))
        sum += i;   
    // Тут я решение с переменной sum подсмотрел снова у чата GPT. Долго сидел и думал как его сделать. Дошел до варианта i += i и напрочь застрял тут. 
}
console.log(sum)

// 3367


//  -----------------------------------------------------------------------------------------------------------------------------------------------
// ДЗ 3:

//function pow(x, y) {
//    console.log(x ** y);
//}
//pow(x, y)

// Выше код - это я не заметил условие про **
//  ---------------------------------------------------------------


function pow(x, y) {
    let result = 1;
    for (i = 0; i < y; i++) {
        result *= x;
    }
    console.log(result);
}
pow(x, y)

// Долго крутился вокруг подобного кода выше. Не мог довести до ума. Опять обратился к чату GPT. Он мне предложил введение переменной result. Не сразу понял зачем она нам
// Почему нельзя записать просто x *= x. Спустя битву с чатом за объяснение, я понял. И я понял почему код некорректно отрабатывал у меня, не по условию. 
// Так же поймал чат на ошибке. Он выдал интересный код, но я, не понимая зачем там переменная result, попросил его написать подобный код, но без нее. И он написал код идентичный моему первому. 
// И написал, что если будем использовать x = 2, y =3, то результат будет 8. Нет. Он там был стабильно 16. Вместо result он использовал переменную подобную x. (base *= base у него было).
// И код был идентичен моему ошибочному. Вылгядело это примерно так:
/*
function pow(x, y) {
    for (i = 1; i < y; i++) {
        x *= x;
    }
    return x;
}
pow(x, y)
*/
// У меня был идентичный код выше до обращения к чату, только i = 0 было.
// Когда я ему указывал на ошибку, то он извенялся и снова писал тот же код с переменной result. Я снова задавал вопрос, а можно ли без нее. Ну и все по кругу с ошибками с его стороны.
// Так что да, нужно осторожно с чатом GPT. 