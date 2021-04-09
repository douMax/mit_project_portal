import React from "react";

const hoverOver = (e) => {
  e.target.style.opacity = "0.3";
  //console.log("I am working!!!");
};

const hoverOut = (e) => {
  e.target.style.opacity = "1";
  //console.log("I am working!!!");
};

export { hoverOver, hoverOut };
