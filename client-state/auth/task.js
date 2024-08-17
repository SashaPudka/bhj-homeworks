let form = document.getElementById('signin__form')
let btn = document.querySelector('.btn')

// при обновении страницы для обнуления localStorage
localStorage.removeItem('id');

let item = localStorage.getItem('id')
if(item) {
    document.querySelector('#signin').classList.remove('signin_active');
    document.querySelector('.welcome').classList.add('welcome_active');
    document.querySelector('#user_id').textContent = item;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    const formData = new FormData(form)
    xhr.send(formData);
    form.reset();

    xhr.onload = function() {
        let response = xhr.response;
        if (xhr.status != 201) {
            alert (`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else if (response['success']) {
                    document.querySelector('#signin').classList.remove('signin_active');
                    document.querySelector('.welcome').classList.add('welcome_active');
                    localStorage.setItem('id',response['user_id']) 
                    document.querySelector('#user_id').textContent = response['user_id']
            }  else {
                alert('Неверный логин/пароль');
            }
    }
})
