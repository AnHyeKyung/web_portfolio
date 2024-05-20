const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
AOS.init({
  duration: 800, // 애니메이션 지속 시간 (밀리초)
  easing: "ease-in-out", // 애니메이션의 이징 함수
  delay: 100, // 애니메이션 지연 시간 (밀리초)
  offset: 10, // 스크롤 감지의 시작 위치 (픽셀)
});
