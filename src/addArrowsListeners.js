import { lightBox, state, highlightedImg, fillPageImages } from "./constants";

const addLeftArrowListener = () => {
  lightBox.leftArrowContainer.addEventListener("click", () => {
    state.imgIndex--;

    if (state.imgIndex < 0) {
      state.imgIndex = fillPageImages.length - 1;
    }
    highlightedImg.src = fillPageImages[state.imgIndex].path;
  });
};

const addRightArrowListener = () => {
  lightBox.rightArrowContainer.addEventListener("click", () => {
    state.imgIndex++;

    if (state.imgIndex > fillPageImages.length - 1) {
      state.imgIndex = 0;
    }

    highlightedImg.src = fillPageImages[state.imgIndex].path;
  });
};

export { addLeftArrowListener, addRightArrowListener };
