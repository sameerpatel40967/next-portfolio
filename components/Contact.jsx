'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xknofna', // 🔹 Replace with your EmailJS Service ID
        'template_hhxdg7g', // 🔹 Replace with your Template ID
        form.current,
        '7y5m-WnwGUh431KMw' // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black to-gray-900 text-gray-200"
      data-aos="fade-up"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-400 mb-10"
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-700"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-cyan-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-cyan-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="mb-4 p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-cyan-400"
        ></textarea>

        <button
          type="submit"
          className="py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all font-semibold text-white"
        >
          Send Message
        </button>

        {sent && (
          <p className="text-green-400 mt-4">
            ✅ Message Sent Successfully!
          </p>
        )}
      </motion.form>
    </section>
  );
}
