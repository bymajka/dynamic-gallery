import { closingImage, fillPageImages } from "./constants";

export const createClosingElement = (parent) => {
  const closeButton = document.createElement("button");
  const imgForButton = document.createElement("img");
  imgForButton.src = closingImage;

  closeButton.classList.add("image-container__close-button");
  closeButton.append(imgForButton);
  closeButton.addEventListener("click", () => {
    const deletedImage = fillPageImages.find(
      (item) => item.path == parent.querySelector(".image-container__image").src
    );
    fillPageImages.splice(fillPageImages.indexOf(deletedImage), 1);
    closeButton.parentElement.remove();
  });

  parent.append(closeButton);
};
