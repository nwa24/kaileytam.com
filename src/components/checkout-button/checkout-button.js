import React, { useState, useEffect } from 'react';
import { useCartContext } from 'context/cart-provider';
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';

const CheckoutButton = () => {
  const { cart } = useCartContext();
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const paymentRequest = stripe.paymentRequest({
        country: 'CA',
        currency: 'cad',
        total: {
          // This will come from line items
          amount: 2000,
          label: 'Total',
        },
        displayItems: [
          {
            amount: 2000,
            label: 'A soft cotten shirt',
          },
        ],
        requestPayerName: true,
        requestPayerEmail: true,
        requestPayerPhone: true,
        requestShipping: true,
        shippingOptions: [
          {
            id: 'basic',
            label: 'Ground shipping',
            detail: 'Ground shipping via UPS or FedEx',
            amount: 995,
          },
        ],
      });

      // Check the availability of the Payment Request API
      paymentRequest.canMakePayment().then((result) => {
        console.log(result);
        if (result) {
          setPaymentRequest(paymentRequest);
        }
      });
    }
  }, [stripe]);

  const redirectToCheckout = () => {
    const lineItems = cart.map(([product, quantity]) => ({
      price: product.price.id,
      quantity,
    }));
  };

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  } else {
    return <button onClick={redirectToCheckout}>Checkout</button>;
  }
};

export default CheckoutButton;
