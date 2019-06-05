//  Перебирающие методы. 

//  1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, 
// каждый элемент которого будет хранить информацию о числе и его четности: 
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let originalNumbers = [1, 2, 3, 5, 8, 9, 10];

let newInfoArray = originalNumbers.map(function(originalNumber){
	let intObj = {};

	intObj.digit = originalNumber;

	if (originalNumber % 2 == 0) {

		intObj.odd = true;

	} else {

		intObj.odd = false;

	};

	return intObj;
});

console.log(newInfoArray);



// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. 
// Если да - вернуть false.

let arrForCheck = [12, 4, 50, 1, 0, 18, 40];

function checkArrForZero(number){

	return number !== 0;

};

console.log(arrForCheck.every(checkArrForZero));


// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] 
// хотя бы одно слово длиной больше 3х букв. 
// Если да - вернуть true

let stringArr = ['yes', 'hello', 'no', 'easycode', 'what'];

function checkArrForWordLength(word){

	return word.length > 3;

};

console.log(stringArr.some(checkArrForWordLength));



// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке 
// {буква: “a”, позиция_в_предложении: 1}: [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, 
// {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, 
// {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, 
// {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт строку, 
// основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки

let arrWithInfoOfSymbols = [ { char: "a" , index : 12 }, 
						     { char: "w" , index : 8 }, 
						     { char: "Y" , index : 10 }, 
						     { char: "p" , index : 3 }, 
						     { char: "p" , index : 2 }, 
						     { char: "N" , index : 6 }, 
						     { char: " " , index : 5 }, 
						     { char: "y" , index : 4 }, 
						     { char: "r" , index : 13 }, 
						     { char: "H" , index : 0 }, 
						     { char: "e" , index : 11 }, 
						     { char: "a" , index : 1 }, 
						     { char: " " , index : 9 }, 
						     { char: "!" , index : 14 }, 
						     { char: "e" , index : 7 }
						    ]; 



let sortIndexArr = arrWithInfoOfSymbols.sort(function (prop, propSecond) {
	if (prop.index > propSecond.index) {
    	return 1;
  	}
  	if (prop.index < propSecond.index) {
    	return -1;
  	}

  	return 0;
});

let result = sortIndexArr.reduce(function(sum, current) {
  return sum.concat(current.char);
},

[]
);

console.log(result.join(''));



//  Метод  Sort.

// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы 
// (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

let sortArr =  [ [14, 45], [1], ['a', 'c', 'd'] ];

let sortArrFromLeast = sortArr.sort(function (prop, propSecond) {
	if (prop.length > propSecond.length) {
    	return 1;
  	}
  	if (prop.length < propSecond.length) {
    	return -1;
  	}

  	return 0;
});

console.log(sortArrFromLeast);

// 2. Есть массив объектов:
// [{cpu: 'intel', info: {cores:2, сache: 3}}, {cpu: 'intel', info: {cores:4, сache: 4}}, 
// {cpu: 'amd', info: {cores:1, сache: 1}}, {cpu: 'intel', info: {cores:3, сache: 2}}, {cpu: 'amd', info: {cores:4, сache: 2}}]
// Отсортировать их по возрастающему количеству ядер (cores).

let coresArr = [ { cpu: 'intel', 
  				   info: { 
  				   	cores:2, 
  				   	сache: 3 
  				   } 
  				 }, 

				 { cpu: 'intel', 
				   info: { 
				   	cores:4, 
				   	сache: 4 
				   } 
				 }, 

				 { cpu: 'amd', 
				   info: { 
				   	cores:1, 
				   	сache: 1 
				   } 
				 }, 

				 { cpu: 'intel', 
				   info: { 
				   	cores:3, 
				  	сache: 2 
				  } 
				 }, 

				 { cpu: 'amd', 
				   info: { 
				   	cores:4, 
				   	сache: 2 
				   } 
				 }
			   ];


let sumOfCores = coresArr.sort(function(prop, propSecond){
	if (prop.info.cores > propSecond.info.cores) {
    	return 1;
  	}
  	if (prop.info.cores < propSecond.info.cores) {
    	return -1;
  	}

  	return 0;
});

console.log(sumOfCores);

//  3. Создать функцию, которая будет принимать массив продуктов и две цены. 
// Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// let products = [{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18}, 
// {title: 'prod3', price: 15}, {title: 'prod4', price: 25}, {title: 'prod5', price: 18.9}, 
// {title: 'prod6', price: 8}, {title: 'prod7', price: 19}, {title: 'prod8', price: 63}];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
 
let products = [ 
				 { title: 'prod1', 
 				   price: 5.2
 				 },  

				 { title: 'prod2', 
				   price: 0.18
				 }, 

				 { title: 'prod3', 
				   price: 15
				 },

				 { title: 'prod4', 
				   price: 25
				 },

				 { title: 'prod5', 
				   price: 18.9
				 }, 

				 { title: 'prod6', 
				   price: 8
				 }, 

				 { title: 'prod7', 
				   price: 19
				 },

				 { title: 'prod8', 
				  price: 63
				 }
			   ];


function filterCollection( products, priceLow, priceHigh ){
	let newArrArr = [];
	
	for (i = 0; i < products.length; i++){
		if (products[i].price >= priceLow && products[i].price <= priceHigh) {
			newArrArr.push(products[i]);
		};
	};

	return newArrArr.sort(function(prop, propSecond){
	if (prop.price > propSecond.price) {
    	return 1;
  	}
  	if (prop.price < propSecond.price) {
    	return -1;
  	}
  	return 0;
	});

};

console.log(filterCollection( products, 15, 30 ));


