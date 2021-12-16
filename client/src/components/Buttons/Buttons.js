import React from "react";
import "./Buttons.css";

const Button = ({ type, text, img = false, imgText, onclick }) => {
  return (
    <div>
      {img ? (
        <button
          onClick={onclick}
          style={{ width: `${imgText ? "180px" : "119px"}` }}
          className={`buttons ${type} img-button`}
        >
          <img className="button-img" src={text} alt="logo" />
          {imgText ? <span className="img-text">{imgText}</span> : null}
        </button>
      ) : (
        <button onClick={onclick} className={`buttons ${type}`}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
