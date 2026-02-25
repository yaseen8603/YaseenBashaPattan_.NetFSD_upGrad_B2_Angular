import { generateInvoice } from "./cart.js";

const cartItems = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];

console.log(generateInvoice(cartItems));