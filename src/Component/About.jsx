import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >

      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl max-w-3xl text-center">

        <h1 className="text-4xl font-bold text-red-500 mb-4">
          About Foodie
        </h1>

        <p className="text-gray-700 text-lg leading-7">
          Foodie is a modern food delivery web application built using React.
          Our goal is to make food ordering simple, fast and enjoyable.
        </p>

        <p className="text-gray-700 text-lg leading-7 mt-3">
          Users can explore delicious food items like Burger, Pizza, Pasta,
          Noodles and many more and easily add them to the cart.
        </p>

      </div>


      {/* Features */}

      <div className="grid md:grid-cols-3 gap-5 mt-6 max-w-5xl">

        <div className="bg-white/90 p-5 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-bold text-red-500 mb-1">
            Easy Ordering
          </h2>
          <p className="text-gray-700 text-sm">
            Quickly browse the menu and add items to cart.
          </p>
        </div>

        <div className="bg-white/90 p-5 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-bold text-red-500 mb-1">
            Fresh Ingredients
          </h2>
          <p className="text-gray-700 text-sm">
            We focus on quality and fresh ingredients.
          </p>
        </div>

        <div className="bg-white/90 p-5 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-bold text-red-500 mb-1">
            Fast Service
          </h2>
          <p className="text-gray-700 text-sm">
            Smooth and fast ordering experience.
          </p>
        </div>

      </div>


      {/* Developer */}

      <div className="bg-white/90 mt-6 p-6 rounded-xl shadow-xl text-center">

        <p className="text-gray-500">
          Created by
        </p>

        <h2 className="text-xl font-bold text-red-500 mt-1">
          Jaydeep Thakur
        </h2>

        <p className="text-gray-700 mt-2 text-sm">
          Aspiring Full Stack Developer passionate about building modern web applications.
        </p>

      </div>

    </div>
  );
};

export default About;