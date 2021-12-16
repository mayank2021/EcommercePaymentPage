import React, { useContext } from 'react';
import './BottomPane.css';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import Button from '../Buttons/Buttons';
import { PaymentContext } from '../../context/PaymentContext';

const BottomPane = () => {

    const {dispalyRazorpay} = useContext(PaymentContext);

    return (
        <div className='bottompane-container'>
            <div className='bottompane-back--container'>
              <KeyboardBackspaceOutlinedIcon/>
              <p className='bottompane-back--para'>Back</p>
            </div>
            <div className='bottompane-button--container'>
                <Button type="tertiary" text="continue shopping"/>
                <Button onclick={dispalyRazorpay} type="primary" text="proceed to payment"/>
            </div>

        </div>
    )
}

export default BottomPane;
