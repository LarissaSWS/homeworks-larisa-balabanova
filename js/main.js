// Объекты

var myShop = new Object();					// задания по созданию обьектов
myShop.product = "iphone";
console.log(myShop.product);
console.log(myShop.price = 100,
			myShop.currency = 'dollar');
myShop.details = new Object();				// создание обьектов в обьекте
myShop.details.model = 'model';
myShop.details.color = 'color';
console.log(myShop.details.model);
console.log(myShop.details.color);


// If...else


let theWord = ""; // Задание 2 (присвоить значение hidden)

if (theWord === "hidden") {
	console.log(theWord = "visible");
} else {
	console.log(theWord = "hidden");
}


let a = 3; // Задание 2 (использовать  if)

if (a === 0) {
	console.log(a = 1);
} else if (a < 0) {
	console.log(a = 'less then zero');
} else {
	console.log(a *= 10);
};

let car = { name: 'Lexus', 
			age: 10, 
			create: 2008, 
			needRepair: false }; // Задание 3 (использовать  if)

if (car.age > 5) {
	console.log('Need Repair');
	console.log(car.needRepair = true);
} else {
	console.log(car.needRepair = false);
};


let item = { name: 'Intel core i7',
			 price: '100$', 
			 discount: '15%' }; // Задание 4 

if (item.discount != undefined && item.discount != '') {
	console.log(item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * (parseInt(item.discount) / 100)) + '$');
} else {
	console.log(item.price);
}

let product = { name: 'Яблоко',			// Задание 5
				price: '10$'};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if ( parseInt(product.price) >= min && parseInt(product.price) <= max ) {
	console.log('название этого товара');
} else {
	console.log('товаров не найдено');
}


