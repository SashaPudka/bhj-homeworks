let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__close')

function getCookie(name) {
  return document.cookie.split('; ').reduce((acc, elm) => {
    if (elm.startsWith(name + '=')) {
      return elm.slice(name.length + 1);
    } else {
      return acc;
    }
  }, 0);
}
  
  const cookie = getCookie('cookie')

      if(!cookie) {
          modal.classList.add('modal_active')
          document.cookie = 'cookie=open'

        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            document.cookie = 'cookie=close'
            modal.classList.remove('modal_active')
        })
    }
