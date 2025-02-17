export const createInputElement = (
  required,
  type,
  placeholder,
  parrentElement,
  parentClass
) => {
  const input = document.createElement("input");
  input.classList.add(parentClass.concat("__input"));
  input.required = required;
  if (type) {
    input.type = type;
  }
  if (placeholder) {
    input.placeholder = placeholder;
  }
  parrentElement.append(input);
  return input;
};
