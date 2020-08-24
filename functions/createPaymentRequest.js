const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.handler = async (event, context, callback) => {
  const paymentRequest = await stripe.paymentRequest({
    country: 'CA',
    currency: 'cad',
    total: {
      // This will be passed in
      amount: 2000,
      label: 'Total',
    },
    displayItems: [
      // This will be passed in
      {
        amount: 2000,
        label: 'a Soft cotten shirt',
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

  const response = {
    statusCode: 200,
    body: JSON.stringify(paymentRequest),
  };

  callback(null, response);
};
