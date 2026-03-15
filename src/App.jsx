import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Foodcard from "./Component/Foodcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import foodData from "./Data/foodData";

const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (price, name) => {
    setCartItems([...cartItems, { name, price }]);
  };

  const filteredFood = foodData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>

      <Navbar cartCount={cartItems.length} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={
            <div className="p-6">

              <input
                type="text"
                placeholder="Search food..."
                className="border p-2 mb-6 w-full rounded"
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                {filteredFood.map((item, index) => (
                  <Foodcard
                    key={index}
                    name={item.name}
                    price={item.price}
                    src={item.src}
                    addToCart={addToCart}
                  />
                ))}

              </div>

            </div>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart cartItems={cartItems} />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;