import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Welcome to <span className="font-semibold text-red-500">Food Delight</span>, where we bring you the best culinary experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
            <p className="text-gray-600">
              We started with a passion for bringing delicious, high-quality food to our customers. Our journey has been all about flavor, quality, and customer satisfaction.
            </p>
          </div>

          {/* Right Side - Image */}
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-600">
            Delivering mouth-watering dishes made from fresh, locally sourced ingredients.
          </p>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
          <p className="text-gray-600">
            To become the most loved food destination, spreading joy through amazing flavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
