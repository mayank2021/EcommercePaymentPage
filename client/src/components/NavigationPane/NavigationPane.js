import React from 'react';
import './NavigationPane.css';
import Text from '../Text/Text';
import Button from '../Buttons/Buttons';

const NavigationPane = ({text, buttonType1, buttonType2,buttonText1, buttonText2}) => {
    return (
        <div className='navpane-container'>
            <Text type="medium" text={text}/>
            <div className='navpane-button--container'>
            <Button type={buttonType1} text={buttonText1}/>
            <Button type={buttonType2} text={buttonText2}/>
            </div>

        </div>
    )
}

export default NavigationPane;
