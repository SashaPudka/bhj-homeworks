let listTasks = document.querySelector('.tasks__list')
let formField = document.querySelector('form')
let buttonAdd = document.querySelector('.tasks__add')

// Добавить задачу

function addTask (event) {
    const inputValue = document.querySelector('.tasks__input')
    event.preventDefault();

    if (inputValue.value.trim()) {
        event.preventDefault();

        listTasks.insertAdjacentHTML('afterBegin', 
            `<div class="task">
               <div class="task__title">
                 ${inputValue.value}
               </div>
             <a href="#" class="task__remove">&times;</a>
             </div>`)

        formField.reset();
    }  
}

buttonAdd.addEventListener('click', addTask);

// Удалить задачу

listTasks.onclick = function(event) {
    let target = event.target;
    event.preventDefault();

    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();
    }
}
