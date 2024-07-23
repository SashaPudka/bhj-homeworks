const hole = document.querySelector('hole')

const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

let getHole = index => document.getElementById(`hole${index}`)

    for (i = 0; i < 10; i++) {
        let holeItem = getHole(i)

        holeItem.addEventListener('click', () => {
            if (holeItem.className.includes('hole_has-mole')) {
                dead.textContent++
            } 
              lost.textContent++
        })
    
    }

if (lost.textContent === 10) {
    alert('Вы выиграли')
    dead.textContent === 0;
    lost.textContent === 0;
}

if (dead.textContent === 5) {
    alert('Вы проиграли')
    dead.textContent === 0;
    lost.textContent === 0;
}