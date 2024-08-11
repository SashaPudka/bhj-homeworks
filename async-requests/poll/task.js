const pollStart = document.querySelector('.poll__title')
const poll = document.getElementById('poll__answers')


let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {

        let data = JSON.parse(xhr.responseText);
            pollStart.textContent = data['data']['title']

                for (let i in data['data']['answers']) {

                poll.insertAdjacentHTML('beforeend', `<button class="poll__answer" data-id =${i}>
                                                      ${data['data']['answers'][i]}</button>`)
                }
                
        let buttonPoll = document.querySelectorAll('.poll__answer')
        buttonPoll.forEach((elm) => {
            elm.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();