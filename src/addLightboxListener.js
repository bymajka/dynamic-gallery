import { state, fillPageImages } from "./constants";

export const addLightboxListener = (image, highlightedImg, lightBox) => {
  image.addEventListener("click", (e) => {
    highlightedImg.src = e.target.src;
    const images = document.querySelectorAll(".image-container__image");

    state.imgIndex = Object.values(images).indexOf(e.target);

    lightBox.lightBox.style.display = "flex";

    setTimeout(() => {
      lightBox.lightBox.style.opacity = "1";
    }, 10);
  });
};
