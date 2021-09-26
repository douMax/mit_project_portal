const hoverOver = (e) => {
  e.target.style.opacity = "0.3";
  e.target.style.cursor = "pointer";
  //("I am working!!!");
};

const hoverOut = (e) => {
  e.target.style.opacity = "1";
  //("I am working!!!");
};

export { hoverOver, hoverOut };
