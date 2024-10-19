// src/components/Home.jsx
import React from 'react';
import './Home.css';
import ParallaxText from './ParallaxText';
import { motion } from 'framer-motion';
import Contact from './Contact';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 }, // Delayed animation for the button
  },
};

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Welcome to PMALL
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Enhance Your Resume By Modern Projects
          </motion.p>
          <motion.a
            href="/projects"
            className="cta-button"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // Adding hover interaction for the button
            whileTap={{ scale: 0.95 }}   // Slight scale on tap/click
          >
            View Projects
          </motion.a>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <ParallaxText baseVelocity={-5}>Best digital experience</ParallaxText>
        <ParallaxText baseVelocity={5}>Great support and features</ParallaxText>
        <ParallaxText baseVelocity={-5}>Highly recommend PMALL!</ParallaxText>
      </section>

      <Contact/>
    </>
  );
};

export default Home;