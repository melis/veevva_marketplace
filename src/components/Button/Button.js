import React from "react";
import sty from "./Button.module.css";
function Button(props) {
  const { style, children, red, black } = props;
  return (
    <button
      style={style}
      className={`${sty.button} ${red && sty.red_buuton} ${
        black && sty.black_button
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
