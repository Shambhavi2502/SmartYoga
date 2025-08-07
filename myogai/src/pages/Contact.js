import React from 'react';
import img1 from '../images/map.png';
import img2 from '../images/blob-center.png';

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-center min-h-screen bg-gray-800 p-5 bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 p-8 lg:p-10 bg-purple-500 text-white flex flex-col justify-center relative" style={{ backgroundImage: `url(${img2})` }}>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">Let's Chat</h2>
          <div className="flex justify-center mb-6">
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112333.62510212135!2d79.3395371448481!3d28.37620506713016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007334d02998d%3A0x5b9d44cf31ee87f!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1733768821371!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
                className="rounded-lg"
                style={{ maxWidth: '400px' }}
                title="Map showing Bareilly, Uttar Pradesh" // Added title attribute
              ></iframe>
            </figure>
          </div>
          <p className="text-lg text-center mt-4 px-4">Whether you have a question, want to start a project, or simply want to connect, feel free to send me a message in the contact form.</p>
        </div>
        <div className="flex-1 p-8 lg:p-10">
          <form action="https://formspree.io/f/manwykae" method="post">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
            <input type="text" id="name" name="name" required className="block w-full p-3 border border-gray-300 rounded mb-4" />

            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
            <input type="email" id="email" name="email" required className="block w-full p-3 border border-gray-300 rounded mb-4" />

            <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
            <input type="text" id="company" name="company" className="block w-full p-3 border border-gray-300 rounded mb-4" />

            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" required className="block w-full p-3 border border-gray-300 rounded mb-4"></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg transition duration-300 focus:ring-opacity-50
    hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;