export const formatAsCurrency = (amount, currency = "USD",) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency
}).format(amount)