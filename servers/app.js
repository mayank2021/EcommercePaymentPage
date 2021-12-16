const express = require("express");
const app = express();
const shortid = require("shortid");
const Razorpay = require("razorpay");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
let refreshTokens = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//initialize razorpay
const razorpay = new Razorpay({
  key_id: "rzp_test_Ojxak9fxNivbOd",
  key_secret: "dDXcp2M3mh4J6VBS21d52eMR",
});

//razorpay
app.post("/verification", (req, res) => {
  // do a validation
  const secret = "12345678";

  console.log(req.body);

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
  } else {
    // pass it
  }
  res.json({ status: "ok" });
});

app.post("/razorpay", cors(), async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

// Creates a new accessToken using the given refreshToken;
app.post("/refresh", (req, res, next) => {
  const refreshToken = req.body.token;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.json({ message: "Refresh token not found, login again" });
  }

  // If the refresh token is valid, create a new accessToken and return it.
  jwt.verify(refreshToken, "refresh", (err, user) => {
    if (!err) {
      const accessToken = jwt.sign({ username: user.name }, "access", {
        expiresIn: "20s",
      });
      return res.json({ success: true, accessToken });
    } else {
      return res.json({
        success: false,
        message: "Invalid refresh token",
      });
    }
  });
});

// Middleware to authenticate user by verifying his/her jwt-token.
async function auth(req, res, next) {
  let token = req.headers["authorization"];
  token = token.split(" ")[1]; //Access token

  jwt.verify(token, "access", async (err, user) => {
    if (user) {
      req.user = user;
      next();
    } else if (err.message === "jwt expired") {
      return res.json({
        success: false,
        message: "Access token expired",
      });
    } else {
      console.log(err);
      return res.status(403).json({ err, message: "User not authenticated" });
    }
  });
}

// Protected route, can only be accessed when user is logged-in
app.post("/protected", auth, (req, res) => {
  return res.json({ message: "Protected content!" });
});

// Route to login user. (In this case, create an token);
app.post("/login", (req, res) => {
  const user = req.body.user;

  if (!user) {
    return res.status(404).json({ message: "Body empty" });
  }

  let accessToken = jwt.sign(user, "access", { expiresIn: "50s" });
  let refreshToken = jwt.sign(user, "refresh", { expiresIn: "7d" });
  refreshTokens.push(refreshToken);

  return res.status(201).json({
    accessToken,
    refreshToken,
  });
});

app.listen(5000, () => console.log("Running at 5000"));
