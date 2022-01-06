
// var sliderInner = document.querySelector('.history__list');
// scrollCompleted = 0;
// var slideVar = setInterval(function(){
//     if(direction == 'left'){
//       sliderInner.scrollLeft -= 80;
//     } else {
//       sliderInner.scrollLeft += 80;
//     }
//     scrollCompleted += 10;
//     if(scrollCompleted >= 100){
//         window.clearInterval(slideVar);
//     }
//     console.log(scrollCompleted);
// }, 30);


document.querySelector('.posts__box').addEventListener('click',function(evt) {

  if (evt.target.classList.contains('posts__btn')) {
    document.querySelector('.posts__link').classList.remove('posts__btn--active');
    document.querySelector('.videos__link').classList.remove('posts__btn--active');
    document.querySelector('.photos__link').classList.remove('posts__btn--active');

    evt.target.classList.add('posts__btn--active');
  }
})