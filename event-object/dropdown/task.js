let value = document.querySelector('div.dropdown__value')
let link = Array.from(document.querySelector('a.dropdown__link'))


function openAndCloseMenu() {
    let list = document.querySelector('.dropdown__list')

    list.classList.contains('.dropdown__list_active') ? 
    list.classList.remove('.dropdown__list') : 
    list.classList.add('.dropdown__list_active');
}
    value.addEventListener('click', openAndCloseMenu)

link.forEach((item) => {
    item.onclick = function() {
        document.querySelector('dropdown__value').textContent = item.textContent
    }
    item.addEventListener('click', openAndCloseMenu)
})



