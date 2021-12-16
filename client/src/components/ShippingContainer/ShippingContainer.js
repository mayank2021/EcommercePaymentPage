import React, { useState } from "react";
import "./ShippingContainer.css";
import Button from "../Buttons/Buttons";
import Text from "../Text/Text";
import Input from "../Input/Input";
import Form from '../Form/Form';

const ShippingContainer = () => {

 const [dialog,setDialog] = useState(false);
  return (
    <div className="shipping-main--container">
      <div className="shipping-button-container">
        <Button type="primary" text="log in" onclick={() => setDialog(true)}/>
        <Button type="secondary" text="sign up" />
      </div>
      <Text type="small" text="shipping information" />
      <div className="shipping-input-container">
        <Input placeholder="email" />
        <Input placeholder="address" />
        <Input placeholder="first name" />
        <Input placeholder="last name" />
        <Input placeholder="email" />
        <Input placeholder="postal code / ZIP" />
        <Input placeholder="phone number" />
        <Input type="secondary" placeholder="country" />
      </div>
      {
        dialog?<Form cancel={setDialog}/>:null
      }
    </div>
  );
};

export default ShippingContainer;
