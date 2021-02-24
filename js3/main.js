// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка



// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення



















// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let me = {
//     name: 'Julia',
//     age: 22,
//     status: false,
//     job: true
// };
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let me = {
//     name: 'Julia',
//     age: 22,
//     status: true,
//     husband: {
//         name: 'Artem',
//         age: 30,
//     },
//     job: true,
//     skills: ['js', 'python', 'c++'],
    
// };
// console.log(me.husband.name);
// console.log(me.skills);
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const key in me) {
//     console.log(key);
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(me)); // returns array
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let citiesArray = [
//     {
//         name: 'Toronto',
//         location: 'Canada'
//     },
//     {
//         name: 'Paris',
//         location: 'France'
//     },
//     {
//         name: 'Berlin',
//         location: 'Germany'
//     },
//     {
//         name: 'Denpasar',
//         location: 'Indonesia'
//     },
//     {
//         name: 'New York',
//         location: 'USA'
//     },
//     {
//         name: 'Wellington',
//         location: 'New Zealand'
//     },
//     {
//         name: 'Canberra',
//         location: 'Australia'
//     }
// ]
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// let locationArray = [];
// while (i < citiesArray.length) {
//     locationArray.push(citiesArray[i].location);
//     i++;
// }
// console.log(locationArray);
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// let capitalsArray = [];
// for (let j = 0; j < citiesArray.length; j++) {
//     capitalsArray.push(citiesArray[j].name)
// }
// console.log(capitalsArray);
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// - взять объекты из задания 1 и превратить каждый в json.
// let arrayJSON = JSON.stringify(citiesArray);
// console.log(arrayJSON);
// - взять json из задания 11 и превратить их обратно в объекты.
// console.log(JSON.parse(arrayJSON));
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let citiesArrayJSON = [];
// for (let i = 0; i < citiesArray.length; i++) {
//     const cityObj = citiesArray[i];
//     citiesArrayJSON.push(JSON.stringify(cityObj));
// }
// console.log(citiesArrayJSON);
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//Скопировать все skills всех пользователей в отедльный массив
// let users1 = [
//     { name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
//     { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
//     { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
//     { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
//     { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
// ];
// const skillsArr = [];
// for (let i = 0; i < users1.length; i++) {
//     const user = users1[i];
//     for (const key in user) {
//         if (key === 'skills') {
//             for (let i = 0; i < user.skills.length; i++) {
//                 skillsArr.push(user.skills[i]);
//             }            
//         }
//     } 
// }
// console.log(skillsArr);

// let skillsArr1 = [];
// for (const user of users1) {
//     console.log(user.name)
//     for (const skill of user.skills) {
//         skillsArr1.push(skill);
//     }
// }
// console.log(skillsArr1);




// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     }  , {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
// ];
// for (const address1 in users[10].address) {
//     console.log(users[10].address[address1]); // ВЫВОДИТ Cairo Egypt Seashore 45
// }

// for (const user of users) {
//     for (const address1 in user.address) { // FOROF НЕ РАБОТАЕТ, ТОЛЬКО FORIN
//         console.log(user.address[address1]); // ВЫВОДИТ АДРЕСА ВСЕХ
//         // console.log(user.address.address1); // ВЫВОДИТ ТОЛЬКО КЛЮЧИ
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let usersAddress = [];
// for (let i = 0; i < users.length; i++) {
//     usersAddress.push(users[i].address);
// }
// console.log(usersAddress);

// for (const user of users) {
//     usersAddress.push(user.address)
// }
// console.log(usersAddress);
// usersAddress[0].city = 'Kyiv'; //  ИЗМЕНИЛИ ИСХОДНЫЙ МАСССИВ, КИЕВ И ТАМ И ТАМ
// console.log(users[0].address);
// console.log(usersAddress[0]);

// for (const user of users) {
//     usersAddress.push({ ...user.address }) // СКОПИРОВАЛИ АДРЕСА ЮЗЕРОВ В НОВЫЙ МАССИВ, SPREAD SYNTAX
// }
// usersAddress[0].city = 'Kyiv';
// console.log(users[0].address);
// console.log(usersAddress[0]);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. 
//Всі данні в одному блоці.

// for (let j = 0; j < users.length; j++) {
//     let userDiv = document.createElement('div');
//     userDiv.innerText = `Name: ${users[j].name} Age: ${users[j].age} Status: ${users[j].status} City: ${users[j].address.city} Country: ${users[j].address.country} Street: ${users[j].address.street} House: ${users[j].address.houseNumber} `;
//     document.body.appendChild(userDiv); 
// }

// for (let i = 0; i < users.length; i++) {
//     let div = document.createElement('div');
//     let user = users[i];
//     let address = ''; // ПРЕВРАЩАЕМ АДРЕС В СТРОКУ
//     for (const address1 in user.address) { // user.address - OBJECT, БЕРЁМ forin
//         // console.log(user.address[address1]); // [] скобки - обращаемся к значению ключа
//         address = address + ' ' + user.address[address1];
//     }
//     div.innerText = `${user.name} ${user.age} ${address}`
//     document.body.appendChild(div);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//розділивши всі властивості по своїм блокам(div > div * 4)
// for (let i = 0; i < users.length; i++) {
//     let user = users[i]; 
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');

//     let address = ''; //пустая строка
//     for (const address1 in user.address) { // address1 ключ user.address
//         address = address + ' ' + user.address[address1];
//     }

//     h3.innerText = user.name;
//     p1.innerText = user.age;
//     p2.innerText = address;

//     div.appendChild(h3);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     let user = users[i]; 
//     let div = document.createElement('div');
//     let name = document.createElement('h3');
//     let age = document.createElement('p');
//     let status = document.createElement('p');
//     let address = document.createElement('div');

//     for (const item in user.address) { 
//         let temp = document.createElement('div')
//         temp.innerHTML = user.address[item];
//         address.appendChild(temp);
//     }

//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;

//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false }
// ];
// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' }
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


// let fullInfo = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     for (let i = 0; i < citiesWithId.length; i++) {
//         if (citiesWithId[i].user_id === user.id) {
//             user.country = citiesWithId[i].country;
//             user.city = citiesWithId[i].city;
//             fullInfo.push(user);
//         } 
//     }
// }
// console.log(fullInfo);

// let fullInfo1 = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     for (let i = 0; i < citiesWithId.length; i++) {
//         if (citiesWithId[i].user_id === user.id) {
//             user.address = citiesWithId[i];
//             fullInfo1.push(user);
//         } 
//     }
// }
// console.log(fullInfo1);

// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);

// usersWithId.forEach(user => {
//     user.address = citiesWithId.find(value => value.user_id === user.id)
// })
// console.log(usersWithId);

// usersWithId.forEach(user => {
//     user.address = citiesWithId.filter(value => value.user_id === user.id)
// })
// console.log(usersWithId); // filter returns array







// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let div = document.getElementById('div');
// let text = div.innerText;
// console.log(text);

// const elementsByClassName = document.getElementsByClassName('rules');
// for (const element of elementsByClassName) {
//     console.log(element)
// }

// Когда берем элементы по класу или тегу получаем псевдомассив, НУЖНО ИТЕРИРОВАТЬ
// let tags = document.getElementsByTagName('p');
// console.log(tags); // HTML COLLECTION
// for (const tag of tags) {
//     console.log(tag);
// }



// - змінити цей текст використовуючи селектори id, class,  tag

// document.getElementById('div').innerText = 'gjergijregherlgioh';

// let h2 = document.querySelectorAll('h2')
// for (const item of h2) {
//     item.innerText = 'regeerjgorepogjjghjghjghjhghfhftghfghtfhtp';
// } 

// let tags = document.getElementsByTagName('p');
// for (const tag of tags) {
//     tag.innerText = 'newText';
//     tag.style.color = 'red';
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// document.getElementById('div').style.width = '20px';


// - за допомоги document.createElement та appendChild створити таблицю 
// на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// let tr = document.createElement('tr');

// document.body.appendChild(table);
// table.appendChild(tr);

// for (let i = 0; i < 4; i++) {
//     let td = document.createElement('td');
//     td.innerHTML = '1 рядок';
//     tr.appendChild(td);
// }


// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені


// let table = document.createElement('table');
// document.body.appendChild(table);

// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let i = 0; i < 3; i++) {
//         let td = document.createElement('td');
//         td.innerHTML = '1 рядок';
//         tr.appendChild(td);
//     }
// }





// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.createElement('table');
// document.body.appendChild(table);

// for (let i = 0; i < 10; i++) {
//     let row = document.createElement('tr');
//     table.appendChild(row);
//     for (let i = 0; i < 5; i++) {
//         let cell = document.createElement('td');
//         cell.innerHTML = '1 рядок';
//         row.appendChild(cell);
//     }
// }


// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt

// let table = document.createElement('table');
// document.body.appendChild(table);

// let rowNum = prompt('Enter a number of rows');
// let cellNum = prompt('Enter a number of cells');

// for (let i = 0; i < rowNum; i++) {
//     let row = document.createElement('tr')
//     table.appendChild(row);
//     for (let i = 0; i < cellNum; i++) {
//         let cell = document.createElement('td');
//         cell.innerText = '1 cell';
//         row.appendChild(cell);
//     }
// }

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний


// let tags = document.getElementsByTagName('*');
// for (const tag of tags) {
//     if (tag.getAttribute('id')) {
//         console.log(tag);
//     }
// }

// let elementNodeListOf = document.querySelectorAll('[id]'); // ПОЛУЧАЕМ ПСЕВДОМАСИВ
// console.log(elementNodeListOf);

// let tags = document.getElementsByTagName('P');
// for (const tag of tags) {
//     tag.innerText = 'hello oktenweb!';
// }

// let divs = document.getElementsByTagName('div');
// for (const div of divs) {
//     div.style.backgroundColor = 'red';
// }

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// let h2Arr = []; // массив текста 
// let h2 = document.getElementsByClassName('h2'); // массив h2
// for (const text of h2) {
//     h2Arr.push(text.innerText);
// }
// console.log(h2Arr)

// let div = document.getElementById('content')
// let content = document.createElement('h3')
// let header = document.getElementById('h1');
// content.innerText = header.innerText;
// div.appendChild(content);    
// for (let i = 0; i < h2Arr.length; i++) {
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
    
//     li.innerHTML = h2Arr[i];

//     div.appendChild(ul);
//     ul.appendChild(li);    
// }





// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];

// let wrap1 = document.getElementById('wrap1');
// let h1 = document.createElement('h1')
// h1.innerText = header.innerText;
// h1.style.borderTop = '2px solid black';
// wrap1.appendChild(h1); 
// for (const rule of rules) {
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');

//     h2.innerText = rule.title;
//     p.innerText = rule.body;
    
//     wrap1.appendChild(h2);
//     wrap1.appendChild(p);
// }


setTimeout(()=> {
    console.log('text1');
}, 3000)

console.log('test2');


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок(блок в блоці).
let users = document.createElement('div');
document.body.appendChild(users);

fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(result => {  // result = array with obj
        for (const obj of result) {
            for (const key in obj) {
                if (typeof obj[key] === 'object') {
                    let innerObj = obj[key];
                    for (const key in innerObj) { // for address and company
                        if (typeof innerObj[key] === 'object') { 
                            for (const iter in innerObj[key]) {
                               let property2 = document.createElement('div');
                                property2.innerText = iter + ": " + innerObj[key][iter];
                                users.appendChild(property2); 
                            }

                        } else {
                            let property1 = document.createElement('div');
                            property1.innerText = key + ": " + innerObj[key];
                            users.appendChild(property1);
                        }
                    }
                }
                else {
                    let property = document.createElement('div');
                    property.innerText = key + ":  " + obj[key];
                    users.appendChild(property);
                }
            }
        }
    })
    


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер.
//Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок(блок в блоці).



// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок(блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который 
// сделает запрос и получит все comments.Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка: в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту





