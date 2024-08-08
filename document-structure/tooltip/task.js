let elements = [...(document.querySelectorAll('.has-tooltip'))]

elements.forEach((element) => {


        element.addEventListener('click', (e) => {
            e.preventDefault()
            
            // создание элемента
            let newElementOnClick = document.createElement('div');
            newElementOnClick.className = 'tooltip';
            newElementOnClick.textContent = `${element.title}`;


            let aTag = document.getElementsByTagName('a');
            aTag.insertAdjacentHTML('afterbegin', newElementOnClick)

            newElementOnClick.classList.add('tooltip_active')
            
        });
})
