// Инициализация слайдера Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Сообщение после отправки формы
document.querySelector('#order').addEventListener('submit', function() {
  alert("Ваша заявка отправлена, мы свяжемся с вами в ближайшее время!");
});