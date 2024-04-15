const accordionButton = document.querySelectorAll('.cmp-accordion__item h3 button');

accordionButton.forEach((acc, index) => {
    if (index == 0) {
        acc.parentElement.nextElementSibling.classList.add("active-accordion");
    } else {
        acc.parentElement.nextElementSibling.classList.add("none");
    }
	acc.addEventListener('click', function () {
        const toBeActivepanel = this.parentElement.nextElementSibling;
        const activeAccordion = document.querySelector('.active-accordion');
        
        activeAccordion.classList.toggle('active-accordion');
        activeAccordion.classList.toggle('none');
        
        toBeActivepanel.classList.toggle('active-accordion');
        toBeActivepanel.classList.toggle('none');
    })
})

const prev = document.querySelector('.cmp-carousel__action--previous');
const next = document.querySelector('.cmp-carousel__action--next');
const imagesContainer = document.querySelector('.carousel .cmp-container');
const images = imagesContainer.children;
let index = 0;

prev.addEventListener('click', () => {
    if (index-1 <= -1) return;
    index--;
    imagesContainer.style.transform = `translateX(${index*100}%)`;
})

next.addEventListener('click', () => {
    if (index+1 >= images.length) return;
    index++;
    imagesContainer.style.transform = `translateX(-${index*100}%)`;
})