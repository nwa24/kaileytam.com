const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.handler = async (event, context, callback) => {
  console.log(event.body);
  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: JSON.parse(event.body),
    mode: "payment",
    success_url: "http://localhost:8888",
    cancel_url: "http://localhost:8888/checkout",
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    billing_address_collection: "required",
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify(checkoutSession),
  };

  callback(null, response);
};
