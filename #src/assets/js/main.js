"use strict"; // Показывает что в документе используется современный формат

console.log('JavaScript Ready'); // Указывает на то что JavaScript подключён 

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Простое сложение. Урок 1

// Сумма числовых переменных

let a = 10,
    b = 10,
    c = 10;

let summ = a + b + c;


 console.log('Lesson 1:');
 console.log(summ);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Сложение строковых типов данных. Урок 2


// Сумма строковых переменных

let d = 'Hellow',
    e = ' World!';

let summ2 = d + e;

 console.log('Lesson 2:');
 console.log(summ2);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Что такое объект? Урок 3


// Объекты

let obj = {
	name: 'Alex',
	surname: 'Fox',
	age: 27,
	isMarried: false
};

console.log('Lesson 3:');
console.log(obj);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Что такое массив? Урок 4


// Массив (является частным случаем объекта)

let arr = [ "Index0", "Index1", "Index2", "Index3" ];

console.log('Lesson 4:');

// Индексация начинается с нуля
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Что такое Интерполяция? Урок 5


// Интерполяция (сложение/склейка строк)

let user = 'Alex';

console.log('Lesson 5:');

console.log(`hellow,${user}!`);


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Унарный плюс и его особенности. Урок 6


// Унарный плюс. Переделывает строчный тип данных на числовой

let f = 1,
    j = "1";

console.log('Lesson 6:');

// Добавляем переменной j унарный плюс j строчная становится числовым типом данных
console.log("result f+j=" + (f + +j));

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Операторы. Инкремент и Декремент. Урок 7


// Инкремент и Декремент

let incr = 10,
	 decr = 10;

// Если после то постфиксная запись
// Если перед то префиксная запись
// Разница: Если префикс то сперва срабатывает операция, если постфиксная то сначала число попадёт в консоль, а уже потом число будет изменяться

incr++; // Увеличиваем число в переменной на 1
decr--; // Уменьшаем число в переменной на 1


console.log('Lesson 7');

console.log(incr,decr);


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Прострое равенство и строгое сравнение. Урок 8

console.log('Lesson 8:');

console.log(2*2 == '4'); // Вернёт true т.к. 4-строчная. Работает проверка ТОЛЬКО по значению
console.log(2*2 === '4'); // Вернёт false т.к. 4-строчная. Работает проверка и по значению и по типу данных


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Операторы "И" и "Или". Урок 9

// && // "И" Работает если два или более являются true
// || // "Или" Работает если хотя бы один из всех-true

	 console.log("Lesson 9:");

let ifChecked = true,
	 ifClosed = true;


	 console.log("И тот и другой верны: " + (ifChecked && ifClosed));

let ifChecked2 = false,
	  ifClosed2 = true;

	 console.log("Один из неверно: " + (ifChecked2 || ifClosed2));


// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 10.Пишем своё первое приложение.

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


// Решение.

// 1 Задание:

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');


// // 2 Задание:

// let myArr = [],
// 	 emptyObj = {},
// 	 emptyObj2 = {};

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: emptyObj,
// 	actors: emptyObj2,
// 	genres: myArr,
// 	privat: false
// }

// // 3 Задание:

// const ask1 = prompt('Один из последних просмотренных фильмов?', ''),
// 		ask2 = prompt('На сколько оцените его?', ''),
// 		ask3 = prompt('Один из последних просмотренных фильмов?', ''),
// 		ask4 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[ask1] = ask2;
// personalMovieDB.movies[ask3] = ask4;


// console.log(personalMovieDB);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Условия JavaScript.Урок 11.

console.log('Lesson 11:');

if (4 == 4) {
	console.log('Всё верно. 4 равно 4');
} else {
	console.log('Ошибка');
}

// Тернарный оператор. По простому "Тернарка".
// Участвуют три аргумента

let num = 50;

(num === 50) ? console.log('Ok!') : console.log('Error');


// Switch.Проверка на СТРОГОЕ соответствие.

switch(num) {
	case 49:
		console.log('Неверно');
		break;
	case 50:
		console.log('Верно!');
		break;
	default:
		console.log('Не в этот раз');
		break;
}

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Циклы.Урок 12.

