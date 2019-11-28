import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const onToken = token => {
    console.log('TOKEN', token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={price * 100}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={process.env.REACT_APP_PAYMENT_PUBLISHABLE_KEY}
    />
  );
};

export default StripeCheckoutButton;
