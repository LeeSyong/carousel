var presentImage = document.querySelector('.carousel-image');

// 우측 버튼
const rightArrow = document.querySelector('.right');

rightArrow.addEventListener('click', function goNext () {

  const imageSrc = presentImage.getAttribute('src');

  switch (imageSrc) {
    case '/images/image-1.png':
      presentImage.src = '/images/image-2.png';
      break;
    case '/images/image-2.png':
      presentImage.src = '/images/image-3.png';
      break;
    case '/images/image-3.png':
      presentImage.src = '/images/image-4.png';
      break;
    case '/images/image-4.png':
      presentImage.src = '/images/image-5.png';
      break;
    case '/images/image-5.png':
      presentImage.src = '/images/image-1.png';
      break;
  }
});


// 좌측 버튼
const leftArrow = document.querySelector('.left');

leftArrow.addEventListener('click', function goBack () {

  const imageSrc = presentImage.getAttribute('src');

  switch (imageSrc) {
    case '/images/image-1.png':
      presentImage.src = '/images/image-5.png';
      break;
    case '/images/image-2.png':
      presentImage.src = '/images/image-1.png';
      break;
    case '/images/image-3.png':
      presentImage.src = '/images/image-2.png';
      break;
    case '/images/image-4.png':
      presentImage.src = '/images/image-3.png';
      break;
    case '/images/image-5.png':
      presentImage.src = '/images/image-4.png';
      break;
  }
});

// 하단의 Dot 5개 - ex) index가 0인 버튼을 누를 때 화면에 image-1 띄우기

const btns = document.querySelectorAll('.carousel-dot');

btns.forEach(function clickBtn (btn, index) {

  btns[index].addEventListener('click', function showImage () {
    presentImage.src = `/images/image-${index+1}.png`;
  });
});