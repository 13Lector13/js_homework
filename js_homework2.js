
var age = prompt('Укажите ваш возраст', "Возраст");
age = Number(age);

/*
if (age%10 === 1 && age != 11 && age != 111) {
    console.log(age + ' год');
} else if (age%10 > 1 && age%10 < 5) {
    console.log(age + " года")
} else if (age%10 > 4 && age%10 <= 9 || age%10 === 0) {
    console.log(age + " лет")
} else {
    console.log("Введите корректные данные");
}
*/

if (age%10 === 1 && age != 11 && age != 111) {
    console.log(age + ' год');
} else if ((age % 10 > 1 && age % 10 <= 9 || age % 10 === 0 || age === 11) && age != 0 || age != -0) {
    if (age > 10 && age < 20) console.log(age + " лет");
    if (age % 10 > 1 && age % 10 < 5 && age > 21) console.log(age + " года");
    if (age%10 > 4 && age%10 <= 9 || age%10 === 0) console.log(age + " лет");
} else {
    console.log("Введите корректные данные");
}