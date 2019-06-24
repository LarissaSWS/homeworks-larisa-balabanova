//  Замыкания

// 1. Создайте функцию которая бы умела делать:
// Подсказка, функция minus должна возвращать другую функцию.

function minus (a = 0){

    return function (b = 0) {

        let rest = a - b;
        return console.log(rest);
    };

};


minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0



// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

// function multiplyMaker ...
// const multiply = multiplyMaker(2); multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3) multiply(10); // 120 (12 * 10)

function multiplyMaker(a){

    return function (b) {
        a = a*b;
        return a;
    };

};

const multiply = multiplyMaker(2);

console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)



// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
//      i. если передано пустое значение, то установить пустую строку
//      ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
//
// Пример:
//      модуль.установитьСтроку(‘abcde’);
//      модуль.получитьСтроку(); // ‘abcde’
//      модуль.получитьДлину(); // 5

const stringModule = (function () {

    let myString;

    function setString(string = '') {
        myString = string;

        if (typeof(string) === "number"){
            myString = String(string);
        };

        return myString;
    }

    function getString() {
        return myString;
    }

    function getStringLength() {
        return myString.length;
    }

    function getStringReverse() {
        return myString.split("").reverse().join("");
    }

    return {
        setString,
        getString,
        getStringLength,
        getStringReverse
    }

})();


console.log(stringModule.setString('abcde'));
console.log(stringModule.getString());
console.log(stringModule.getStringLength());
console.log(stringModule.getStringReverse());


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
//     модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100


const calculator = (function () {

    let a;

    function calcSet(number) {
        a = number;
        return a;
    }

    function calcAddition(number) {
        a = a + number;
        return a;
    }

    function calcMultiplication(number) {
        a = a * number;
        return a;
    }

    function calcSubtraction(number) {
        return a = a - number;
    }

    function calcDivision(number) {
        return a = a / number;
    }

    function calcExponentiation(number) {
        let b = a;

        for (i = 1; i < number; i++) {
            a *= b;
        }

        return a;
    }
    
    function result() {
       return alert(a);
    }

    return {
        calcSet,
        calcAddition,
        calcMultiplication,
        calcSubtraction,
        calcDivision,
        calcExponentiation,
        result
    }

})();

console.log(calculator.calcSet(10));
console.log(calculator.calcAddition(5));
console.log(calculator.calcMultiplication(2));
console.log(calculator.calcSubtraction(4));
console.log(calculator.calcDivision(2));
console.log(calculator.calcExponentiation(4));
calculator.result();



//  Конструкторы


// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины
// (год текущий минус возраст машины, использовать Date для получения текущего года)

// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);

// Марка машины всегда должна возвращаться с большой буквы!

function Car(model, age) {

    this.model = function () {
        return model[0].toUpperCase() + model.substring(1);
    };
    this.age = function (date){
        return date.getFullYear() - age;
    };

};

const date = new Date();
let lexus = new Car('lexus', 2);
console.log(lexus.model());
console.log(lexus.age(date));

// 2. Написать конструктор, который умеет элементарно шифровать строки
// (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением,
// или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку

// Строки не должны быть доступны через this, только с помощью методов.

function Secret(string) {

    this.string = function () {
        return string;
    };

    this.encString = function () {
        return string.split("").reverse().join("");
    };

};

let encryption = new Secret('Some string');
console.log(encryption.string());
console.log(encryption.encString());
