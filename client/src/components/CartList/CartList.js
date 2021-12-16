import React from "react";
import "./CartList.css";
import Text from "../Text/Text";


const CartList = ({title, description,code,price,img}) => {
  return (
    <div className="cartlist-container">
      <img className="cartlist-img--container" src={img} alt="T-shirt" />
      <div className="cartlist-descrip--container">
        <div className="cartlist-descrip_text--container">
          <Text type="small" text={title} />
          <Text type="small" text={description} />
        </div>
        <p className="cartlist-code">{code}</p>
      </div>
      <Text type="small" text={price} />
    </div>
  );
};

export default CartList;
