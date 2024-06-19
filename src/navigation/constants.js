export const SCREENS = {
  SHOP: '/shop',
  PRODUCT: (id) => `/product/${id ? id : ':id'}`,
  CART: (user_id) => `/cart/${user_id ? user_id : ':user_id'}`,
  CONTACT: '/contact',
}