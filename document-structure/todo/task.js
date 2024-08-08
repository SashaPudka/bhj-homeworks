let listTask = document.querySelector('.tasks__list')
let formField = document.querySelector('form')
let inputValue = document.querySelector('.tasks__input')
let buttonAdd = document.querySelector('.tasks__add')
let taskRemove = document.querySelector('.task__remove')
let defaultTask = document.getElementsByTagName('div.tasks__list')

// 1. проверка поле на наличие текста 
// 2. добавление разметки 
// 3. очистка формы
// 3. удаление задачи

function taskAdd (event) {

    if (inputValue.value) {
        event.preventDefault();

        // listTask.insertAdjacentHTML('afterbegin', 
        // '<div class="task">
        //      <div class="task__title">
        //         ${inputValue}
        //         </div>
        //         <a href="#" class="task__remove">&times;</a>
        //         </div>');
// или лучше клонировать родителя и дочек

       
        let copyTask = defaultTask.cloneNode(true);
        copyTask.querySelector('.task__title').innerHtml = inputValue.value
        defaultTask.before(copyTask);

        formField.reset();
    }
}

formField.addEventListener('keydown', (e) => {
    if (e.key === 'enter' && inputValue.value) {
            taskAdd();
            formField.reset();
    }
})

buttonAdd.addEventListener('click', taskAdd);


