const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const cafes = {
    1: {title: "Busan's Coffee: Hollys", name: "HOLLYS", rating: "4.0", img: "./img/best1.jpg", img2: "./img/best13.jpg", img3: "./img/best12.jpg", img4: "./img/best14.jpg", naver: "https://naver.me/GYGj4jPM" },
    2: {title: "Busan's Coffee: Pascucci", name: "Pascucci Centuroseomyeon Branch", rating: "4.5", img: "./img/best2.jpg", img2: "./img/best22.jpg", img3: "./img/best23.jpg", img4: "./img/best24.jpg", naver: "https://naver.me/FE3ffIDt" },
    // и так далее
};

if (cafes[id]) {
    document.getElementById('cafe-name').textContent = cafes[id].name;
    document.getElementById('cafe-rating').textContent = cafes[id].rating;
    document.getElementById('cafe-img').src = cafes[id].img;
    document.getElementById('cafe-img2').src = cafes[id].img2;
    document.getElementById('cafe-img3').src = cafes[id].img3;
    document.getElementById('cafe-img4').src = cafes[id].img4;
    document.getElementById('cafe-naver').href = cafes[id].naver;

    document.querySelectorAll(".cafe-name-inline").forEach(el => {
        el.textContent = cafes[id].name;
    });
}






let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function goToSlide(index) {
  if (index < 0) index = carouselItems.length - 1;
  if (index >= carouselItems.length) index = 0;
  currentIndex = index;
  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

goToSlide(0);

setInterval(goToNextSlide, 4000);
