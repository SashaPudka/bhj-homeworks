let editor = document.querySelector('#editor')
let buttonCl = document.querySelector('.buttonForClear')

editor.value = localStorage.getItem('editor')

editor.addEventListener('keyup', () => {
    localStorage.setItem('editor', editor.value);
});
    buttonCl.addEventListener('click', () => {
        localStorage.removeItem('editor');
        editor.value = '';
    })

