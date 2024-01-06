// ДЗ.1:

// Сходу завалился на этой задаче. Думал сделать как-то так:
// Вывести рандомное число. Приравнять его к индексу масива. И таким образом, рандомно вытягивать элементы массива циклом. Конечно, как-то сделать, чтоб не повторялось
// А потом перезаписывать их по порядку. Таким образом, каждый раз должен был перезаписываться массив в рандомном порядке. Вообще не понял как реализовать
// И пошел в гугл. Ну, там решение в разы проще нашел. Сидел и разбирал его

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(myBlend);
function myBlend(arr) {
    var elem = Number.parseInt(Math.random() * 8);
    for (var key in arr[key]) {
        for (i = 0; i <= 8; i++) {
        
    }
        
    }

}
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
myBlend(arr);
console.log(arr);


// ----------------------------------------------------------------------------------
// ДЗ.2:

// Я реально долго разбирался. Внизу вы можете увидеть мои незаконченные попытки. Каюсь, снова мне чат GPT помог. Вроде, я понял, но сам бы такого точно не написал. 
// К GPT обратился, потому что реально долго мучался

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    const stack = [company];

    while (stack.length > 0) {
        const currentCompany = stack.pop();

        if (currentCompany.name === companyName) {
            return currentCompany;
        }

        if (currentCompany.clients) {
            // Если есть клиенты, добавляем их в стек для дальнейшего поиска
            stack.push(...currentCompany.clients);
        }

        if (currentCompany.partners) {
            // Если есть партнеры, добавляем их в стек для дальнейшего поиска
            stack.push(...currentCompany.partners);
        }
    }

    // Если не нашли компанию с заданным именем
    return null;
}




/*
function findValueByKey(companyName) {

    company.indexof(companyName);

    if (companyName = 'Велика Компанія') {

        for (let i in company) {
            console.log("company[" + i + "] = " + company[i]);
        }
        
    } else if (companyName != 'Велика Компанія') {
        
        for (let i in company.clients[0]) {
            console.log("company.clients[" + i + "] = " + company.clients[0].i);
        }

    } else {
        console.log('Error');
    }
}
*/


/*
function findValueByKey(companyName) {
    switch (companyName) {
        case company.name === 'Велика Компанія':
            for (let i in company) {
                console.log("company[" + i + "] = " + company[i])
            }
            break;
        case company.clients["name"] === 'Клієнт 1':
            for (let i in arr) {
                console.log("arr[" + i + "] = " + arr[i])
            }
            break;
        case company.clients["name"] === 'Клієнт 2':
            for (let i in arr) {
                console.log("arr[" + i + "] = " + arr[i])
            }
            break;
        case company.clients.partners.name === 'Клієнт 1.1':
            for (let i in arr) {
                console.log("arr[" + i + "] = " + arr[i])
            }
            break;
        case company.clients.partners.name === 'Клієнт 1.2':
            for (let i in arr) {
                console.log("arr[" + i + "] = " + arr[i])
            }
            break;
        case company.clients.partners.name.name === 'Клієнт 1.2.3':
            for (let i in arr) {
                console.log("arr[" + i + "] = " + arr[i])
            }
            break;
        default:
            console.log('Error')
    }
}
*/
/*
function findValueByKey(companyName) {

    if (companyName = company.name = 'Велика Компанія') {

        for (let i in company) {
            console.log("company[" + i + "] = " + company[i]);
        }

    } else if (companyName = company.clients[0] = 'Клієнт 1') {

        for (let i in company.clients[0]) {
            console.log("company.clients[" + i + "] = " + company.clients[0].i);
        }

    } else if (companyName = company.clients[1].name = 'Клієнт 2') {

        for (let i in company.clients[1].name) {
            console.log("company.clients[" + i + "] = " + company.clients[1].i);
        }

    } else if (companyName = company.clients[0].partners[0].name = 'Клієнт 1.1') {

        for (let i in company.clients[0].partners[0].name) {
            console.log("arr[" + i + "] = " + company.clients[0].partners[0].i);
        }
        
    } else if (companyName = company.clients[0].partners[1].name = 'Клієнт 1.2') {

        for (let i in company.clients[0].partners[1].name) {
            console.log("arr[" + i + "] = " + ccompany.clients[0].partners[1].i);
        }

    } else if (companyName = company.clients[0].partners[1].partners[0].name = 'Клієнт 1.2.3') {

        for (let i in company.clients[0].partners[1].partners[0].name) {
            console.log("arr[" + i + "] = " + company.clients[0].partners[1].partners[0].i);
        }

    } else {
        console.log('Error');
    }
}
*/