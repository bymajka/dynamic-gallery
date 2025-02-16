import { createInputElement } from "./createInputElement";
import { addImageToPage } from "./addImageToPage";
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
import { createElement } from "./createElement";

const inputForm = createElement("form", "input-form");

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

const button = createElement("button", null, { type: "submit" });
button.innerHTML = "Submit";
inputForm.append(button);

const imagesContainer = createElement("div", "images-container");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addImageToPage(inputURL.value, inputDescription.value, imagesContainer);
  localStorage.setItem(inputDescription.value, inputURL.value);
});

document.body.append(inputForm, imagesContainer);

defaultImages.forEach((element) => {
  addImageToPage(element.path, element.description, imagesContainer);
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("lightbox")) {
    lightBox.lightBox.style.opacity = "0";
    setTimeout(() => {
      lightBox.lightBox.style.display = "none";
    });
  }
});

window.addEventListener("load", () => {
  Object.entries(localStorage).forEach(([key, value]) => {
    addImageToPage(value, key, imagesContainer);
  });
});

addLeftArrowListener();
addRightArrowListener();

console.log(fillPageImages);
