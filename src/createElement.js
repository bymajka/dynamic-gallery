export const createElement = (tag, className, attributes = {}) => {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};
