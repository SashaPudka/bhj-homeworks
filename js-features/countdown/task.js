let counter = function() {

let counterTimer = document.getElementById('timer')
  counterTimer.textContent--;
    if (counterTimer.textContent < 0) {
        alert('Вы победили в конкурсе')
        clearInterval(id)
    }
}

let id = setInterval(counter, 1000);