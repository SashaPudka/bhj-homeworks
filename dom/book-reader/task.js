let font_size = document.querySelectorAll('.font-size')
let book = document.querySelector('book')

for (let i = 0; i < font_size.length; i++) {
    font_size[i].addEventListener('click', function(e) {
        font_size[i].classList.toggle('font-size_active')
            e.preventDefault()
    })

    let dataSize = font_size[i].getAttribute('data-size')

    if (dataSize === 'small') {
        book.classList.add('book_fs-small')
        book.classList.remove('book_fs-big')
    }
        else if(dataSize === 'big') {
            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small')
        } 
            else {
                book.classList.remove('book_fs-small')
                book.classList.remove('book_fs-big') 
            }
}

// где-то ошибка, не могу найти, возможно запуталась в цикле с переключением классов







// font_size.onclick = function() {
//     font_size.forEach((e) => {
//         e.classList.toggle('font-size_active'); 
//     })
//     return false; // тут должна отмениться перезагрузка страницы, но не произошло //
// }

