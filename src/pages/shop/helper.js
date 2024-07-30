export const updateCartItemAmount = (
  cart,
  product,
  action,
  amount
) => {
  const existingProduct = cart?.find((item) => item.id === product.id);
  const existingProductIndex = cart?.findIndex(
    (item) => item.id === product.id
  );

  const cartCopy = Array.from(cart);

  switch (action) {
    case "INCREAMENT":
      if (existingProduct) {
        amount
          ? (cartCopy[existingProductIndex].amount = amount)
          : (cartCopy[existingProductIndex].amount += 1);
      }
      break;
    case "DECREMENT":
      if (existingProduct) {
        amount
          ? (cartCopy[existingProductIndex].amount = amount)
          : (cartCopy[existingProductIndex].amount -= 1);
      }
      break;
    default:
      return cart;
  }
  localStorage.setItem("cart", JSON.stringify(cartCopy));
  return cartCopy;
};