import React from 'react';
import './CartContainer.css';
import Text from '../Text/Text';
import CartList from '../CartList/CartList';
import Tshirt from "../../Assests/tshirt1.jpg";
import Tshirt2 from "../../Assests/dar.jpg";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const CartContainer = () => {
    return (
        <div className='cart-main--container'>
            <Text type="small" text="your cart"/>
            <CartList 
            title="T-Shirt"
            description="summer vibes"
            code="#261311"
            price="$89.99"
            img={Tshirt}
            />
            <CartList 
            title="Basic slim"
            description="fit T-Shirt"
            code="#212315"
            price="$69.99"
            img={Tshirt2}
            />
            <div className='cart-total-container'>
                <span className='cart-total-para' > Total cost</span>
                <span className='cart-total-price'>$159,98</span>
            </div>
            <div className='cart-freeShipping--container'>
          <LocalShippingOutlinedIcon/>
          <p className='cart-freeShipping-para' >Your are $30 away from free shipping!</p>
            </div>
        </div>
    )
}

export default CartContainer;
