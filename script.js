// =========================================
// VIDEO SLIDER
// =========================================

const slides = document.querySelectorAll(".slide");

let index = 0;


// Cek apakah halaman memiliki video slider
if (slides.length > 0) {

  function showSlide(i) {

    slides.forEach((slide) => {

      // Stop video
      slide.pause();

      // Reset video ke awal
      slide.currentTime = 0;

      // Hilangkan active
      slide.classList.remove("active");

    });

    // Aktifkan video yang dipilih
    slides[i].classList.add("active");
  }


  // NEXT
  window.nextSlide = function () {

    index = (index + 1) % slides.length;

    showSlide(index);

  };


  // PREVIOUS
  window.prevSlide = function () {

    index =
      (index - 1 + slides.length)
      % slides.length;

    showSlide(index);

  };


  // Pindah otomatis setelah video selesai
  slides.forEach((video, i) => {

    video.addEventListener("ended", () => {

      index = (i + 1) % slides.length;

      showSlide(index);

    });

  });


  // Tampilkan video pertama
  showSlide(index);

}


// =========================================
// FALLING PARTICLES
// =========================================

const particleContainer =
  document.querySelector(".particles");


if (particleContainer) {

  // Jumlah partikel
  const particleCount = 70;


  for (let i = 0; i < particleCount; i++) {

    const particle =
      document.createElement("span");


    particle.classList.add("particle");


    // Posisi horizontal random
    particle.style.left =
      Math.random() * 100 + "%";


    // Ukuran random
    const size =
      Math.random() * 3 + 2;


    particle.style.width =
      size + "px";

    particle.style.height =
      size + "px";


    // Kecepatan random
    particle.style.animationDuration =
      Math.random() * 8 + 6 + "s";


    // Delay random
    particle.style.animationDelay =
      Math.random() * 10 + "s";


    // Transparansi random
    particle.style.opacity =
      Math.random() * 0.6 + 0.2;


    // Masukkan particle ke container
    particleContainer.appendChild(
      particle
    );

  }

}