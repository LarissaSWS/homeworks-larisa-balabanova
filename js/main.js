// DOM. Задачи.

// Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head

console.log(document.head);

// 2. body

console.log(document.body);

// 3. все дочерние элементы body и вывести их в консоль.

console.log(document.body.children);

// 4. первый div и все его дочерние узлы

// а) вывести все дочерние узлы в консоль

console.log(document.body.firstElementChild.children);

// б) вывести в консоль все дочерние узлы, кроме первого и последнего

let childrenArray = document.body.firstElementChild.children;

for (var i = 1; i < childrenArray.length - 1; ++i) {
    console.log(childrenArray[i])
}

console.log(childrenArray.slice(1, childrenArray.length - 1));

// Для навигации по DOM использовать методы, которые возвращают только элементы



// DOM.

// 1. Создать функцию, которая принимает два элемента.

// Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

function isParent(parent, child){
             console.log(parent.contains(child));
        };

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));



// 2. Получить список всех ссылок, которые не находятся внутри списка ul

function getArrayWithoutUl (link) {
    return !link.closest('ul')
};

let newArrayFromBodyA = Array.from(document.links).filter(getArrayWithoutUl);
console.log(newArrayFromBodyA);


// 3. Найти элемент, который находится перед и после списка ul

let getSelectorUl = document.querySelector('ul');

console.log(getSelectorUl.previousElementSibling);
console.log(getSelectorUl.nextElementSibling);

// 4. Посчитать количество элементов li в списке

let listLength = document.getElementsByTagName('li');

console.log(listLength.length);


// 5. В коде с занятия написать функцию по редактированию задачи.
let storage = {
    todos: []
};

function generateId() {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of words) {
        let index = Math.floor(Math.random() * words.length);
        id += words[index];
    }

    return id;
}

function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    const newTask = {
        title,
        text,
        id: generateId()
    };

    storage.todos.push(newTask);

    return storage.todos;
}

addNewTodoToStorage('My title 1', 'My text 1');
addNewTodoToStorage('My title 2', 'My text 2');
addNewTodoToStorage('My title 3', 'My text 3');
addNewTodoToStorage('My title 4', 'My text 4');

function deleteTodoFromStorage(id) {
    if (!id) return console.log('Передайте id задачи');

    const taskIndex = storage.todos.findIndex((task) => task.id === id);

    if (taskIndex === -1) return console.log('id несуществуе');

    const removedTask = storage.todos.splice(taskIndex, 1);

    return removedTask;
}


function editTaskStorage(id, title, text) {
    if (!title) return console.log('Введите новый заголовок задачи');
    if (!text) return console.log('Введите новый текст задачи');
    if (!id) return console.log('Не выбрано задание для изменения');

    const taskIndex = storage.todos.findIndex((task) => task.id === id);

    if (taskIndex === -1) return console.log('id несуществуе');

    const changedTask = {
        title,
        text,
        id
    };

    storage.todos[taskIndex] = changedTask;

    return storage.todos;
}

// editTaskStorage('some id', 'new title', 'new text');
console.log(storage.todos);
