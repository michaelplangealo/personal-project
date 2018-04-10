import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = "pk_test_Gi7qQRiYreNF0qBeXbP6B07q";
const PAYMENT_SERVER_URL = "/api/payment";
const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      source: token,
      amount: fromDollarToCent(1)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, amount }) =>
  <StripeCheckout
    name={name}
    amount={fromDollarToCent(amount)}
    token={onToken}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;