const displayController = () => {
  // create element function
  const create = (element) => document.createElement(element);

  // add class function
  const addClass = (element, className) => element.classList.add(className);

  // append element function
  const append = (parent, el) => parent.appendChild(el);

  return {
    create,
    append,
    addClass,
  };
};

const header = () => {
  const controller = displayController();
  const header = controller.create("header");
  controller.addClass(header, "header");
  controller.create("div");
  console.log(header);
};

const myFunction = () => {
  // initiating displayController
  const controller = displayController();
  const container = controller.create("div");
  controller.addClass(container, "container");
  header();
};
export default myFunction;