let number = 1;

// while(number < 10) {
// 	console.log(number);
// 	number++;
// }

// do {
// 	console.log(number);
// 	number++;
// }

// while (number < 10);

// for (let i = 1; i < 8; i++) { // Цикл.
// 	if (i === 6) { // Условие.
// 		break; // Прерывание цикла досрочно
// 	}

// 	console.log(i);
// }

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 13.Практика.

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Решение.

// 1 Задание:

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// let myArr = [],
// 	 emptyObj = {},
// 	 emptyObj2 = {};

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: emptyObj,
// 	actors: emptyObj2,
// 	genres: myArr,
// 	privat: false
// }

// // Решение.

// for (let i = 0; i < 2; i++) { // Цикл.
// 	const ask1 = prompt('Один из последних просмотренных фильмов?', ''),
// 			ask2 = prompt('На сколько оцените его?', '');

// 	if(ask1 != null && ask2 != null && ask1 != '' && ask2 != '' && ask1.length < 50) {
// 		personalMovieDB.movies[ask1] = ask2;
// 		console.log('done!');
// 	} else {
// 		console.log('error -___-');
// 		i--;
// 	}
// }

// if (personalMovieDB.count < 10) {
// 	alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
// 	alert("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман!");
// } else {
// 	alert("Error!!!");
// }

// console.log(personalMovieDB);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 14.Функции.
// Функция работает локально. Т.е. если назначить любую переменную внутри функции, то она будет работать только внутри функции.
// Если переменную назначить глобально, т.е. ВНЕ функции и вызвать переменную внутри функции, то она будет воспринимтаься глобально.

console.log('Lesson 14:');

// Декларативная функция. Существует ещё до прогрузки страницы.

function showFirstMessage() {
	console.log('function active');
}

showFirstMessage();

function ret() { 
	let num = 40;

	return num;
}

const retResult = ret();

console.log(retResult);

// Экспрессивная функция. Работает только тогда, когда до неё доходит поток кода.

const logger = function() {
	console.log('this is func expression');
};

logger();

// Стрелочная функция. Не имеет своего контекста.(this)

const calc = (a, b) => { 
	return a + b
};

console.log(calc);

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 15.Методы и свойства строк и чисел.

console.log('Lesson 15:');
const str = "test";

// length-свойство элемента
// console.log(str.length);

// Команда выводит элемент ввиде объекта
// console.dir();

// Методы изменения регистра
console.log(str.toUpperCase());
// Прим.: При использовании метода всегда пользуемся круглыми скобками в конце метода ()

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
// Прим.: Индексация начинается с нуля

// Если строка не изменяема, как можно её поменять?
const logg = "Hello world!";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

// Прим.: Чтобы увидеть числовые методы нужно прописать в консоли Math.
const numb = 12.2;

// Метод округления числа
console.log(Math.round(numb));

const test = "12.2px";

// ParseInt() переводит число в другую систему счисления
console.log(parseInt(test));

// ParseFloat() переводит число в другую систему счисления вместе с плавающей точкой в десятичной системе счисления
console.log(parseFloat(test));

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 16.Практическое задание.

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// let numberOfFilms;

// console.log('Lesson 16:');

// function start() {
// 	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
// 	}
// }

// start(); // Вызов функции

// // Прим.:метод isNaN указывает на то, что будет возвращено НЕ ЧИСЛО.

// let myArr = [],
// 	 emptyObj = {},
// 	 emptyObj2 = {};

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: emptyObj,
// 	actors: emptyObj2,
// 	genres: myArr,
// 	privat: false
// }

// function rememberMyFilms(){
// 	for (let i = 0; i < 2; i++) { // Цикл.
// 		const ask1 = prompt('Один из последних просмотренных фильмов?', ''),
// 				ask2 = prompt('На сколько оцените его?', '');

// 		if(ask1 != null && ask2 != null && ask1 != '' && ask2 != '' && ask1.length < 50) {
// 			personalMovieDB.movies[ask1] = ask2;
// 			console.log('done!');
// 		} else {
// 			console.log('error -___-');
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();


// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		alert("Просмотрено довольно мало фильмов");
// 	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
// 		alert("Вы классический зритель");
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log("Вы киноман!");
// 	} else {
// 		alert("Error!!!");
// 	}
// }

// detectPersonalLevel();


// // Задание 2.

// function showMyDB(){
// 	if(personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	} else {

// 	}
// }

// showMyDB();

// // Задание 3.

// function writeYourGenres() {
// 	for (var i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// 	}
// }

// writeYourGenres();

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 17.Callback функции.

console.log('Lesson 17:');

// function first() {
// 	setTimeout(function() {
// 		console.log(1);
// 	}, 500);
// }

// function second(){
// 	console.log(2);
// }

// first();
// second();

// Т.е. не смотря на позицию функции в коде результат выполнения может быть не в таком же порядке

function learnJS(lang, callback) {
	console.log(`Я учу ${lang}`);
	callback();
}

learnJS('JavaScript', function() {
	console.log('Я прошел этот урок!');
})

// Callback позволяет убедиться в том, что исполнение определенного кода начнётся только тогда, когда выполнится основной/желаемый код

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 18.Объекты и их деструктуризация.

console.log('Lesson 18:');


// Наш объект
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('функция makeTest активна');
	}
};

// Выводим значение свойства name объекта options
console.log(options.name);

// Убираем свойство name из объекта options
delete options.name;

// Выводим все свойства нашего объекта options
console.log(options);

// Функции и методы которые имеются внутри объекта.
// Запускаем метод makeTest объекта options
options.makeTest();

// -----------------------------------------------
// let optionsCount = 0; // считаем количество свойств
// -----------------------------------------------

// Деструктуризация это стандарт ES6, который позволяет достучаться до вложенных свойств объекта и использовать их в качестве отдельных структур.

// Разделяем на более мелкие структуры
const {border, bg} = options.colors;
console.log(border);
console.log('Деструктуризация удалась!');


// Перебор всех свойств объекта и перебор объекта внутри объекта :D 

for (let key in options) {

	if(typeof(options[key]) === 'object') {
		console.log('Мы можем перебирать объекты внутри объекта');

		for (let i in options[key]) {
			console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
			// optionsCount++;
		}

	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		// optionsCount++;
	}

}

// -----------------------------------------------
// console.log("У нашего объекта " + optionsCount + " свойства");
// -----------------------------------------------

// Или

// -----------------------------------------------
// console.log(Object.keys(options).length); // Обязательно с большой буквы!!!
// -----------------------------------------------

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 19. Массивы и псевдомассивы. Методы Массивов.

console.log('Lesson 19:');

const myArray = [1, 2, 3, 6, 8];

// Метод pop удаляет последний элемент массива
myArray.pop();
// Метод push добавляет последний элемент массива
myArray.push(10);

console.log(myArray);

// У каждого элемента массива есть свой номер т.е. индекс

// Перебор массива 1 способ
// for (let i = 0; i < myArray.length; i++) {
// 	console.log(myArray[i]);
// }

// Перебор массива 2 способ, работает только с массивоподобными сущностями и можно использовать break и continue в цикле
// for (let value of myArray) {
// 	console.log(value);
// }

// Свойство langth состоит из последнего элемента массива +1
// myArray[99] = 0; // Нарушаем логику
// console.log(myArray.length);

// Ещё один, более настраиваемый способ перебора
// Функция имеет три аргумента аргумент, номер, колбэк
myArray.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${myArray}`);
});

// Другие методы split join sort:

// const prod = prompt("", "");
// const products = prod.split(","); // Пропуск
// console.log(products);
// console.log(products.join(';')); // Объединение элементов массива

myArray.sort(compareNum); // Сортировка элементов.Может принимать callback функцию

function compareNum(a, b) {
	return a - b; // Алгоритм быстрой сортировки.
}

console.log(myArray);

// Понятие псевдомассива: Объект структура которого совпадает со структурой массива, но не имеет никаких методов.

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// Урок 20.




// -----------------------------------------------
// Функционал Страницы

// Кнопка

$('.is-trigger').on('click', function(e) {
	$('.trigger-content').slideToggle("slow");
});