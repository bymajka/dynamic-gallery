import closingImage from "./images/close-svgrepo-com.svg";
import { createLightBox } from "./createLightBox";
const defaultImages = [
  {
    path: "https://i.pinimg.com/736x/20/55/e7/2055e7fe8512e83870c5c9c2e1748413.jpg",
    description: "FullMetal Alchemist",
  },
  {
    path: "https://i.pinimg.com/736x/3e/76/73/3e7673e9e6ed040e36f9ad66ebd821ad.jpg",
    description: "The Witcher",
  },
  {
    path: "https://i.pinimg.com/736x/4d/aa/ff/4daaff6415e835a9ebd9dabd36c815b7.jpg",
    description: "Nami. One Piece",
  },
  {
    path: "https://i.pinimg.com/736x/fa/b6/74/fab674298ffabe45baceea601348931d.jpg",
    description: "Moon",
  },
  {
    path: "https://i.pinimg.com/736x/d0/25/0f/d0250fcc6d600a0320cc5cfe7b7bc759.jpg",
    description: "Sanji. One Piece",
  },
  {
    path: "https://i.pinimg.com/736x/6a/79/07/6a7907f016cf9941322c76d6c03e9cf5.jpg",
    description: "Uno carpet",
  },
  {
    path: "https://i.pinimg.com/736x/3e/02/26/3e0226472b7a070389ee2a643bd008a3.jpg",
    description: "Dune",
  },
  {
    path: "https://i.pinimg.com/736x/8d/90/53/8d9053f6977eb9bda9dce3f41b0aeb99.jpg",
    description: "Vinland saga",
  },
  {
    path: "https://i.pinimg.com/736x/12/9f/b9/129fb9b0a42e08fa3eafba619cd0fdae.jpg",
    description: "Rocket",
  },
  {
    path: "https://i.pinimg.com/736x/41/de/3d/41de3dffa98055c95167228a215d7285.jpg",
    description: "Octopus inside bulb",
  },
  {
    path: "https://i.pinimg.com/736x/5c/1f/b7/5c1fb75c627935dd4ad0be9e2c83c8de.jpg",
    description: "Dark city",
  },
  {
    path: "https://i.pinimg.com/736x/fe/f2/d6/fef2d6ddd4d610a9d21bc54f37baeae7.jpg",
    description: "Woman with skeletons",
  },
  {
    path: "https://i.pinimg.com/736x/4d/be/4e/4dbe4e838f800d9869f658f14120905c.jpg",
    description: "Dragon",
  },
  {
    path: "https://i.pinimg.com/736x/07/73/f8/0773f8c887b186f3b4ea1de1324637f9.jpg",
    description: "Myconid",
  },
  {
    path: "https://i.pinimg.com/736x/c1/49/85/c149853732332b3bb23d6b170bfb75e1.jpg",
    description: "Sorcerer",
  },
  {
    path: "https://i.pinimg.com/736x/95/c8/35/95c83548aed75002fb306311862e4dea.jpg",
    description: "Psyduck",
  },
  {
    path: "https://i.pinimg.com/736x/67/13/88/671388e094cd29af629e1072da31f328.jpg",
    description: "ChocoTiger",
  },
];
const images = [];
const lightBox = createLightBox(defaultImages);
document.body.appendChild(lightBox.lightBox);
const highlightedImg = lightBox.lightBox.children[1];
const state = {
  imgIndex: 0,
};

export {
  closingImage,
  images as fillPageImages,
  lightBox,
  highlightedImg,
  state,
  defaultImages,
};
