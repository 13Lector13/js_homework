// Много гуглил, никак не мог разобраться во многих вопросах, к примеру, почему в переменной line у нас пустая строка. Крутился, вертелся и без результата. 
// Плюнул и пошел к чату GPT.Там получил подробные объяснения

// Первый вариант:

/*
let rows = 5;
function drawTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += '* ';
        }
        console.log(line);
    }
}
drawTriangle(rows)
*/

// Второй вариант:
let rows = 5;
function drawTriangle(rows) {
    let i = 0;
    // Внешний цикл отвечает за количество строк в треугольнике
    while (i < rows) {
        let line = '';
        let j = 0;
        // Внутренний цикл добавляет звездочки в строку
        while (j <= i) {
            line += '* ';
            j++;
        }
        console.log(line);
        i++;
    }
}
drawTriangle(rows)