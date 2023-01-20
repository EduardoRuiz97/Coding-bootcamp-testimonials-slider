(function() {
  const sliders = [...document.querySelectorAll('.slide__container')];

  console.log(sliders);
  const arrowbefore = document.querySelector('#prev');
  const arrowafter = document.querySelector('#next');
  let value;

  arrowafter.addEventListener('click', ()=> {
    changePosition(1);
  });

  arrowbefore.addEventListener('click', ()=> {
    changePosition(-1);
  });

  function changePosition(change) {

    const currentElement = Number(document.querySelector('.slide__show').id);
    
    value = currentElement;
    value += change;
    console.log(value);


    console.log(sliders.length)
    
    if (value === 0 || value == sliders.length+1){

      value = value === 0 ? sliders.length : 1;

    }

    sliders[currentElement-1].classList.remove("slide__show")
    sliders[value-1].classList.add('slide__show');

  }

})()

