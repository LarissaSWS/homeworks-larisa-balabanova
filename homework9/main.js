// Деструктуризирующее присвоение

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов
//    и возвращает объект, содержащий первый аргумент и массив из остатка:
//     func(‘a’, ‘b’, ‘c’, ‘d’) → {
//     first: ‘a’,
//     other: [‘b’, ‘c’, ‘d’] }


function getObject(a, ...rest){

    console.log(a, rest);

};

getObject(2,4,5,9,8);

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ ... ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
//     const organisation = {
//         name: 'Google',
//         info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };
// getInfo(organisation); → Name: Google
// Partners: Microsoft Facebook

const organisation = {
    name: 'Google',
    info: {
            employees: ['Vlad', 'Olga'],
            partners: ['Microsoft', 'Facebook', 'Xing']
          }
};

function getInfo({ name, info: { partners: [ nameOfBrand1, nameOfBrand2 ] } }) {

    if ( name === ""){
        name = "Unknown"
    };

    return { name, info: {partners: [ nameOfBrand1, nameOfBrand2]} };

};

console.log(getInfo(organisation));

//   Функции стрлки

// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

//  function sum() {
//     const params = Array.prototype.slice.call(arguments);
//     console.log(arguments);
//      if (!params.length) return 0;
//      return params.reduce(function (prev, next) { return prev + next; }); }
// console.log(sum(1, 2, 3, 4));  // 10 sum(); // 0


let sum = (...rest) => { const params = Array.prototype.slice.call(rest);
if (!params.length) return 0;
return params.reduce((prev, next) => prev + next);
};

console.log(sum(1, 2, 3, 4));


// This

// 1. Создать объект, который описывает ширину и высоту прямоугольника,
// а также может посчитать площадь фигуры:

const rectangle = {
    width: 10,
    height: 15,
    getSquare: function () {
        return this.width*this.height
    }
};

console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода:
// для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice: getPrice,
    getPriceWithDiscount: getPriceWithDiscount
};


function getPrice(){
  return console.log(this.price);
};

function getPriceWithDiscount (){
    return console.log(this.price - (this.price*parseInt(this.discount)/100));
};


price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5


// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”.
// Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;


const object = {
    height: 10,
    getPlusOneToHeight: getPlusOneToHeight
};

function getPlusOneToHeight() {
    return console.log(this.height + 1);
}

object.getPlusOneToHeight();


// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение”
// и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку,
// образуя цепочку методов:


const numerator = {
    value: 1,
    double: function () {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        this.value = this.value + 1;
        return this;
    },
    minusOne: function () {
        this.value = this.value - 1;
        return this;
    }
};
    numerator.double().plusOne().plusOne().minusOne();
    console.log(numerator.value);      // 3


// 1. Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const productInfo = {
    price: 10,
    quantity: 8,
    getTotalCost: function () {
        console.log(this.price * this.quantity);
    }
};

productInfo.getTotalCost();

// 2. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь.
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// Для этого “позаимствуйте” метод из предыдущего объекта.

const productDescription = {
    quantity: 50,
    price: 3
};

productInfo.getTotalCost.call(productDescription);


// 3. Даны объект и функция.
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = {
    width: 5,
    height: 10
    };

    let getSquare = function () {
        return this.width * this.height
    };

console.log(getSquare.call(sizes));

// 4. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight()); // undefined
