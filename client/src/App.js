import React from "react";
import Main from "./Main";
import PaymentContextProvider from "./context/PaymentContext";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <PaymentContextProvider>
          <Main />
        </PaymentContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
