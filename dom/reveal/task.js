    let reveal = document.querySelectorAll('reveal')

        const item = function (e) {
            const viewportHeight = window.innerHeight;

            let top = e.getBoundingClientRect().top;
            let bottom = e.getBoundingClientRect().bottom;

            return (top < viewportHeight && bottom > viewportHeight) ? true : false;
        }
        
        function revealActive() {
            [...reveal].forEach( (e) => {
// запуталась :( через toggle не меняется почему-то класс
             if ( item(e) ) { e.classList.toggle('reveal_active') };
            })
        }

        document.addEventListener('scroll', revealActive, false)

        revealActive();
    