import React from "react";
import "./PaymentContainer.css";
import Text from "../Text/Text";
import Button from "../Buttons/Buttons";
import Paypal from "../../Assests/paypal.png";
import Visa from '../../Assests/VISA-logo.png';
import MasterCard from '../../Assests/mastercard1.svg';
import Maestro from '../../Assests/Maestro-logo-vector-01.png';
import Discover from '../../Assests/discover.png';
import Ideal from '../../Assests/iDeal-logo.png';
import Inpost from '../../Assests/inpost.png';
import Dpd from '../../Assests/dpd.png';
import Dhl from '../../Assests/dhl-logo.png';
import Fedex from '../../Assests/Fedex-logo.png';

const PaymentContainer = () => {
  return (
    <div className="payment-main--container">
      <div className="payment_method-container">
        <Text type="small" text="payment method" />
        <div className="payment_method-button--container">
          <Button type="secondary" img={true} text={Paypal}  />
          <Button type="secondary" img={true} text={Visa} />
          <Button type="secondary" img={true} text={MasterCard} />
          <Button type="secondary" img={true} text={Maestro} />
          <Button type="secondary" img={true} text={Discover} />
          <Button type="secondary" img={true} text={Ideal} />
        </div>
      </div>
      <div className="delivery_method-container">
        <Text type="small" text="delivery method" />
        <div className="delivery_method-button--container">
          <Button type="secondary" img={true} text={Inpost} imgText={'$20.00'} />
          <Button type="secondary" img={true} text={Dpd} imgText={'$12.00'}/>
          <Button type="secondary" img={true} text={Dhl} imgText={'$15.00'} />
          <Button type="secondary" img={true} text={Fedex} imgText={'$10.00'} />
        </div>
      </div>
    </div>
  );
};

export default PaymentContainer;
