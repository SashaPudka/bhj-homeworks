    let reveal = document.querySelectorAll('.reveal')

        const item = function (e) {
            const viewportHeight = window.innerHeight;

            let top = e.getBoundingClientRect().top;
            let bottom = e.getBoundingClientRect().bottom;

            return top > 0 && bottom < viewportHeight;
        }
        
        function revealActive() {
            [...reveal].forEach((e) => {
             if (item(e)) {
                 e.classList.add('reveal_active') 
                };
            })
        }

        document.addEventListener('scroll', revealActive)

        revealActive();
    