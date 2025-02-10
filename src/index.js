import { createInputElement } from "./createInputElement";
import { addImageToPage } from "./addImageToPage";
import { fillPageImages } from "./constants";
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

fillPageImages.forEach((element) => {
  addImageToPage(element.path, element.description, imagesContainer);
});
