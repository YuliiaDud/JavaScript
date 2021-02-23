// // --створити масив з:
// // - з 5 числових значень
// let numbers = [0,1,2,3,4,5]
// // - з 5 стічкових значень
// let strings = ['a','s','d','f','g']
// // - з 5 значень стрічкового, числового та булевого типу
// let data = [4, 'd', true,'f',6, false ]
// // - та вивести його в консоль
// console.log(data);
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 1991;
// array[1] = 1992;
// array[2] = 1993;
// array[3] = 1994;
// array[4] = 1995;
// console.log(array);


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let index = 0; index < 11; index++) {
//     document.write(`<div>Hello World</div>`)
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let index = 0; index < 11; index++) {
//     document.write(`<div>Hello World ${[index]}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 21) {
//     document.write(`<h>довільний текст всередині</h>`)
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 21) {
//     document.write(`<h>довільний текст всередині із індексом ${[i]} <br></h>`)
//     i++;
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < arrayNum.length; index++) {
//     console.log(arrayNum[index]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringArray = ['Dima', 'Anya', 'Kolya', 'Dasha', 'Ihor', 'Julia', 'Katya', 'Mike', 'Anton', 'Kshyusha'];
// let j = 0;
// while (j < stringArray.length) {
//     console.log(stringArray[j]);
//     j++;
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let data = [4, 'd', true, 'f', 6, false, 4, 'd', true, 'f', 6, false];
// for (const dataItem in data) {
//     console.log(data[dataItem]);  
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let data = [4, 'd', true, 'f', 6, false, 4, 'd', true, 'f', 6, false];
// for (const dataItem in data) {
//     if (typeof data[dataItem] === "boolean") {
//         console.log(data[dataItem]);
//     }  
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let data = [4, 'd', true, 'f', 6, false, 4, 'd', true, 'f', 6, false];
// for (const dataItem in data) {
//     if (typeof data[dataItem] === 'number') {
//         console.log(data[dataItem]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let data = [4, 'd', true, 'f', 6, false, 4, 'd', true, 'f', 6, false];
// for (const dataItem in data) {
//     if (typeof data[dataItem] === 'string') {
//         console.log(data[dataItem]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let anotherArray = [];
// anotherArray[0] = 12;
// anotherArray[1] = 24;
// anotherArray[2] = 36;
// anotherArray[3] = 48;
// anotherArray[4] = 60;
// anotherArray[5] = 72;
// anotherArray[6] = 84;
// anotherArray[7] = 96;
// anotherArray[8] = 108;
// anotherArray[9] = 120;
// console.log(anotherArray);
// anotherArray.push(132);
// console.log(anotherArray);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let index = 0; index < 10; index++) {
//     document.write([index]);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let index = 0; index < 100; index++) {
//     document.write(`${[index]}<br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let index = 0; index < 100; index+=2) {
//     document.write(`${[index]}<br>`);
// }
// for (let index = 0; index < 100; index+=8) {
//     document.write(`${[index]}<br>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let index = 2; index < 100; index+=2) {
//     document.write(`${[index]}<br>`);
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let index = 1; index < 100; index+=2) {
//     document.write(`${[index]}<br>`);
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let j = 0; j < 2; j++) {
//     for (let k = 0; k < 60; k++) {
//         console.log(`00 : 0${j} : ${k}`); 
//         if (j == 0 && k == 59) {
//             console.log('00 : 01 : 00');
//         }
//         if (j == 1 && k == 59) {
//             console.log('00 : 02 : 00');
//         }
//     }
 
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         for (let k = 0; k < 60; k++) {
//             console.log(i, j, k);

//             if (i === 1 && j === 20) {
//                 i = 24;
//                j = 60;
//                 break;
//             }    
//         }
        
//     }
// }

for (let hour = 0; hour < 24; hour++) {

    for (let min = 0; min < 60; min++) {

        for (let sec = 0; sec < 60; sec++) {

            console.log(`${hour}:${min}:${sec}`);

            if (hour === 0 && min === 1 && sec === 23) {
                hour = 24;
                min = 60;
                break;
            }
        }
    }
}

// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// let num = [1, 2, 3];
// for (let index = 0; index < 3; index++) {
//     arr.push(num[index])  
// }
// console.log(arr);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr1 = [1, 2, 3];
// arr1.reverse();
// console.log(arr1);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr1 = [1, 2, 3];
// // arr1.push(4);
// // arr1.push(5);
// // arr1.push(6);

// let arr2 = [4, 5, 6];
// for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]); 
// }
// console.log(arr1);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// for (let i = 0; i < arr2.length; i++) {
//     arr1.unshift(arr2[i]); 
// }
// console.log(arr1);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr2 = arr2.reverse();
// for (let i = 0; i < arr2.length; i++) {
//     arr1.unshift(arr2[i]); 
// }
// console.log(arr1);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let strings = ['js', 'css', 'jq'];
// let js = strings.shift();
// console.log(js);
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let jq = strings.pop();
// console.log(jq);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let num = [1, 2, 3, 4, 5];
// console.log(num.slice(3));

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// ;
// console.log(num.slice(0,2));
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// // num = num.splice(3, 4);
// // num.splice(0, 0, 1);
// // console.log(num);
// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// num.splice(3, 0,'a', 'b', 'c');
// console.log(num);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

num.splice(1, 0, 'a', 'b');
num.splice(6, 0, 'c');
num.push('e');
console.log(num);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// function isEven(num) {
//     return num % 2 == 0;
// }
// console.log(arrayNum.filter(isEven));

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// for (let index = 0; index < arrayNum.length; index++) {
//     anotherArray.push(arrayNum[index]);
    
// }
// console.log(anotherArray);
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// for (let index = 0; index < arrayNum.length; index++) {
//     anotherArray[index] = arrayNum[index];
    
// }
// console.log(anotherArray);

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let bigNUm = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let i = 0;
// while (i < bigNUm.length) {
//     document.write(`<hr>`,bigNUm[i],`<br>`);
//     i++;
// }
// 2. перебрати його циклом for
// for (let index = 0; index < bigNUm.length; index++) {
//     document.write(bigNUm[index]);
    
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < bigNUm.length) {
//     if (i % 2 !== 0) {
//         console.log(bigNUm[i]);
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let index = 0; index < bigNUm.length; index++) {
//     if (index % 2 !== 0) {
//         console.log(bigNUm[index]);
//     } 
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < bigNUm.length) {
//     if (bigNUm[i] % 2 == 0) {
//         document.write(bigNUm[i],`<br>`);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let index = 0; index < bigNUm.length; index++) {
//     if (bigNUm[index] % 2 == 0) {
//         document.write(bigNUm[index],`<br>`);
//     }  
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let index = 0; index < bigNUm.length; index++) {
//     if (bigNUm[index] % 3 == 0) {
//         bigNUm[index] = "okten";
//     }  
// }
// console.log(bigNUm);

// 8. вивести масив в зворотньому порядку.
// console.log(bigNUm.reverse());

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// for (let i = bigNUm.length-1; i >= 0; i--)   {
//     console.log(bigNUm[i]);
// }

// for (let k = bigNUm.length-1; k >=0; k--) {
//     if (bigNUm[k] % 2 == 0) {
//         console.log(bigNUm[k]);
//     }
// }
// for (let j = bigNUm.length; j >=0 ; j-=3) {
//     bigNUm[j] = 'okten';
// }
// console.log(bigNUm);  

// 1. Створити пустий масив та :
// let emptyArr = [];
    //    a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 51; i++) {
//     emptyArr[i] = Math.floor((Math.random() * 1000));
//     if (emptyArr[i] % 2 !== 0) {
//         emptyArr[i]++;
//     }
// }

// console.log(emptyArr)
//        b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0; i < 51; i++) {
//     emptyArr[i] = Math.floor((Math.random() * 1000));
//     if (emptyArr[i] % 2 == 0) {
//         emptyArr[i]++;
//     }
// }
// console.log(emptyArr)

// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < 50; i++) {
//     i%2 === 0 ? arr1[i] = i : arr2[i] = i
    
// }
// console.log(arr1);
// console.log(arr2);
// //    c. используя Math.random заполнить массив из ???(сколько хотите) элементов.

// for (let i = 0; i < 100; i++) {
//     emptyArr[i] = Math.floor((Math.random() * 1000));
// }
// console.log(emptyArr)

// //  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// for (let i = 0; i < 100; i++) {
//     emptyArr[i] = Math.floor(Math.random() * (732 - 8)) + 8;
// }

// console.log(emptyArr)
// //  2. Вивести за допомогою console.log кожен третій елемен
// for (let index = 0; index < emptyArr.length; index+=3 ) {
//     console.log(emptyArr[index]);  
// }
// //  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let index = 0; index < emptyArr.length; index += 3) {
//     if (emptyArr[index] % 2 == 0) {
//       console.log(emptyArr[index]);    
//     }
    
// }
// //  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let index = 0; index < emptyArr.length; index += 3) {
//     if (emptyArr[index] % 2 == 0) {
//         newArr.push(emptyArr[index]);
//     }   
// }
// console.log(newArr);  
//  5. Вивести кожен елемент масиву, сусід зпарва якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let neighbourEven = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let k = 0; k < neighbourEven.length; k++) {
//     if (neighbourEven[k] % 2 == 0) {
//         console.log(neighbourEven[k - 1]);
//     }
// }

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let prices = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (const num of prices) {
//     sum+= num;
// }
// let result = sum / prices.length;
// console.log(result);
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let randomNum = [];
// for (let i = 0; i < 21; i++) {
//     let randomNumItem = Math.round(Math.random() * 10);
//     randomNumItem = randomNumItem * 5;
//     randomNum.push(randomNumItem); 
// }
// console.log(randomNum);
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let data = [4, 'd', true, 'f', 6, false, 4, 'd', true, 'f', 6, false];
// let numFromData = [];
// for (const item of data) {
//     if (typeof item == 'number') {
//         numFromData.push(item);
//     }
// }
// console.log(numFromData);



// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letters = ['a', 'b', 'c'];
// let a = letters.join('');
// console.log(a);

let str = '';
// for (let k = 0; k < letters.length; k++) {
//     str = str + letters[k];
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const iterator of letters) {
    str = str + iterator;
}
console.log(str);