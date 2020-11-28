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

const country = prompt('Введите страну доставки').toLowerCase();

let price;
switch(country) {
    case 'китай':
    price = 100;

    break;
    
    case 'чили':
    price = 250;
    break;

    case 'австралия':
    price = 170;
    break;

    case 'индия':
    price = 80;
    break;
    case 'ямайка':
    price = 120;
    break;

    default: alert ('В вашей стране доставка не доступна');
    break;
}
alert(`'Доставка в ${country} будет стоить ${price} кредитов'`);




/*ВАРИАНТ№2 *

const country = prompt('Введите страну доставки');
const countryInput = country.toLowerCase();
let price;
switch(countryInput) {
    case 'китай':
    price = 100;
    alert(`'Доставка в Китай будет стоить 100 кредитов'`);
    break;
    
    case 'чили':
    price = 250;
    alert(`'Доставка в Чили будет стоить 250 кредитов'`);
    break;

    case 'австралия':
    price = 170;
    alert(`'Доставка в Австралию будет стоить 170 кредитов'`);
    break;

    case 'индия':
    price = 80;
    alert(`'Доставка в Индию будет стоить 80 кредитов'`);
    break;
    case 'ямайка':
    price = 120;
    alert(`'Доставка в Ямайку будет стоить 120 кредитов'`);
    break;

    default: alert ('В вашей стране доставка не доступна');
    break;

}
*/

