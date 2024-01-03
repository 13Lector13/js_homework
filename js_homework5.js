"use strict";

// ДЗ 1:

const objTicket = { ID: 123, typeOfTransport: 'bus', typeOfTicket: 'VIP', countryFrom: 'Ukraine', countryTo: 'Germany'};

function getInfo() {
    for (let key in objTicket) {
        console.log(key + ': ' + objTicket[key]);

    }
    } 
getInfo();

function newProperty() {
    let newPropertyName = prompt('Введите название для дополнительного свойства объекта', 'Название');
    let newPropertyValue = prompt('Введите значение для дополнительного свойства объекта', 'Значение');
    objTicket[newPropertyName] = newPropertyValue;
}

newProperty();
getInfo();


// -----------------------------------------------------------------------------------------------------------
// ДЗ 2: 

var services = {

	"стрижка": "60 грн",

	"гоління": "80 грн",

    "Миття голови": "100 грн",

    price: function() {
         var price = 0;
        for (var key in this) {
            if (typeof this[key] === 'string') {
                price += Number.parseFloat(this[key]);
            }
        }
        return 'Стоимость выполненных услуг: ' + price + ' грн';
    },

    minPrice: function () {
        var min = Infinity;
        var minPrice;
        for (var key in this) {
            if (typeof this[key] === 'string') {
                minPrice = Number.parseFloat(this[key]);
            }
            if (minPrice < min) {
            min = minPrice;
         }
    }
        return 'Услуга с минимальной стоимостью: ' + min + ' грн';
    },

     maxPrice: function() {
        var max = -Infinity;
        var maxPrice;
        for (var key in this) {
            if (typeof this[key] === 'string') {
                maxPrice = Number.parseFloat(this[key]);
            }
            if (maxPrice > max) {
            max = maxPrice;
         }
    }
         return 'Услуга С максимальной стоимостью: ' + max + ' грн';
    }

};

function newServices(newServiceName, newServicePrice) {
    services[newServiceName] = newServicePrice + ' грн';
}


