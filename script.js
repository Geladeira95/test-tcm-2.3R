function toggleSidebar() {
    var sidebar = document.getElementById("div_menu");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}



function toggleLightDarkMode() {
    document.body.classList.toggle("light-mode");
}


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let a = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(${-a * 260}px)`;
}

nextBtn.addEventListener('click', () => {
  a = (a + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  a = (a - 1 + cards.length) % cards.length;
  updateCarousel();
});
