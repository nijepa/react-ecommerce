import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ncXZb7vtbSdPUBevOxrOh13L00xHmxwDGG';

    const onToken = token => {
        console.log(token);
        alert('Payment success');
    };

    return (
        <StripeCheckout
            label = 'Pay Now'
            bame = 'My Shop'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description={`Your total is EUR${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;