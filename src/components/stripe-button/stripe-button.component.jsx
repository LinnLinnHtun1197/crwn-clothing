import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckout = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_lrAwaMUYZmDGuUi44jIw7Kvp00jbAdjcJE';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfully');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing' 
        billingAddress 
        shippingAddress
        image='https://svgshare.com/i/CUz.svg' 
        description={`Your total is $${price}`} 
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default stripeCheckout;