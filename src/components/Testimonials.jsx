import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Akanksha Patil', feedback: 'Great project! Helped me a lot.' },
    { name: 'Sahil Mulik', feedback: 'Amazing designs, worth every penny.' },
    { name: 'Sandesh Patil', feedback: 'Incredible attention to detail. Loved it!' },
    { name: 'Mahesh Patil', feedback: 'Beautiful design, perfect for my needs.' },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
