import React from 'react';
import { motion } from 'framer-motion';
import gradPic from './assets/grad_picture.jpg';

export default function About() {
  return (
    <motion.main
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-16 px-4 py-16">
        <img
          src={gradPic}
          alt="Tia Jain graduation"
          className="w-[420px] h-[540px] object-cover rounded-2xl shadow-2xl mb-10 md:mb-0"
          style={{ objectPosition: 'top' }}
        />
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-8 text-indigo-700">About Me</h2>
          <p className="text-xl leading-relaxed text-gray-800 mb-6">
            I'm Tia, a recent Computer Science graduate from UC Berkeley who's always been drawn to the spaces where tech meets people. Currently, I'm working on RecSys efficiency at Meta, where our goal is simple: help people stay connected and build meaningful relationships through our platforms.
          </p>
          <p className="text-xl leading-relaxed text-gray-800 mb-6">
            In the past, I've worked across a mix of industries - from fintech at Susquehanna to CRM at Salesforce to labor marketplaces at Instawork. What's stayed constant is that I love tackling messy, real problems, and I care about clarity, creativity, and building things that actually make an impact.
          </p>
          <p className="text-xl leading-relaxed text-gray-800">
            Outside of work, you'll usually find me hiking, sipping coffee, or hunting down the best vegetarian eats in whatever city I'm in!
          </p>
        </div>
      </div>
    </motion.main>
  );
} 