let controlCount = document.querySelectorAll('.product__quantity-control')
let productAdd = document.querySelectorAll('.product__add')
let cart = document.querySelector('.cart__products')


for (let i of controlCount) {
    i.addEventListener('click', addCount)
}
    // фукция счетчик

function addCount(event) {
    let value = document.querySelector('.product__quantity-value')
    let count = +value.innerText;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        count + 1 
    }
        else {
            if (count > 1) {
                count - 1
            }
        }
    }

    // функция по добавлению карточки

    function addCart () {
        
    }

