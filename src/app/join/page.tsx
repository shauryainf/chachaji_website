'use client';

import React, { useState } from 'react';
import { FaUsers, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    email: '',
    city: '',
    state: '',
    country: '',
    childrenInfo: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.parentName || !formData.email || !formData.phoneNumber) {
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
        message: 'Thank you for joining our community! We\'ll be in touch soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        parentName: '',
        phoneNumber: '',
        email: '',
        city: '',
        state: '',
        country: '',
        childrenInfo: '',
      });
    }, 1000);
  };

  const benefits = [
    'Access to exclusive parenting resources and tools',
    'Regular newsletters with practical parenting tips',
    'Invitation to monthly virtual parenting workshops',
    'Connection with like-minded parents',
    'Priority access to new products and services',
    'Discounts on coaching sessions and premium content'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaUsers className="text-blue-600 w-10 h-10 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Join Our Community
              </h1>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Connect with like-minded parents, gain access to exclusive resources, and transform your parenting journey with our supportive community.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits and Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Benefits */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Benefits</h2>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Guidelines</h3>
                <p className="text-gray-700 mb-4">
                  Our community is built on respect, support, and positive engagement. Members agree to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maintain confidentiality of shared experiences</li>
                  <li>• Provide constructive and supportive feedback</li>
                  <li>• Respect diverse parenting approaches</li>
                  <li>• Contribute positively to group discussions</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
                
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
                    <div>
                      <label htmlFor="parentName" className="block text-gray-700 font-medium mb-2">Parent's Name *</label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="childrenInfo" className="block text-gray-700 font-medium mb-2">Children's Names and Ages</label>
                      <textarea
                        id="childrenInfo"
                        name="childrenInfo"
                        value={formData.childrenInfo}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g., John (5 years), Sarah (3 years)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        Join Community
                      </button>
                    </div>
                  </form>
                )}

                {formStatus.submitted && formStatus.success && (
                  <div className="text-center py-8">
                    <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-700">
                      We're excited to have you join our community. You'll receive a welcome email shortly with next steps.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Community Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">SM</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sanya M.</h3>
                  <p className="text-gray-600">Mother of 2</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Joining this community has transformed how I approach parenting. The resources and support from other parents have given me confidence to handle challenging situations with my kids."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">RK</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Rohit K.</h3>
                  <p className="text-gray-600">Father of 3</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The practical tips on healthy eating and screen management have made a noticeable difference in our home. My children are happier and I feel more equipped as a parent."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">AP</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Anita P.</h3>
                  <p className="text-gray-600">Mother of 1</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a first-time mother, I was overwhelmed until I found this community. The structured guidance and supportive network have been invaluable in my parenting journey."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 