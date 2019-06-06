// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.


let btn = document.getElementById('btn-msg');
btn.addEventListener('click', () => alert(btn.dataset.text));


// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
//    она становится прежнего цвета. Цвет менять можно через добавление класса.

btn.addEventListener('mouseover', () => btn.classList.add('red'));
btn.addEventListener('mouseout', () => btn.classList.remove('red'));


// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

let areaForClick = document.body;
let idTag = document.getElementById('tag');
//let text = idTag.innerText + " ";

areaForClick.addEventListener('click', ({target}) => {

    idTag.innerText = `Tag: ${target.tagName}`;

});


// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
// порядковый номер Li по списку, т.е Item 3, Item 4 и т.д


let btnGenerate = document.getElementById('btn-generate');
let ulElement = document.querySelector('ul');

function addTheLi() {

    let liElement = document.querySelectorAll('ul li');
    let createLi = document.createElement('li');

    createLi.textContent = `Item ${liElement.length+1}`;
    ulElement.appendChild(createLi);

}

btnGenerate.addEventListener('click', addTheLi);


