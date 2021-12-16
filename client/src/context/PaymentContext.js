import React,{createContext} from 'react';
import axios from 'axios';

export const PaymentContext = createContext();

function loadscript(src){
    return new Promise(resolve => {
     const script = document.createElement('script');
     script.src = src;
     script.onload = () => {
       resolve(true);
     }
     script.onerror = () => {
       resolve(false);
     }
     document.body.appendChild(script);
    })
  }
  const __Dev_ = document.domain.includes("localhost");


const PaymentContextProvider = (props) => {

    async function dispalyRazorpay(){

        const res = await  loadscript("https://checkout.razorpay.com/v1/checkout.js");
    
        if(!res){
          alert("make sure you have a healthy internet connection");
        }
           const data = await axios.post('http://localhost:5000/razorpay').then(res => {
             return (
               res
             )
       });
        console.log(data.data,"hello");
       const options = {
         "key": __Dev_ ? "rzp_test_Ojxak9fxNivbOd": "rzp_test_Ojxak9fxNivbOd", //XuOSCs8FG5mCv5JcGxFPJV8D
         currency: data.data.currency,
         "amount": data.data.amount.toString(),
         "name": "DONATIONS",
         "description": "Test Transaction",
         "image": "https://cdn.logo.com/hotlink-ok/logo-social-sq.png",
         "order_id": data.data.id, 
         "handler": function (response){
             alert(response.razorpay_payment_id);
             alert(response.razorpay_order_id);
             alert(response.razorpay_signature)
         }
     };
     var paymentObject = new window.Razorpay(options);
         paymentObject.open();
    }
const name ="mayank";
    return (
        <div>
            <PaymentContext.Provider value={{dispalyRazorpay,name}}>
            {props.children}
            </PaymentContext.Provider>
            
        </div>
    )
}

export default PaymentContextProvider;
