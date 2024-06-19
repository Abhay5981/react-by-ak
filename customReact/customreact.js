function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  tpye: "a",
  props: {
    href: "https://google.com",
    target: "_black",
  },
  children: "click me to visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
