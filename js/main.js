//  1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: 
// multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

let n = prompt("Type the number");

function multiply(n) {
	let startNumber = 1;

	for ( i = 1; i <= n; i++) {			
	startNumber *= i;
	};

	return startNumber;
};

if (n > 1) {
  console.log('Ваше число ' + multiply(n));
} else {
  console.log(multiply());;
};

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString(‘test’) // “tset”.

	let stringReverse = 'test';
	let newStringReverse ='';

function reverseString(stringReverse){

	for (i = stringReverse.length-1; i >= 0; i--) {
	newStringReverse += stringReverse[i];
	};
	return newStringReverse;
}; 

console.log(reverseString(stringReverse));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”


let newRowString = "hello";

let myRowStringSplit = newRowString.split('');

function sayHello(myRowStringSplit){
	for ( i = 0; i < myRowStringSplit.length; i++){
	var unicodeString = myRowStringSplit[i].charCodeAt(0);
	myRowStringSplit[i] = unicodeString;
}

return myRowStringSplit;
let finish = myRowStringSplit.join(' ');

};

console.log(sayHello(myRowStringSplit));



// 4. Создать функцию угадай число. Она принимает число от 1-10 
//(обязательно проверить что число не больше 10 и не меньше 0). 
//Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает 
//“Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
//Числа в строке указаны как пример вы подставляете реальные числа.

let userNumber = prompt('Your number -');
let compNumber = '';


function getRandomNumber(max, min) {
	compNumber = Math.floor(Math.random() * (max - min) + min);

	if ( userNumber > 10 || 0 > userNumber || userNumber === ""){
		console.log("Type another number from 0 to 10");
	} else {
		if (userNumber == compNumber) {
			console.log("Вы выиграли");
		} else {
			console.log("Вы не угадали, ваше число " + userNumber + ", а выпало число " + compNumber);
		}
	};
};

getRandomNumber(1,11);

// 5. Создать функцию, которая принимает число n и возвращает массив, 
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

let userNumberArr = prompt("You number of Array is ");

function getArray(userNumberArr){
		let myFirstArray = [];
		for ( var i = 1; i <= userNumberArr; i++ ){
			let l = myFirstArray.push(i);
		};
		return myFirstArray;
};
		
console.log(getArray(userNumberArr));

// 6. Создать функцию, которая принимает массив, 
//а возвращает новый массив с дублированными элементами входного массива:
//doubleArray([1,2,3]) // [1,2,3,1,2,3]


let mySecondArr = [ 1 , 2 , 3 ];

function doubleArray(mySecondArr){
	let newMySecondArr = mySecondArr.concat(mySecondArr);
	return newMySecondArr;
};

console.log(doubleArray(mySecondArr));


// 7. Создать функцию, которая принимает произвольное (любое) число массивов 
// и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.


function changeCollection() {
	let mass = [];
    for (let i = 0; i < arguments.length; i++){
    	arguments[i].shift();
        mass.push(arguments[i]);
    };
    return mass;
}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']));


//8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам. 
// funcGetUsers(users, “gender”, “male”);[ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

let ourUsers = [ {name: 'Denis', age: '29', gender: 'male'} , 
				 {name: 'Ivan', age: '20', gender: 'male'},
				 {name: 'Nastya', age: '16', gender: 'female'} ];

function funcGetUsers(ourUsers){
	let newOurUsers = [];
	for (i=0; i < ourUsers.length; i++){
		if (ourUsers[i].age == 20) {
			newOurUsers.push(ourUsers[i]);
		};
	};
	return newOurUsers;
};

console.log(funcGetUsers(ourUsers));




