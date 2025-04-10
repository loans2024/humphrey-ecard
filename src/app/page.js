'use client';

import Image from 'next/image'
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaSuitcase } from 'react-icons/fa';
import QRCode from 'react-qr-code'
import { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setFormSubmitted(false); // Reset on every open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/moveykog', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setFormSubmitted(true);
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-stone-500 to-neutral-300 p-4">
      <div className="bg-gradient-to-r from-orange-300 via-stone-500 to-neutral-300 rounded-2xl shadow-xl p-6 max-w-sm w-full flex flex-col items-center space-y-4 text-center">

        {/* Profile Photo */}
        <div className="w-[170px] h-[140px] bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/p.jpeg"
            alt="Humphrey"
            width={178}
            height={178}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h1 className="font-playfair text-1xl font-bold text-black">Humphrey Nyariki</h1>
        <p className="font-playfair text-2xl text-white">Software Engineer</p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl text-stone-900">
          <a href="https://www.linkedin.com/in/humphrey-nyabuto-02b65827b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://main--rey01.netlify.app/" target="_blank" rel="noopener noreferrer">
            <FaSuitcase className="hover:text-gray-600 transition" />
          </a>
          <a href="mailto:humphreynyabuto2@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-gray-600 transition" />
          </a>
        </div>

        {/* Quote */}
        <div className="flex items-center justify-center gap-2 text-lg text-stone-700 mt-4">
          <span className="text-black font-playfair font-bold">Well-architected & cost-effective solution</span>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center gap-2 text-lg text-stone-700 mt-4">
          <FaPhoneAlt className="text-gray-800600" />
          <span className="text-white font-playfair font-bold">+254712832145</span>
        </div>

        {/* Schedule Consultation Button */}
        <button
          onClick={openModal}
          className="bg-black font-playfair text-white px-3 py-2 rounded-md hover:bg-gray-800 transition mt-4"
        >
          📅  Click & Schedule Consultation
        </button>


        {/* QR Code */}
        <div className="bg-white p-2 rounded-md shadow-sm my-6 mx-auto">
          <QRCode value="https://humphreyecard.netlify.app/" size={100} />
        </div>

        {/* Tagline or Statement */}
        <p className="font-playfair text-black font-bold">Scan to contact anytime, anywhere</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-r from-orange-300 via-yellow-200 to-neutral-700 p-6 rounded-lg max-w-sm w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-900">
              X
            </button>
            <h2 className="text-2xl text-black font-semibold mb-4">Schedule a Consultation</h2>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                {/* Date Picker */}
                <div className="mb-4">
                  <label htmlFor="date" className="block text-black text-sm font-medium">Preferred Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    name="preferred_date"
                    className="text-black mt-2 w-full px-4 py-2 border border-black rounded-md"
                  />
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm text-black font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="text-black mt-2 w-full px-4 py-2 border border-black rounded-md"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-black text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full px-4 py-2 border border-black rounded-md"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-black text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-2 w-full px-4 py-2 border border-black rounded-md"
                  />
                </div>

                {/* Comment */}
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-black text-sm font-medium">Comments</label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="4"
                    className="mt-2 w-full px-4 py-2 border border-black rounded-md"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="text-center text-black text-lg font-semibold">
                ✅ Thank you! Your consultation has been submitted.
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

