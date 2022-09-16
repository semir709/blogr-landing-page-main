
const btn_nav = document.querySelectorAll('.btn-nav');

btn_nav.forEach(element => {

    element.addEventListener('click', (event) => {

        const li = event.target.closest('li').querySelector('.list');
        const arrow_light = event.target.closest('.btn-nav').querySelector('.arrow-light');
        const arrow_dark = event.target.closest('.btn-nav').querySelector('.arrow-dark');
        const label = event.target.closest('.btn-nav').querySelector('label');

        btn_nav.forEach(el => {
            const alEl = el.closest('li').querySelector('.list');
            if(alEl != li && alEl.classList.contains('show')) {

                alEl.classList.remove('show');

            }

            if( (alEl != li) &&
            (
            (el.querySelector('.arrow-light').classList.contains('rotation') || el.querySelector('.arrow-dark').classList.contains('rotation'))
            &&
            el.querySelector('label').classList.contains('highlight')
            )
            )
            {
                el.querySelector('.arrow-light').classList.remove('rotation');
                el.querySelector('.arrow-dark').classList.remove('rotation')
                el.querySelector('label').classList.remove('highlight');
            }

        });

        li.classList.toggle('show');

        label.classList.toggle('highlight');
        // label.style.color = 'red';
        arrow_light.classList.toggle('rotation');
        arrow_dark.classList.toggle('rotation');


    });

});

const hamb_menu = document.querySelector('#haburger-img');
const close_menu = document.querySelector('#close-img');

const nav_container = document.querySelector('#nav-container');

hamb_menu.addEventListener('click', (e) => {

    e.target.style.display = 'none';
    close_menu.style.display = 'block';

    nav_container.classList.toggle('nav-show');

    console.log('open');
    
});

close_menu.addEventListener('click', (e) => {

    e.target.style.display = 'none';
    hamb_menu.style.display = 'block';

    nav_container.classList.toggle('nav-show');
    console.log('close');
});
