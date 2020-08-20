function formatPrice(amount, currency) {
  const price = (amount / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat(['en-us'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(price);
}

export { formatPrice };
