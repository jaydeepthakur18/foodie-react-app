import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >

      <div className="bg-black/70 text-white p-10 rounded-2xl shadow-2xl max-w-3xl">

        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-red-500">Foodie</span>
        </h1>

        <p className="text-lg mb-6 leading-7">
          Enjoy the best delicious food from our menu.  
          We provide fresh, tasty and high-quality meals prepared with love.
          From Burgers to Pizza, Pasta, Noodles and many more —
          everything is just one click away.
        </p>

        <p className="text-gray-300 mb-8">
          Fast delivery • Best quality • Affordable price
        </p>

        <div className="flex justify-center gap-4">

          <Link to="/menu">
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg transition transform hover:scale-105">
              Explore Menu
            </button>
          </Link>

          <Link to="/menu">
            <button className="border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition">
              Order Now
            </button>
          </Link>

        </div>

      </div>


      {/* Features Section */}

      <div className="grid md:grid-cols-3 gap-6 mt-16 px-10">

        <div className="bg-white/90 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-red-500 mb-2">
            Fresh Food
          </h2>
          <p className="text-gray-700">
            We always serve freshly prepared meals made from high-quality ingredients.
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-red-500 mb-2">
            Fast Delivery
          </h2>
          <p className="text-gray-700">
            Get your favorite food delivered quickly at your doorstep.
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-red-500 mb-2">
            Best Taste
          </h2>
          <p className="text-gray-700">
            Experience amazing taste with our carefully crafted recipes.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Home;