import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: "Sophia Loren",
    feedback: "The best cosmetics I've ever used! Truly luxurious.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Gigi Hadid",
    feedback: "FashionTV cosmetics are a game changer. Highly recommend!",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Kendall Jenner",
    feedback: "Elegant and high-quality products that elevate my beauty routine.",
    image: "/images/testimonial3.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;