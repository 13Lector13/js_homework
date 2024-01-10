// ДЗ 1:

var str = 'A regular expression, often called a pattern, specifies a set of strings required for a particular purpose.';
console.log(str);

var re = /([^aA]|\w\s\,\.){6}$/;
console.log(re.test(str));
console.log(str.search(re));
var res = str.match(re);
console.log(res);



// ---------------------------------------------------------------------------
// ДЗ 2:

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var re = /\w+@(gmail\.com|yahoo\.com)/;
// \w+\.\w+|\w+@(gmail\.com|yahoo\.com)
var trueEmailArr = [];

for (var i in arr) {
    if (re.test(arr[i].email)) {
        trueEmailArr.push(arr[i]);
    }
}

console.log(trueEmailArr);