function formatPrice(amount, currency) {
  const price = (amount / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat(['en-us'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(price);
}

function calculateTotalPrice(unit_amount, quantity, currency) {
  const totalCost = unit_amount * quantity;
  const formattedTotalCost = formatPrice(totalCost, currency);
  return formattedTotalCost;
}

export { formatPrice, calculateTotalPrice };
