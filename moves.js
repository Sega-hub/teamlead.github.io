const phoneForm = document.querySelector("#phoneForm");
const button = document.querySelector("#form__button");
const nameForm = document.querySelector("#nameForm");

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel__item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showItem(newIndex) {
        if (newIndex < 0) {
            index = items.length - 1;
        } else if (newIndex >= items.length) {
            index = 0;
        } else {
            index = newIndex;
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => showItem(index - 1));
    nextButton.addEventListener('click', () => showItem(index + 1));
});

document.addEventListener('DOMContentLoaded', (event) => {
    let time = 30 * 60; 
    const minutesElement = document.querySelector(".timer");
  
    function updateTimer() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
  
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      minutesElement.innerText = `До окончания акции осталось всего ${minutes}:${seconds} минут`;
  
      if (time > 0) {
        time--;
      } else {
        clearInterval(timerInterval);
      }
    }
  
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); 
  });

  function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  button.addEventListener('click', function(event) {
    console.log(nameForm.innerHTML);
    alert(`Бльшое спасибо ${nameForm.value}! Заказ оформлен по номеру ${phoneForm.value}`);
  })
