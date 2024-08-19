let controlCount = document.querySelectorAll('.product__quantity-control')
let productAdd = document.querySelectorAll('.product__add')
let cartAdd = document.querySelector('.cart__products')


for (let i of controlCount) {
    i.addEventListener('click', addCount)
}

for( let i of productAdd) {
    i.addEventListener('click', addCart)
}

    // фукция счетчик

function addCount(event) {
    let value = event.target.parentNode.querySelector('.product__quantity-value')
    let count = +value.innerText;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        value.innerText = Number(value.innerText) + 1;
    }
        else if (count > 1) {
        value.innerText = Number(value.innerText) - 1;
        }
    }

    // функция по добавлению карточки

    function addCart (event) {
        
        const cards = Array.from(document.querySelectorAll('.cart__product'));
        const product = event.target.closest('.product')
        const id = product.dataset.id;
        const countFromProduct = +event.target.parentNode.querySelector('.product__quantity-value').innerText;
        const imgProd = product.querySelector('.product__image').src;

        const productInCard = cards.find(elm => elm.dataset.id === id);
        if (productInCard) {
                let newCount = productInCard.querySelector('.cart__product-count');
                let total = +newCount.innerText
                newCount.innerText = total + countFromProduct; //sum
            
        } else {
            cartAdd.insertAdjacentHTML('afterBegin', `<div class="cart__product" data-id=${id}>
                                              <img class="cart__product-image" src='${imgProd}'>
                                              <div class="cart__product-count">${countFromProduct}</div>
                                              </div>`)
        }
    }