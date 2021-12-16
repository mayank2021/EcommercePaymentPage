import React from "react";
import "./Input.css";

const Input = ({ placeholder,type }) => {
  return (
    <div>
      {
          type !== "secondary"?(
            <input className="input" placeholder={placeholder} />
          ):(
            <select
            className="input"
            id="country"
            name="country"
            placeholder="country"
          >
            <option value="Poland">Poland</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="Canada">Canada</option>
          </select>
          )
      }
  
    </div>
  );
};

export default Input;
