import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = token => {
    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/payment`,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={process.env.REACT_APP_PAYMENT_PUBLISHABLE_KEY}
    />
  );
};

export default StripeCheckoutButton;
