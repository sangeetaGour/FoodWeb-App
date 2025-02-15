import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Have questions? Feel free to reach out!
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Our Address</h2>
          <p className="text-gray-600">123 Food Street, New York, USA</p>
          <p className="text-gray-600">📞 +1 234 567 890</p>
          <p className="text-gray-600">✉️ contact@fooddelight.com</p>
        </div>

        {/* Google Map Embed */}
        <div className="mt-6">
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609887048!2d-74.25987368708412!3d40.69714942245545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6ac7f8f9f7b%3A0xf2c2a0f1cf0b1a78!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1618310361467!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
