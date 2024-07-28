let value = document.querySelector('.dropdown__value')
let drItem = Array.from(document.querySelectorAll('.dropdown__item'))

function openAndCloseMenu() {
    let list = document.querySelector('.dropdown__list')
    list.classList.toggle('dropdown__list_active')
}

value.addEventListener('click', openAndCloseMenu)

        drItem.forEach((item) => {
            item.onclick = function() {
            document.querySelector('.dropdown__value').textContent = item.textContent;
            return false;
            }
        item.addEventListener('click', openAndCloseMenu)
})



