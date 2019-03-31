// Тернарный оператор. Switch case

//  1. Записать в виде switch case следующее условие:
// if (a === ‘block’) { console.log(‘block’)
// } else if (a === ‘none’) { console.log(‘none’)
// } else if (a === ‘inline’) { console.log(‘inline’)
// } else { console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно
// значение.

let display = 'none'; 
switch (display) {
	case 'block': 
		console.log('block'); 
		break; 
	case 'none': 
		console.log('none'); 
		break; 
	case 'inline': 
		console.log('inline'); 
		break; 
	default: console.log('other'); 
}


// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
// оператора.

let theWord = ""; // Задание 1 (присвоить значение hidden)

theWord === "hidden" ? console.log(theWord = "visible") : console.log(theWord = "hidden")


let a = 3; // Задание 2 (использовать  if)

a === 0 
	? console.log(a = 1) 
	: a < 0 
		? console.log(a = 'less then zero')
		: console.log(a *= 10);

let car = { name: 'Lexus', 			// Задание 3 (использовать  if)
			age: 10, 
			create: 2008, 
			needRepair: false }; 

car.age > 5
	? console.log('Need Repair', car.needRepair = true)
	: console.log(car.needRepair = false);

// 2. Циклы

//  1. На основе строки “i am in the easycode” сделать новую строку 
//  где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let exempleString = 'i am in the easycode';
let stringList = exempleString.split(' ');
let strLength = stringList.length;

for (i = 0; i < strLength; i++) {
	var upStr = stringList[i].charAt(0).toUpperCase() + stringList[i].slice(1);
	stringList[i] = upStr;
}

var newString = stringList.join(' ');
console.log(newString);


// 2. Дана строка “tseb eht ma i”. 
// Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let strReverse = 'tseb eht ma i';
let newReverseString ='';
for (i = strReverse.length-1; i >= 0; i--) {
	newReverseString += strReverse[i];
}
console.log(newReverseString); 


// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let factorial = 1;
let n = 10;

for ( i = 1; i <= n; i++) {
	factorial *= i;
}

console.log(factorial);


// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let newStringJs = 'JavaScript is a pretty good language';
let newStringJsSplit = newStringJs.split(' ');
let strLengthNewStringJs = newStringJsSplit.length;

for (i = 0; i < strLengthNewStringJs; i++) {
	var upStrJs = newStringJsSplit[i].charAt(0).toUpperCase() + newStringJsSplit[i].slice(1);
	newStringJsSplit[i] = upStrJs;

}
let joinString = newStringJsSplit.join('');
console.log(joinString);


// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
// Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let massiveRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of massiveRow) { 
	if (value % 2 !== 0) {
    console.log( value );
  }
}

// 6. Дан объект:
// let list = {
// name: ‘denis’, work: ‘easycode’, age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.


let list = {
	name: 'denis', 
	work: 'easycode', 
	age: 29
}

for (let item in list) {
	if (typeof list[item] === 'string')  {
		console.log(list[item].toUpperCase());
		list[item] = list[item].toUpperCase()
	}
}

