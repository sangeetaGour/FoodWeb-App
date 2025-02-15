import React from "react";

const servicesData = [
  {
    title: "Fast Food Delivery",
    description: "Get your favorite fast food delivered to your doorstep in minutes.",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gourmet Dishes",
    description: "Enjoy premium gourmet meals prepared by top chefs.",
    image: "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z291cm1ldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Healthy Meals",
    description: "Nutritious and delicious meals for a healthier lifestyle.",
    image: "https://plus.unsplash.com/premium_photo-1663858367108-9150fe5ce9bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Catering Services",
    description: "We provide catering services for events, parties, and special occasions.",
    image: "https://images.unsplash.com/photo-1484156818044-c040038b0719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Custom Orders",
    description: "Customize your order with special requests and dietary preferences.",
    image: "https://images.unsplash.com/photo-1606380588846-8af6f746f441?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dine-in Experience",
    description: "Experience the best dine-in service with a cozy ambiance.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-16 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg mb-10">We offer a variety of food services to satisfy your cravings.</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
