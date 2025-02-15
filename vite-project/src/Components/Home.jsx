import { Link } from "react-router-dom";
import { FaUtensils, FaLeaf, FaTruck, FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Delicious Food, Delivered Fast!</h1>
          <p className="text-lg mb-6">Experience the taste of fresh, high-quality dishes from our kitchen to your doorstep.</p>
          <Link to="/menu" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Order Now
          </Link>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Best-Selling Dishes 🍽️</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Grilled Chicken", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Pasta Delight", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Veggie Pizza", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
          ].map((dish, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden group">
              <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover transition-transform group-hover:scale-105 duration-300" />
              <div className="p-4 bg-white text-center">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us? 🤔</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <FaUtensils />, title: "Quality Ingredients" },
            { icon: <FaLeaf />, title: "Fresh & Organic" },
            { icon: <FaTruck />, title: "Fast Delivery" },
            { icon: <FaStar />, title: "Top Ratings" }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-6 text-center bg-red-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Subscribe for Special Offers! 📩</h2>
        <p className="mb-6">Join our newsletter and never miss out on exclusive discounts.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg w-80 text-black" />
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-500 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="mb-4">© 2025 FoodHub | All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
          <a href="#" className="hover:text-yellow-400">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
