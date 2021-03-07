import React from 'react';
import StripeButton from 'react-stripe-checkout';

const publishableKey = 'pk_test_51ISGgIDJsqteYSbNGlTX90vRGesFr40WLio72Q6C4OCQOh0ZfwJJmmCgXk4OMqzKBNIwFQCylf5QerjqUYJwSYbm00gJKOfJ5w'

const onToken = (token) => {
    console.log(token)
    alert("Payment was successful")
}

export default function StripeButtonComponent({price}) {
    return(
        <StripeButton 
            label="Order now"
            name="Food delivery"
            description={`Price: ${price}`}
            shippingAddress=""
            billingAddress=""
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
