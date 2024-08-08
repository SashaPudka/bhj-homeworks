let font_size = [...document.querySelectorAll('.font-size')]
let book = document.querySelector('.book')
let active = document.querySelector('.font-size_active')

for (let i = 0; i < font_size.length; i++) {
    font_size[i].addEventListener('click', function(e) {
        e.preventDefault()
            
        font_size.forEach((element) => element.classList.remove('font-size_active'));
        font_size[i].classList.add('font-size_active')

            let dataSize = font_size[i].getAttribute('data-size')

            if (dataSize === 'small') {
                book.classList.add('book_fs-small')
                book.classList.remove('book_fs-big')
            }
                else if (dataSize === 'big') {
                    book.classList.add('book_fs-big')
                    book.classList.remove('book_fs-small')
                } 
                    else {
                        book.classList.remove('book_fs-small')
                        book.classList.remove('book_fs-big') 
                    }
    })
}