
let elements = Array.from(document.querySelectorAll('.has-tooltip'))

elements.forEach( element => {

    let newElement = document.createElement('div')
    newElement.textContent = element.title;

        element.addEventListener('click', (e) => {
            e.preventDefault()

            newElement.classList.add('tooltip')
            element.insertAdjacentElement('afterEnd', newElement);
            newElement.style.position = 'absolute';
            newElement.style.left = `${element.getBoundingClientRect().left}px`;
            newElement.style.top = `${element.getBoundingClientRect().bottom}px`;

        let activeClass = Array.from(document.querySelectorAll('.tooltip_active'))
        let result = activeClass.find(newElement => newElement.classList.contains('tooltip_active'))

            if (result === undefined || result !== newElement ) {
                newElement.classList.add('tooltip_active')
            } else {
                newElement.classList.remove('tooltip_active')
     }})
});  
