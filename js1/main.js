// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua',1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let num1 = 1;
// let num10 = 10;
// let num999 = -999;
// let num123 = 123;
// let pi = 3.14;
// let ex = 2.7;
// let num16 = 16;
// let varTrue = true;
// let varFalse = false;

// //   Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(num1);
// console.log(num10);
// console.log(num999);
// console.log(num123);
// console.log(pi);
// console.log(ex);
// console.log(num16);
// console.log(varTrue);
// console.log(varFalse);

// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(num1);
// alert(num10);
// alert(num999);
// alert(num123);
// alert(pi);
// alert(ex);
// alert(num16);
// alert(varTrue);
// alert(varFalse);

// document.write(hello);
// document.write(owu);
// document.write(com);
// document.write(ua);
// document.write(num1);
// document.write(num10);
// document.write(num999);
// document.write(num123);
// document.write(pi);
// document.write(ex);
// document.write(num16);
// document.write(varTrue);
// document.write(varFalse);

// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

// hello = 'HELLO';
// owu = 'OWU';
// com = 'COM';
// ua = 'UA';
// num1 = 2;
// num10 = 12;
// num999 = -998;
// num123 = 124;
// pi = 3.14159;
// ex = 2.76;
// num16 = 17;
// varTrue = false;
// varFalse = true;

// //   Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(num1);
// console.log(num10);
// console.log(num999);
// console.log(num123);
// console.log(pi);
// console.log(ex);
// console.log(num16);
// console.log(varTrue);
// console.log(varFalse);

// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(num1);
// alert(num10);
// alert(num999);
// alert(num123);
// alert(pi);
// alert(ex);
// alert(num16);
// alert(varTrue);
// alert(varFalse);

// document.write(hello);
// document.write(owu);
// document.write(com);
// document.write(ua);
// document.write(num1);
// document.write(num10);
// document.write(num999);
// document.write(num123);
// document.write(pi);
// document.write(ex);
// document.write(num16);
// document.write(varTrue);
// document.write(varFalse);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt('Ваше ім\'я');
// let surname = prompt('Ваше по-батькові');
// let age = prompt('Ваш вік');

// //   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// // - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// alert('Вітаю ' + name + surname +'. Тобі ' + age + ' років.')

// alert(`Вітаю ${name} ${surname}. Тобі ${age} років.`)

// // - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let firstNum = parseInt(prompt('Type a number:'));
// let secondNum = parseInt(prompt('Type a number:'));
// let thirdNum = parseInt(prompt('Type a number:'));
// console.log(firstNum);
// console.log(secondNum);
// console.log(thirdNum);

// // - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let fourthNum = parseInt(prompt('Type a number:'));
// console.log(firstNum + secondNum + thirdNum + fourthNum);
// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let floatNum1 = parseFloat(prompt('Введите число с плавающей точкой'));
// let floatNum2 = parseFloat(prompt('Введите число с плавающей точкой'));
// let floatNum3 = parseFloat(prompt('Введите число с плавающей точкой'));
// let floatResult = floatNum1 + floatNum2 + floatNum3;
// console.log(floatResult)
// // - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

// floatNum1 = Math.ceil(parseFloat(prompt('Введите число с плавающей точкой')));
// floatNum2 = Math.floor(parseFloat(prompt('Введите число с плавающей точкой')));
// floatNum3 = Math.round(parseFloat(prompt('Введите число с плавающей точкой')));
// floatResult = floatNum1 + floatNum2 + floatNum3;
// console.log(floatResult)

// // - За допомогою prompt() отримати 2 цілих числа.
// let int1 = Math.round(prompt('Type a number:'));
// let int2 = Math.round(prompt('Type a number:'));
// //   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// //   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// //   Example. Число 1 = 5. Число 2 = 2. Результат = 25 
// console.log(Math.pow(int1, int2));
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// // - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// //   В однакових виразаї не використовувати однакові оператори!!!
// //     5 < 6 -> true
// //     5 > 6 -> false
// //     5 >= 6 -> false
// //     5 == 6 -> false
// //     10 == 10 -> true
// //     10 === 10 -> true
// //     10 != 10 -> false
// //     10 > 10 -> false
// //     10 < 10 -> false
// //     123 === '123' -> false
// //     123 == '123' -> true

// // Додатково:
// // - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); // false 
// console.log(34 > 33 && 23 < 90 ); // true
// console.log(99 > 100 && 45 > 12 );// false
// console.log(132 > 100 || 45 < 12 );// true
// console.log(111 > 11 || 45 < 111 );// true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true

// // // Применение двойного восклицательного знака
// // !!null            // false
// // !!undefined       // false
// // !!false           // false
// // !!true            // true
// // !!""              // false
// // !!"string"        // true
// // !!0               // false
// // !!1               // true
// // !!{}              // true
// // !![]              // true
// //   console.log(!!'-1');
// console.log(!!'-1'); // true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); //false
// console.log((111 > 11 || 45 < 111) ||  !!'0');; //true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false


// // ______________________________________________________________________________________________________________________________________________________
// //                                                                 РОБОТА В АУДИТОРІЇ
// // ______________________________________________________________________________________________________________________________________________________

// // 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// //    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// // 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
// //     34,
// //     12,
// //     66,
// //     90,
// //     87
// //     Старайтесь використовувати різні оператори. 
// //     Example: 88 = (16 / 2) * 11

