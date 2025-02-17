import { addLightboxListener } from "./addLightboxListener";
import { createClosingElement } from "./createClosingElement";
import { fillPageImages, highlightedImg, lightBox } from "./constants";

export const addImageToPage = (imgPath, description, parent) => {
  const container = document.createElement("div");
  container.classList.add("image-container");
  const newImage = document.createElement("img");
  const desc = document.createElement("p");

  newImage.src = `${imgPath}`;
  newImage.alt = "User added image";
  newImage.classList.add("image-container__image");

  desc.textContent = description;
  desc.classList.add("image-container__description");

  container.appendChild(newImage);
  container.appendChild(desc);
  createClosingElement(container);
  parent.append(container);

  fillPageImages.push({ path: imgPath, description: description });

  addLightboxListener(newImage, highlightedImg, lightBox);
};
