
const btn_nav = document.querySelectorAll('.btn-nav');

btn_nav.forEach(element => {

    element.addEventListener('click', (event) => {

        const li = event.target.closest('li').querySelector('.list');
        const img = event.target.closest('.btn-nav').querySelector('img');
        const label = event.target.closest('.btn-nav').querySelector('label');

        btn_nav.forEach(el => {
            const alEl = el.closest('li').querySelector('.list');
            if(alEl != li && alEl.classList.contains('show')) {

                alEl.classList.remove('show');

            }

            if( (alEl != li) && (el.querySelector('img').classList.contains('rotation') && el.querySelector('label').classList.contains('highlight'))){
                el.querySelector('img').classList.remove('rotation')
                el.querySelector('label').classList.remove('highlight');
            }

        });

        li.classList.toggle('show');

        label.classList.toggle('highlight');
        img.classList.toggle('rotation');
    });

});
