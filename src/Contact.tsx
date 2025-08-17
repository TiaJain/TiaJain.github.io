import React from 'react';
import { motion } from 'framer-motion';

function getIconSrc(filename: string) {
  return require(`./assets/${filename}`);
}

const socialLinks = [
  {
    name: 'Email',
    icon: 'email.png',
    url: 'mailto:tiasjain@gmail.com',
    color: 'hover:bg-red-100'
  },
  {
    name: 'Instagram',
    icon: 'instagram.png',
    url: 'https://www.instagram.com/tiajainn/?hl=en',
    color: 'hover:bg-pink-100'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin.png',
    url: 'https://linkedin.com/in/tiajain',
    color: 'hover:bg-blue-100'
  },
  {
    name: 'GitHub',
    icon: 'github.png',
    url: 'https://github.com/TiaJain',
    color: 'hover:bg-gray-100'
  }
];

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-16 px-4" id="contact">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-8">Contact</h2>
        
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          please feel free to reach out - would love to chat :)
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-white shadow-lg transition-all duration-200 ${social.color} hover:scale-110`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={getIconSrc(social.icon)}
                alt={`${social.name} icon`}
                className="w-12 h-12 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
