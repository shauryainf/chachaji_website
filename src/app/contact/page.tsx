'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // In a real application, this would send the data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const contactOptions = [
    { 
      icon: <FaEnvelope className="w-6 h-6 text-blue-600" />,
      title: 'Email Us',
      details: 'info@saarathi.com',
      action: 'mailto:info@saarathi.com',
      actionText: 'Send Email'
    },
    { 
      icon: <FaPhoneAlt className="w-6 h-6 text-blue-600" />,
      title: 'Call Us',
      details: '+91 98765 43210',
      action: 'tel:+919876543210',
      actionText: 'Call Now'
    },
    { 
      icon: <FaWhatsapp className="w-6 h-6 text-blue-600" />,
      title: 'WhatsApp',
      details: 'Chat with our support team',
      action: 'https://wa.me/919876543210',
      actionText: 'Chat Now'
    },
    { 
      icon: <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra, India',
      action: '#',
      actionText: 'Get Directions'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have questions or feedback? We'd love to hear from you. Our team is always ready to assist you on your parenting journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-700 mb-4">{option.details}</p>
                <a 
                  href={option.action} 
                  target={option.action.startsWith('http') ? '_blank' : '_self'}
                  rel={option.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  {option.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className="flex items-center">
                    {formStatus.success 
                      ? <FaCheckCircle className="text-green-500 mr-2" /> 
                      : <FaExclamationCircle className="text-red-500 mr-2" />
                    }
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}

              {(!formStatus.submitted || !formStatus.success) && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Service Information">Service Information</option>
                      <option value="Coaching Session">Coaching Session</option>
                      <option value="Community Membership">Community Membership</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Cancellation/Refund">Cancellation/Refund</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Fields marked with * are required</p>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}

              {formStatus.submitted && formStatus.success && (
                <div className="text-center py-8">
                  <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">
                    Thank you for reaching out to us. Our team will review your message and respond shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What are your response times?</h3>
                <p className="text-gray-700">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please reach out via WhatsApp for faster assistance.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I request a refund?</h3>
                <p className="text-gray-700">
                  Refund requests should be sent via email or through the contact form with subject "Cancellation/Refund". Please include your order details and reason for the refund. Our team will process eligible refunds according to our refund policy.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I schedule a call to discuss my needs?</h3>
                <p className="text-gray-700">
                  Yes, you can request a callback by selecting "Service Information" in the contact form subject dropdown. Alternatively, you can directly book an initial consultation through our coaching page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 