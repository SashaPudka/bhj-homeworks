const clicker = document.getElementById('clicker__counter')
const cookieClick = document.getElementById('cookie')

let clickNumber = 0;

cookieClick.onclick = function() {

    clickNumber++;
    if (clickNumber % 2 === 0) {
        cookieClick.width +=50;
    } else {
        cookieClick.width -=50;
    }

    clicker.textContent = clickNumber;
}
