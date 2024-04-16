const swiper = new Swiper('.reviews-slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 22,
  navigation: {
    nextEl: '.reviews__item-prev',
    prevEl: '.reviews__item-next',
  },
});


// burger
const btn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

btn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
})


// accordeon
const accordeonBtn = document.querySelectorAll('.accordeon__title');
const text = document.querySelectorAll('.accordeon__descr');


for (i = 0; i < accordeonBtn.length; i++) {
  accordeonBtn[i].addEventListener("click", function () {
    let text = this.nextElementSibling;
    text.classList.toggle('accordeon-open');
  })
}
