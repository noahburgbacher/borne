var videos = document.querySelectorAll(".video");
var slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function playNextSlide() {
  const currentSlide = slides[currentIndex];
  const video = currentSlide.querySelector(".video");

  if (video) {
    currentSlide.classList.add("active");
    video.play();
    video.addEventListener(
      "ended",
      () => {
        video.pause();
        currentSlide.classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        playNextSlide();
      },
      { once: true }
    );
  } else {
    currentSlide.classList.add("active");
    setTimeout(() => {
      currentSlide.classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      playNextSlide();
    }, 2000);
  }
}

playNextSlide();
