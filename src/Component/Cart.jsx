import React from "react";

const Cart = ({ cartItems }) => {

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Cart Items
      </h1>

      {cartItems.length === 0 ? (
        <p>No items added</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-3">

            <h2>{item.name}</h2>
             <h1>{item.src}</h1>
            <p>₹{item.price}</p>

          </div>
        ))
      )}

      <h2 className="text-xl font-bold mt-6">
        Total Price : ₹{total}
      </h2>

    </div>
  );
};

export default Cart;