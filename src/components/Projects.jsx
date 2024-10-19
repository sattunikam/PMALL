import './Projects.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import p1 from '../images/p1.jpg'; 
import p2 from '../images/p2.jpg'; 
import p3 from '../images/p3.png'; 
import p4 from '../images/p4.png'; 

const Projects = () => {
  const [projects] = useState([
    { id: 1, title: 'E-commerce App', price: 800, image: p1, demo: 'https://yourdemo.com/ecommerce' },
    { id: 2, title: 'Portfolio Template', price: 500, image: p2, demo: 'https://yourdemo.com/portfolio' },
    { id: 3, title: 'Dashboard Template', price: 300, image: p3, demo: 'https://yourdemo.com/dashboard' },
    { id: 4, title: 'Weather App', price: 500, image: p4, demo: 'https://yourdemo.com/weather' },
    { id: 1, title: 'E-commerce App', price: 800, image: p1, demo: 'https://yourdemo.com/ecommerce' },
    { id: 2, title: 'Portfolio Template', price: 500, image: p2, demo: 'https://yourdemo.com/portfolio' },
    { id: 3, title: 'Dashboard Template', price: 300, image: p3, demo: 'https://yourdemo.com/dashboard' },
    { id: 4, title: 'Weather App', price: 500, image: p4, demo: 'https://yourdemo.com/weather' },
  ]);

  const handleGooglePayPayment = async (project) => {
    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      merchantInfo: {
        merchantId: 'BCR2DN4TSO5PT2T4', // Replace with your Google Pay merchant ID
        merchantName: 'PMALL',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: project.price.toString(),
        currencyCode: 'INR',
        countryCode: 'IN',
      },
    };

    // Initialize Google Pay client
    const client = new window.google.payments.api.PaymentsClient({ environment: 'TEST' });

    try {
      const paymentData = await client.loadPaymentData(paymentRequest);
      
      const res = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId: paymentData.paymentMethodData.tokenizationData.token,
          projectId: project.id,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Payment Successful! You can now download your project.');
        document.getElementById(`download-${project.id}`).style.display = 'block';
      } else {
        toast.error('Payment verification failed.');
      }
    } catch (error) {
      toast.error('Payment failed, please try again.');
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>Available Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image lazyload" />
            <h3>{project.title}</h3>
            <p>Price: ₹{project.price}</p>
            <div className="button-container">
              <button onClick={() => handleGooglePayPayment(project)}>Buy Now</button>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button className="view-demo-btn">View Demo</button>
              </a>
              <a href={`/api/download/${project.id}`} id={`download-${project.id}`} style={{ display: 'none' }}>
                <button className="download-btn">Download Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Projects;
