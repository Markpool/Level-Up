var acc = document.getElementsByClassName('accordion');
var i;

  //раскрытие аккординга
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } 
  });
  //таймер
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 30 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);

  document.oninput = function() {
    var input = document.querySelector('.telephone-phoneinput');
    input.value = input.value.replace (/[^\+\d]/g, '');
  }
  
  //Валидация 
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, введите имя.",
        },

        phone: {
          required: "Формат: 89ХХХХХХХХ",
          minlength: "Формат: 89ХХХХХХХХ"
        },
      },
    });
  });
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalids",
      messages: {
        phone: {
          required: "Формат: 89ХХХХХХХХ",
          minlength: "Формат: 89ХХХХХХХХ"
        },
      },
    });
  });
  //Анимация 
  AOS.init();

}
