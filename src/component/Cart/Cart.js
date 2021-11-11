import React from "react";

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summery</h3>
      <h3>Items Ordered:{totalQuantity}</h3>
      <br />
      <h3>Total:{total.toFixed(2)}</h3>
      <p>Shipping:{shipping.toFixed(2)}</p>
      <p>Tax:{tax.toFixed(2)}</p>
      <p>Grand Total:{grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
