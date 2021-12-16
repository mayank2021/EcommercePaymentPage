import React, { useContext } from 'react';
import './Form.css';
import { AuthContext } from '../../context/AuthContext';


const Form = ({cancel}) => {

    const {handleChange, handleSubmit, err, protect} = useContext(AuthContext);

    return (
        <div className='login-form--container'>
            <button className='buttons primary cancel' onClick={() => cancel(false)}>X</button>
            <form className='login-form--form' onChange={handleChange} onSubmit={handleSubmit}>
                <input className='input' name="email" type="email" placeholder='Email' required/>
                <input className='input' name="password" type="password" placeholder='Password' required/>
                <input className='buttons primary' type="submit" value="login" />
            </form>
            {err}
            <button style={{color:'white'}} className='buttons secondary' onClick={protect}>Access Protected Content</button>
        </div>
    )
}

export default Form;
