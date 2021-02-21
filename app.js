const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
//button
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');


let counter = 1;
const size = images[0].clientWidth;

console.log(size)
nextBtn.addEventListener('click',()=>{
    
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


