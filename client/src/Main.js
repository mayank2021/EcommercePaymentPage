import React from "react";
import "./Main.css";
import Navbar from "./components/Navbar/Navbar";
import NavigationPane from "./components/NavigationPane/NavigationPane";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShippingContainer from "./components/ShippingContainer/ShippingContainer";
import PaymentContainer from "./components/PaymentContainer/PaymentContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import BottomPane from "./components/BottomPane/BottomPane";

const Main = () => {
  return (
    <div className="main--container">
      <Navbar />
      <NavigationPane
        text="shipping and payment"
        buttonType1="navpane1"
        buttonType2="navpane2"
        buttonText1={<ShoppingCartOutlinedIcon />}
        buttonText2={<LocalShippingOutlinedIcon />}
      />
      <div style={{ display: "flex" }}>
        <ShippingContainer />
        <PaymentContainer />
        <CartContainer />
      </div>
      <BottomPane />
    </div>
  );
};

export default Main;
