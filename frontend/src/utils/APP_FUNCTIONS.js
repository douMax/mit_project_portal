const hoverOver = (e) => {
  e.target.style.opacity = "0.3";
  e.target.style.cursor = "pointer";
  //console.log("I am working!!!");
};

const hoverOut = (e) => {
  e.target.style.opacity = "1";
  //console.log("I am working!!!");
};

export { hoverOver, hoverOut };
