export const createLightBox = (fillPageImages) => {
  const lightBox = document.createElement("div");
  lightBox.classList.add("lightbox");
  const imgInside = document.createElement("img");
  imgInside.src = fillPageImages[0].path;
  imgInside.classList.add("lightbox__image");

  const leftArrowContainer = document.createElement("div");
  leftArrowContainer.classList.add("arrow-left");
  leftArrowContainer.classList.add("arrow");

  const rightArrowContainer = document.createElement("div");
  rightArrowContainer.classList.add("arrow-right");
  rightArrowContainer.classList.add("arrow");

  lightBox.append(leftArrowContainer);
  lightBox.append(imgInside);
  lightBox.append(rightArrowContainer);

  return { lightBox, leftArrowContainer, rightArrowContainer };
};
