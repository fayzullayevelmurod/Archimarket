typed = new Typed('.text_animation span', {
  strings: ['вашей мечты!'],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  loopCount: Infinity,
  startDelay: 1000,
  backDelay: 3000
});

// Select elementini tanlab olamiz
$('.mySelect').select2({
  templateResult: formatOption, // Tanlangan optionni formatlash uchun funksiya
  templateSelection: formatOptionSelection // Tanlangan optionni formatlash uchun funksiya
});

function formatOption(option) {
  if (!option.id) {
    return option.text;
  }

  var $option = $(
    '<span><img src="' + option.element.getAttribute('data-img-src') + '" class="flag-img" /> ' + option.text + '</span>'
  );
  return $option;
}

function formatOptionSelection(option) {
  if (!option.id) {
    return option.text;
  }

  var $option = $(
    '<span><img src="' + option.element.getAttribute('data-img-src') + '" class="flag-img" /> ' + option.text + '</span>'
  );
  return $option;
}

$('.checkbox').each(function (i, el) {
  $(el).find('span').click(function () {
    $(el).find('input[type="checkbox"]').click();
  })
})

$('.upper').on('input', setFill);
$('.lower').on('input', setFill);

var max = $('.upper').attr('max');
var min = $('.lower').attr('min');

function setFill(evt) {
  var valUpper = $('.upper').val();
  var valLower = $('.lower').val();
  if (parseFloat(valLower) > parseFloat(valUpper)) {
    var trade = valLower;
    valLower = valUpper;
    valUpper = trade;
  }

  var width = valUpper * 100 / max;
  var left = valLower * 100 / max;
  console.log(left);
  $('.fill').css('left', 'calc(' + left + '%)');
  $('.fill').css('width', width - left + '%');

  // Update info
  if (parseInt(valLower) == min) {
    $('.easy-basket-lower').val('0');
  } else {
    $('.easy-basket-lower').val(parseInt(valLower));
  }
  if (parseInt(valUpper) == max) {
    $('.easy-basket-upper').val('100000000');
  } else {
    $('.easy-basket-upper').val(parseInt(valUpper));
  }
}

$('.easy-basket-filter-info input').keyup(function () {
  var valUpper = $('.easy-basket-upper').val();
  var valLower = $('.easy-basket-lower').val();
  var width = valUpper * 100 / max;
  var left = valLower * 100 / max;
  if (valUpper > 100000000) {
    var left = max;
  }
  if (valLower < 0) {
    var left = min;
  } else if (valLower > max) {
    var left = min;
  }
  $('.fill').css('left', 'calc(' + left + '%)');
  $('.fill').css('width', width - left + '%');
  // меняем положение ползунков
  $('.lower').val(valLower);
  $('.upper').val(valUpper);
  setFill();
});
// $('.easy-basket-filter-info input').focus(function () {
//   $(this).val('');
// });
$('.easy-basket-lower').blur(function () {
  var valLower = $('.lower').val();
  console.log(valLower);
  $(this).val(Math.floor(valLower));
});
$('.easy-basket-upper').blur(function () {
  var valUpper = $('.upper').val();
  $(this).val(Math.floor(valUpper));
});


// youtube channel
let swiper_one = new Swiper(".youtubeSwiper", {
  navigation: {
    nextEl: ".channel_next",
    prevEl: ".channel_prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// youtube channel

// artist slider
let swiper_two = new Swiper(".artistSwiper", {
  navigation: {
    nextEl: ".artist_next",
    prevEl: ".artist_prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    993: {
      slidesPerView: 6,
      spaceBetween: 18,
    },
  },
});
// artist slider

// popular project
$('.popular_Swiper').each(function (i, el) {
  
  let swiper_three = new Swiper(el, {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let offsetX = -2;
  let clr_timeout;
  let t = true;

  const change_slider = x => {
    clearTimeout(clr_timeout);

    clr_timeout = setTimeout(() => {
      console.log('ishladi');
      if (x > offsetX && t) {
        offsetX = x;
        swiper_three.slideNext();
        t = false;
        setTimeout(() => {
          t = true;
        }, 600);
      } else if (x < offsetX && t) {
        offsetX = x;
        swiper_three.slidePrev();
        t = false;
        setTimeout(() => {
          t = true;
        }, 600);
      }
    }, 30);
  }

  el.onmousemove = e => {
    // console.log(e.offsetX);
    change_slider(e.offsetX);
  }
})
// popular project

// heart icon
let heart = document.querySelectorAll('.heart_icon');

heart.forEach(item => {
  item.addEventListener('click', () =>  {
    item.classList.toggle('active')
  })
})
// heart icon