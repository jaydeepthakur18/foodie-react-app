import React, { useState } from "react";

const Foodcard = ({ name, price, src, addToCart }) => {

  const [itemTotal, setItemTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handleAdd = () => {
    addToCart(price, name);
    setItemTotal(itemTotal + price);
    setItemCount(itemCount + 1);
  };

  return (
    <div className="w-full sm:w-60 p-4 rounded-xl bg-white shadow-xl hover:shadow-2xl transition transform hover:scale-105">

      <img
        src={src}
        className="w-full h-36 sm:h-40 object-cover rounded-lg"
        alt={name}
      />

      <h2 className="text-lg sm:text-xl font-bold mt-3 text-gray-800">
        {name}
      </h2>

      <p className="text-red-500 font-semibold text-lg">
        ₹{price}
      </p>

      <button
        onClick={handleAdd}
        className="bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600 w-full transition"
      >
        Add to Cart
      </button>

      {itemCount > 0 && (
        <div className="mt-3 bg-gray-100 p-2 rounded-lg text-center">

          <h2 className="font-semibold text-gray-700">
            Item Added: {itemCount}
          </h2>

          <h2 className="font-bold text-red-500">
            Total Price: ₹{itemTotal}
          </h2>

        </div>
      )}

    </div>
  );
};

export default Foodcard;