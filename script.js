$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

var navigationSelect = document.querySelector('.dropdown');


function initSelect(elem){
   selectHolder = elem.querySelector('.dropdown-toggle');
  var selectOptions = elem.querySelectorAll('.dropdown-menu li');
  var dropHolder = elem.querySelector('.dropdown');
  var selectedOption = selectOptions[0];

  selectedOption.classList.add('current');

  selectHolder.addEventListener('click', function () {
    dropHolder.classList.toggle('active');
   });

  selectOptions.forEach(function(currentElement) {
    currentElement.addEventListener('click', function(){
      selectedOption.classList.remove('current');
      selectedOption = currentElement;
      currentElement.classList.add('current');
      selectHolder.innerText = currentElement.textContent;
      dropHolder.classList.toggle('active');
    });
  });
};

initSelect(navigationSelect);
