const showImages = document.querySelector("#show-images");
const showVideos = document.querySelector("#show-videos");
const showAll = document.querySelector("#show-all");
const hideAll = document.querySelector("#hide-all");
const imagesSection = document.querySelector("#images-section");
const videosSection = document.querySelector("#videos-section");

showImages.addEventListener("click", function(e) {
  imagesSection.style.display = "flex";
  videosSection.style.display = "none";
});

showVideos.addEventListener("click", function(e) {
  imagesSection.style.display = "none";
  videosSection.style.display = "flex";
});

showAll.addEventListener("click", function(e) {
  imagesSection.style.display = "flex";
  videosSection.style.display = "flex";
});

hideAll.addEventListener("click", function(e) {
  imagesSection.style.display = "none";
  videosSection.style.display = "none";
});
