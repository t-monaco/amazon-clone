const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_NIt8twsmIrm9b2g4rMNEcyL700h05aDq6w");

// API

// - App Config
const app = express();

// - Middelwares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("HELLO WORLD!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("PAYMENT REQ >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
