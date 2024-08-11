let items = document.getElementById('items')

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        document.querySelector('.loader').classList.remove('loader_active')
    
        let data = JSON.parse(xhr.responseText)['response']['Valute'];
        
        for (let i in data) {
            items.insertAdjacentHTML('afterBegin', `<div class="item">
                                                   <div class="item__code">${data[i].CharCode}</div>
                                                   <div class="item__value">${data[i].Value}</div>
                                                   <div class="item__currency">руб.</div>
                                                   </div>`)
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
