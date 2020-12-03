const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav-link');
const navToggler = ()=>{
   burger.addEventListener('click',()=>{
       navLink.classList.toggle('show');
       burger.classList.toggle('toggle');
   })
}
navToggler();



const next =document.querySelector('#next');
const previous =document.querySelector('#previous');
const slideSrc = document.querySelector('#sliderIndex');
let imgList =['./img/slider/slider01.jpg', './img/slider/slider02.jpg', './img/slider/slider03.jpg'];
let i = 0;
next.addEventListener('click',()=>{
    if ( i < 2){
        i++;
        slideSrc.src = imgList[i];
    } else
    {
        i = 0;
        slideSrc.src = imgList[0];
    }
    slideSrc.classList.add('slideAnimation');
    console.log(i);
    
})

previous.addEventListener('click',()=>{
    if (i >= 0){
        i--;
        slideSrc.src = imgList[i];
    } else if ( i = -1){
        i=0;
        slideSrc.src = imgList[i];
    }
    {
        slideSrc.src = imgList[i];
    }
    slideSrc.classList.add('slideAnimation');
    console.log(i);
    
})
