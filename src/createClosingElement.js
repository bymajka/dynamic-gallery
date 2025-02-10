import { closingImage } from "./constants";

export const createClosingElement = (parent) => {
  const closeButton = document.createElement("button");
  const imgForButton = document.createElement("img");
  imgForButton.src = closingImage;

  closeButton.classList.add("image-container__close-button");
  closeButton.append(imgForButton);
  closeButton.addEventListener("click", () => {
    closeButton.parentElement.remove();
  });

  parent.append(closeButton);
};
