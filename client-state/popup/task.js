let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__close')

// функция возвращает строку
function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=')
      acc[name] = value
      return acc
    })
  }
  
  const cookie = getCookie('modal')

      if(!cookie) {
        modal.classList.add('.modal_active')
        document.cookie = 'modal=open'

        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('.modal_active')
            document.cookie = 'modal=close'
        })
    }



