
# Ecommerce payment page

This is an ecommerce payment page associated with a payment gateway(Razorpay). JSON Web Tokens(JWS) is used to authenticate users. 



## Documentation

**JWT auth**

You cannot go to protected routes without login. Click on login, a dialog box pops out, without filling your email and password, you are not able to see protected content(which is visible when you click on access protected content if you are logged in) but when you logged in and then click the button(access protected content), you will find, now you are able to see the protected content.

**Razorpay**

You can click on the button(proceed to payment) to check the functionality of Razorpay. when you click the button a window pops out with a bunch of payment option.


## Run Locally

Clone the project

```bash
  git clone https://github.com/mayank2021/EcommercePaymentPage
```


**For Frontend:**

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

 **For Backend:**

Go to the project directory

```bash
  cd servers
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js or nodemon app.js
```


## Features

- Clean UI
- Payment Gateway
- JWT Authentication


## Tech Stack

**Client:** React, Razorpay

**Server:** Node, Express, JWS