// // 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// let a6 = 5 % 3;
// console.log(a6);
let a7 = 3 % 5;// ??????
console.log(a7);
// let a8 = 5 + '3';
// console.log(a8);
// let a9 = '5' - 3;
// console.log(a9);
// let a10 = 75 + 'кг';
// console.log(a10);

// // 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// //    Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s);
// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.
// let pi = 3.14;
// let heightC = 10;
// let dC = 4;
// let v = pi * Math.pow((dC / 2), 2) * heightC;
// console.log(v);
// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// //    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
// let k = Math.pow(n, 2) + Math.pow(m, 2);
// console.log(Math.sqrt(k));
// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //   Вывести в документ содержимое переменной concatenation спомощью document.write

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205
// document.write(str - a + "<br/>"); //15
// document.write(str * "2" + "<br/>"); // 40
// document.write(str / 2 + "<br/>"); //10
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14")) //3
// console.log(parseInt("-7.875")) // -7
// console.log(parseInt("435")) //435
// console.log(parseInt("Вася")) // NaN

// // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let string = prompt("Enter something", "ho-ho")
// console.log(string);

// // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let d = prompt("Enter one number");
// let f = prompt("Enter second number");
// alert(d + f);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// =====================
// ======ДОП============
// =====================




// // 1. Три різних числа вводяться через prompt().
// // За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let number1 = parseInt(prompt('Put one number'));
// let number2 = parseInt(prompt('Put one number')); 
// let number3 = parseInt(prompt('Put one number')); 
// let number1Compare = (number1 >= number2) && (number1 >= number3);
// let number2Compare = (number2 >= number1) && (number2 >= number3);
// let number3Compare = (number3 >= number1) && (number3 >= number2);

// if (number1Compare) {
//     if (number2 > number3) {
//         document.write(number3,`<br>`, number2,`<br>`,number1);
//     } else{
//         document.write(number2,`<br>`,number3,number1);
//     }   
// } else if (number2Compare) {
//     if (number1 > number3) {
//         document.write(number3,`<br>`,number1,`<br>`,number2);
//     } else {
//         document.write(number1,`<br>`,number3,`<br>`,number2);
//     }
    
// } else if (number3Compare) {
//     if (number2 > number1) {
//         document.write(number1,`<br>`,number2,`<br>`,number3);
//     } else {
//         document.write(number2,`<br>`,number1,`<br>`,number3);
//     }
    
// } 
// let t = parseInt(prompt("Enter one number in range from 1 to 50")); 
// let y = parseInt(prompt("Enter second number in range from 1 to 50")); 
// let u = parseInt(prompt("Enter third number in range from 1 to 50")); 
// for (let index = 0; index <= 3; index++) {
//     if (t > y && t > u) {
//         document.write(t, `<br>`);
//         t = 0;
//     } else if (y > t && y > u){
//         document.write(y, `<br>`);
//         y = 0;
//     } else if (u > t && u > y){
//         document.write(u, `<br>`);
//         u = 0;
//     }
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('What is the color of a traffic light?');
// switch(color){
//     case ('green'):
//         alert('Go');
//         break;
//     case ('yellow'):
//         alert('Wait');
//         break;
//     case ('red'):
//         alert('Stop');
//         break;
//     default:
//         alert("Do whatever you want!");
// }
// // 3
// // Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// // Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// // Улучшаем предыдущее задание.
// // Если светофор зеленый и машин нет - вывести "иди".
// // Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// // Если светофор желтый и машины есть - вывести "жди".
// // Если светофор желтый и машин нет - вывести "все рано жди".
// // Если светофор красный и машин нет- вывести "стой все рано".
// // Если светофор красный - и машины есть вывести "стой и жди".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!
// let isRoadClear = prompt('Is the road clear?');
// let colour = prompt('What is the color of a traffic light?');
// if ((isRoadClear === 'yes') && (colour === 'green')) {
//     alert('Go!');
// } else if ((isRoadClear === 'no') && (colour === 'green')) {
//     alert('Wait until the road is clear.');
// } else if ((isRoadClear === 'yes') && (colour === 'yellow')) {
//     alert('Wait.');
// } else if ((isRoadClear === 'no') && (colour === 'yellow')) {
//     alert('Not yet. Wait.');
// } else if ((isRoadClear === 'no') && (colour === 'red')) {
//     alert('Wait anyway.');
// }else if ((isRoadClear === 'yes') && (colour === 'red')) {
//     alert('Stand and Wait!');
// } else {
//     alert("Do whatever you want!");
// }

let isRoadClear = confirm('Is the road clear?');
let colour = prompt('What is the color of a traffic light?');
if ((isRoadClear) && (colour === 'green')) {
    alert('Go!');
} else if ((!isRoadClear) && (colour === 'green')) {
    alert('Wait until the road is clear.');
} else if ((isRoadClear) && (colour === 'yellow')) {
    alert('Wait.');
} else if ((!isRoadClear) && (colour === 'yellow')) {
    alert('Not yet. Wait.');
} else if ((!isRoadClear) && (colour === 'red')) {
    alert('Wait anyway.');
}else if ((isRoadClear) && (colour === 'red')) {
    alert('Stand and Wait!');
} else {
    alert("Do whatever you want!");
}