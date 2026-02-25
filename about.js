
document.addEventListener("DOMContentLoaded", function () {

  const slider = document.getElementById("newsSlider");
  const prevBtn = document.getElementById("newsPrevBtn");
  const nextBtn = document.getElementById("newsNextBtn");

  if (!slider || !prevBtn || !nextBtn) return;
  const card = slider.querySelector(".news-card");
  const cardWidth = card.offsetWidth + 24; 
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  });

});
