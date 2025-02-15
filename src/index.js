import { createInputElement } from "./createInputElement";
import { addImageToPage } from "./addImageToPage";
import { addLightboxListener } from "./addLightboxListener";
import {
  fillPageImages,
  lightBox,
  highlightedImg,
  defaultImages,
} from "./constants";
import {
  addLeftArrowListener,
  addRightArrowListener,
} from "./addArrowsListeners";
import "./styles/main.css";

const inputForm = document.createElement("form");
inputForm.classList.add("input-form");
const button = document.createElement("button");
const imagesContainer = document.createElement("div");
imagesContainer.classList.add("images-container");

button.setAttribute("type", "submit");
button.innerHTML = "Submit";

const inputURL = createInputElement(
  true,
  "text",
  "Enter your URL",
  inputForm,
  inputForm.className
);
const inputDescription = createInputElement(
  true,
  undefined,
  "Enter description of your picture",
  inputForm,
  inputForm.className
);

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addImageToPage(inputURL.value, inputDescription.value, imagesContainer);
});

inputForm.append(button);
document.body.append(inputForm);
document.body.appendChild(imagesContainer);

const images = document.querySelectorAll(".image-container");
defaultImages.forEach((element) => {
  addImageToPage(element.path, element.description, imagesContainer);
});

images.forEach((image) => {
  addLightboxListener(image, highlightedImg, lightBox);
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("lightbox")) {
    lightBox.lightBox.style.opacity = "0";
    setTimeout(() => {
      lightBox.lightBox.style.display = "none";
    });
  }
});

addLeftArrowListener();
addRightArrowListener();

console.log(fillPageImages);
