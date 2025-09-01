// Typing Effect
if (document.getElementById("typed")) {
  const words = ["Happy Birthday!", "Wishing you joy 🎉", "Have a special day!"];
  let i = 0, j = 0, currentWord = "", isDeleting = false;
  const typed = document.getElementById("typed");

  function type() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
        typed.textContent = currentWord;
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
        typed.textContent = currentWord;
      }
      if (j === words[i].length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        if (i === words.length) i = 0;
      }
      setTimeout(type, isDeleting ? 50 : 150);
    }
  }
  type();
}

// Scroll Fade
const fadeElements = document.querySelectorAll(".scroll-fade");
window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Cake Surprise
const surpriseBtn = document.getElementById("openSurprise");
if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    const cake = document.querySelector(".cake-container");
    if (cake) cake.classList.add("show");

    const music = document.getElementById("bgMusic");
    if (music) music.play();

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  });
}

// Swiper
if (document.querySelector(".mySwiper")) {
  new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Countdown
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  // Set target: midnight end of today
  const endDate = new Date();
  endDate.setHours(23, 59, 59, 999);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      countdownEl.textContent = "🎉 Birthday has ended — but memories last forever 💖";
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${hours}h : ${minutes}m : ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
