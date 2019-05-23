//  Свойства. Код Задачи.


// 1. Найти параграф и получить его текстовое содержимое (только текст!)

console.log(document.querySelector('p').textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getInfoNode(node){

    let typeOfNode = node.nodeType;
    let nameOfNode = node.nodeName;
    let numberOfChildren = node.children.length;

    const infoNode = {
        typeOfNode,
        nameOfNode,
        numberOfChildren
    };

    return infoNode;
};

console.log(getInfoNode(document.querySelector('span')));


// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
//     getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let querySelectorUl = document.querySelector('ul').children;

let result = Array.from(querySelectorUl).map((link) => link.textContent);
// let result = Array.from(querySelectorUl).map(function(link){return link.textContent;});

console.log(result);


// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться).
// Конечный результат:
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let pTag = document.querySelector('p');

let childNodesOfP = pTag.childNodes;

for (let i = 0; i < childNodesOfP.length; i++) {

    if (childNodesOfP[i].nodeName == '#text') {

        let textNode = document.createTextNode('-text-');
        pTag.replaceChild(textNode, childNodesOfP[i]);

    }

};



// Свойства. Задачи.

// 1. Найти в коде список ul и добавить класс “list”

document.querySelector('ul').classList.add("list");


// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

document.querySelector('ul ~ a').setAttribute('id','link');



// 3. На li через один (начиная с самого первого) установить класс “item”

let nodesOfLi = document.querySelectorAll('ul li');

let arrayWithNodes = Array.from(nodesOfLi);

let getClassNamedItem = arrayWithNodes.map(function (link, index) {

    if (index % 2 == 0) {
        link.classList.add("item")
    };

});



// 4. На все ссылки в примере установить класс “custom-link”

let allLinksOfExemple = document.links;

Array.from(allLinksOfExemple).map((link) => link.classList.add("custom-link"));



// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>

// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ulElement = document.querySelector('ul');

let allLiFromUl = document.querySelectorAll('ul li');

let fragment = document.createDocumentFragment();

allLiFromUl.forEach(function (element, index) {

    let createTagLi = document.createElement('li');

    createTagLi.classList.add('new-item');

    createTagLi.textContent = `item ${index+1}`;

    fragment.appendChild(createTagLi);

});

ulElement.appendChild(fragment);


// 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).

// let linksInUl = document.querySelectorAll('ul a');
//
// for (i = 0; i < linksInUl.length; i++){
//
//     let link = linksInUl[i];
//     let createElementStrong = document.createElement('strong');
//     let textFromA = link.innerText;
//
//     link.insertAdjacentHTML('afterbegin', firstPart);
//     link.insertAdjacentHTML('beforeend', nextPart);


let linksInUl = document.querySelectorAll('ul a');

    for (let i = 0; i < linksInUl.length; i++) {
        let createElementStrong = document.createElement('strong');
        let link = linksInUl[i];
        createElementStrong.innerText = link.innerText;
        link.innerHTML = '';
        link.insertAdjacentElement('afterbegin', createElementStrong);
    };


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

let createImgElement = document.createElement('img');

createImgElement.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Пример.png');

createImgElement.setAttribute('alt', 'Example');

let getBodyFirstChild = document.body.firstElementChild;

document.body.insertBefore(createImgElement, getBodyFirstChild);



// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let getMarkElement = document.querySelector('mark');

getMarkElement.innerText += " green";

getMarkElement.classList.add('green');



// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let allLi = document.querySelectorAll("ul li");

let reverseArray = Array.from(allLi).reverse();

let ulTag = document.querySelector('ul');

for (let i = 0; i < reverseArray.length; i++) {
    ulTag.appendChild(reverseArray[i]);
}




