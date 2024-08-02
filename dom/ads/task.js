const elements = [...document.querySelectorAll('.rotator__case')]
const activeClass = 'rotator__case_active'


let activeElementIndex = elements.findIndex( item => 
    item.classList.contains(activeClass));

const getIndex = () => activeElementIndex === elements.length - 1 ? 0 : activeElementIndex + 1;

const rotatorFunc = () => {
    const currentCase = elements[activeElementIndex];
    const nextIndex = getIndex();
    const nextCase = elements[nextIndex];

    currentCase.classList.remove(activeClass);
    nextCase.classList.add(activeClass);

    activeElementIndex = nextIndex;

}

setInterval(rotatorFunc, 1000);