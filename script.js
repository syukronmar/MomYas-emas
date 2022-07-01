const navSlide = () => {
    const button = document.querySelector('.button');
    const nav = document.querySelector('nav ul');

    button.addEventListener('click', () => {
        nav.classList.toggle('slide');
    })
}

navSlide();
