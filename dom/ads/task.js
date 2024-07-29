let rotator = Array.from(document.querySelectorAll('rotator__case'))

console.log(rotator);

function item () {
    rotator.forEach ((el) => {
        el.classList.toggle('rotator__case_active')
    })
}

setInterval(item, 1000);

// не вышло, подскажите где ошибка :)
// в какиех случаях надо перед названием класса ставить точку?
// 'rotator__case' or '.rotator__case' или это зависит использую я queryS или ClassN