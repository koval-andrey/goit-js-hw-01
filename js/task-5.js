/*
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
 Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
 Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке,
 то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов
*/


/* ВАРИАНТ№1 */

const countryInput = prompt('Введите страну доставки');
if (countryInput === null) {
    console.log('Отменено пользователем!');
}
if (countryInput !== null) {
    

const country = countryInput.toLowerCase();
const countryOutput = country[0].toUpperCase() + country.slice(1);

let price;
switch(countryOutput) {
    case 'Китай':
    price = 100;

    break;
    
    case 'Чили':
    price = 250;
    break;

    case 'Австралия':
    price = 170;
    break;

    case 'Индия':
    price = 80;
    break;
    case 'Ямайка':
    price = 120;
    break;

    default: alert ('В вашей стране доставка не доступна');
    break;
}
alert(`Доставка в ${countryOutput} будет стоить ${price} кредитов`);
}

