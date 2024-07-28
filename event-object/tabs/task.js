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
