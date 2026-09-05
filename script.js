const slides = document.querySelectorAll(".slide");
const clickR = document.querySelector(".r");
const clickL = document.querySelector(".l");
const dots = document.querySelectorAll("#list > li");

let currentIndex = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");

    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("active");

    if (i === currentIndex) {
      dot.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex++;

  if (currentIndex === slides.length) {
    currentIndex = 0;
  }

  showSlide();
}

function prevSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  showSlide();
}

// فلش راست
clickR.addEventListener("click", () => {
  nextSlide();
});

// فلش چپ
clickL.addEventListener("click", () => {
  prevSlide();
});

// کلیک روی دایره‌ها
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide();
  });
});

// اجرای اولیه
showSlide();

// حرکت خودکار هر 2 ثانیه
setInterval(() => {
  nextSlide();
}, 2000);
