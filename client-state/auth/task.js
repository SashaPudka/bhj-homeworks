const form = document.forms.signin__form;
const btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();

const item = localStorage.getItem('item')

if(item) {
    document.querySelector('#signin').classList.remove('.signin_active');
    document.querySelector('.welcome').classList.add('.welcome_active');
    document.querySelector('#user_id').textContent = item;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            let data = JSON.parse(xhr.responseText)
            if (data['success']) {

                document.querySelector('.welcome').classList.add('.welcome_active');
                localStorage.setItem('item', data['user_id']) 
                document.querySelector('#user_id').textContent = data['user_id']
            } else {
                alert('Неверный логин/пароль')
            }
        }
    })


    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form)
    xhr.send(formData);
})
