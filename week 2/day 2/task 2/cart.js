// cart.js

export const calculateCartTotal = (products) =>
  products
    .map(product => product.price * product.quantity)
    .reduce((total, value) => total + value, 0);

export const generateInvoice = (products) => {
  const total = calculateCartTotal(products);

  return `
  ------- Invoice -------
  ${products
    .map(
      p => `${p.name} - ₹${p.price} x ${p.quantity} = ₹${p.price * p.quantity}`
    )
    .join("\n")}
  
  Total Amount: ₹${total}
  `;
};