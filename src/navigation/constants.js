export const SCREENS = {
  SHOP: '/shop',
  PLAN: (id) => `/plan/${id ? id : ':id'}`,
  COURSE: (id) => `/course/${id ? id : ":id"}`,
  CART: "/cart/",
  CONTACT: '/contact',
  HOME: "/"

}