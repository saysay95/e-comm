import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

// because we're just simulating the payment
const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_u147F819AgY9Ij0SWBQSACdh00gNMz6FDQ';

    return (
        <StripeCheckout
            label='Pay Now'
            name='Strika Clothing'
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;