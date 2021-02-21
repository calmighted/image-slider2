const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
//button
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');


let counter = 1;
const size = images[0].clientWidth;

nextBtn.addEventListener('click',()=>{
    console.log("clicked")
    if(counter <= 6) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


prevBtn.addEventListener('click',()=>{
    console.log("clicked")
    if(counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


