let tabs = Array.from(document.getElementsByClassName('tab'))
let content = document.getElementsByClassName('tab__content')

function changeContent() {

    for (const tb of tabs) {
        tb.className = 'tab'
    }
    for (const cnt of content) {
        cnt.className = 'tab__content'
    }

    let arrayIndex = tabs.indexOf(this)

    tabs[arrayIndex].className = 'tab tab_active';
    content[arrayIndex].className = 'tab__content tab__content_active';
}

for (const tbs of tabs) {
    tbs.onclick = changeContent;
}


// Можно ли таким было способом решить?
// 
// tabs.addEventListener('click', () => {
//     document.querySelector('.tab').classList.add('.tab_active')
//     document.querySelector('.tab__content').classList.add('.tab__content_active')
// })