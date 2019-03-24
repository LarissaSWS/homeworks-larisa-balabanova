let string = 'some test string';

alert(string[0]); //получаем первую букву
alert(string.length); //определяем длину
alert(string.length-1); //последний символ строки
alert(string[15]); //получаем последнюю буквы
alert(string[0].toUpperCase()); //делаем первую букву большой
alert(string[15].toUpperCase()); //делаем последнюю букву большой
alert(string.indexOf("string")); //находим положение слова в строке
alert(string.indexOf("string")-1); //положение второго пробела
alert(string.substr(5,4));// получаем строку с 5 символа 4 буквы
alert(string.slice(5,9));// получаем строку с 5 по 9 символы
alert(string.slice(0, -6) );// новая строка с удалением 6 символов из предыдущей строки
var a = '20';
	b = '16';
	string = a + b; 
	alert(string); // получение из двух переменных одной с значением "2016"



var PI = 3.14159265359;
	alert(Math.round(PI * 100) / 100); //округление до 2 знаков после запятой

alert(Math.max(15, 11, 16, 12, 51, 12, 13, 51)); // получение наибольшего числа

alert(Math.min(15, 11, 16, 12, 51, 12, 13, 51)); // получение наименьшего числа

var numberRandom = Math.random();
alert(numberRandom);				// Получаем случайное число
alert(Math.round(numberRandom * 100) / 100); // округление до 2 знаков после запятой

var numberRandomToTen = Math.floor(Math.random() * 11); 
alert(numberRandomToTen); // случайное целое число от 0 до 10

var numbersPlus = 0.6 + 0.7;
alert(Math.round(numbersPlus * 10) / 10); // приведение результата к 1.3

var numberString = '100$';
alert(parseInt(numberString)); //получение число из строки "100$"