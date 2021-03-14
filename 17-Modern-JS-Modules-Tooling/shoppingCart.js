// Exporting module
console.log(`Exporting module`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice as price, totalQuantity };

export default function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to cart`);
}
