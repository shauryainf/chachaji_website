'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaVideo, FaPhone, FaExclamationCircle } from 'react-icons/fa';

export default function CoachingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childrenInfo: '',
    coachingType: '',
    preferredDate: '',
    concerns: '',
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
    if (!formData.name || !formData.email || !formData.phone || !formData.coachingType) {
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
        message: 'Thank you for booking a coaching session! We\'ll contact you shortly to confirm.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        childrenInfo: '',
        coachingType: '',
        preferredDate: '',
        concerns: '',
      });
    }, 1000);
  };

  const coachingOptions = [
    {
      id: 'initial',
      title: 'Initial Consultation',
      duration: '30 minutes',
      price: '₹999',
      description: 'A brief session to understand your parenting challenges and determine if our coaching is right for you.',
      features: [
        'Assessment of your current parenting challenges',
        'Overview of our coaching approach',
        'Personalized recommendations for next steps',
        'Opportunity to ask questions about our services',
      ],
    },
    {
      id: 'single',
      title: 'Single Coaching Session',
      duration: '60 minutes',
      price: '₹2,499',
      description: 'Focused guidance on a specific parenting challenge or question you\'re currently facing.',
      features: [
        'In-depth discussion of a specific parenting issue',
        'Personalized strategies and solutions',
        'Action plan for implementation',
        'Email follow-up with resources',
      ],
    },
    {
      id: 'package',
      title: 'Coaching Package',
      duration: '4 sessions x 60 minutes',
      price: '₹8,999',
      description: 'Comprehensive support to address multiple aspects of your parenting journey over time.',
      features: [
        'Four 60-minute coaching sessions',
        'Structured approach to tackle multiple challenges',
        'Progress tracking between sessions',
        'Unlimited email support during the package period',
        'Personalized resource library access',
      ],
      featured: true,
    },
  ];

  const coaches = [
    {
      name: 'Dr. Priya Sharma',
      title: 'Child Development Specialist',
      image: 'priya',
      expertise: ['Early Childhood Development', 'Positive Discipline', 'Nutrition Guidance'],
      bio: 'Dr. Priya has over 15 years of experience in child development and parenting education. She specializes in helping parents navigate the early years with confidence.',
    },
    {
      name: 'Sandeep Vyas',
      title: 'Family Counselor',
      image: 'sandeep',
      expertise: ['Family Dynamics', 'Behavioral Challenges', 'Teen Parenting'],
      bio: 'Sandeep brings a wealth of experience in family counseling and specializes in helping parents build strong connections with children of all ages.',
    },
    {
      name: 'Meera Kapoor',
      title: 'ILA Certified Coach',
      image: 'meera',
      expertise: ['Habit Formation', 'Screen Time Management', 'Academic Support'],
      bio: 'With a background in education and child psychology, Meera helps parents develop effective routines and learning environments at home.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              1-on-1 <span className="text-blue-600">Parent Coaching</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Personalized guidance from experienced coaches to help you navigate your unique parenting challenges and achieve your family goals.
            </p>
            <Link 
              href="#booking" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Book a Session
              <FaCalendarAlt className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Coaching Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Your Session</h3>
              <p className="text-gray-700">
                Choose the coaching option that best suits your needs and schedule a time with one of our expert coaches.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Your Challenges</h3>
              <p className="text-gray-700">
                Discuss your specific parenting concerns, goals, and the unique needs of your family with your coach.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implement Strategies</h3>
              <p className="text-gray-700">
                Receive personalized strategies and actionable advice that you can immediately apply in your parenting journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Options Section */}
      <section id="options" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Coaching Options</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Choose the coaching option that best suits your current needs and parenting goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingOptions.map((option) => (
              <div 
                key={option.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden ${option.featured ? 'ring-2 ring-blue-500 relative' : ''}`}
              >
                {option.featured && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <div className="flex items-center mb-4">
                    <FaClock className="text-blue-600 mr-2" />
                    <span className="text-gray-600">{option.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {option.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <p className="text-2xl font-bold text-gray-900 mb-4">{option.price}</p>
                    <Link 
                      href="#booking" 
                      className={`w-full block text-center py-2 rounded-md font-medium ${option.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
                    >
                      Book {option.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Coaches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Meet Our Coaches</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Our team of experienced and certified coaches are dedicated to supporting your parenting journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <p className="text-blue-500 font-medium">{coach.name} Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{coach.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{coach.title}</p>
                  <p className="text-gray-700 mb-4">
                    {coach.bio}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.expertise.map((skill, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Book Your Coaching Session</h2>
            <p className="text-center text-gray-700 mb-8">
              Fill out the form below to schedule your coaching session. We'll contact you within 24 hours to confirm your appointment.
            </p>
            
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="childrenInfo" className="block text-gray-700 font-medium mb-2">Children's Ages</label>
                      <input
                        type="text"
                        id="childrenInfo"
                        name="childrenInfo"
                        value={formData.childrenInfo}
                        onChange={handleChange}
                        placeholder="e.g., 3, 5, 7 years"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="coachingType" className="block text-gray-700 font-medium mb-2">Coaching Option *</label>
                    <select
                      id="coachingType"
                      name="coachingType"
                      value={formData.coachingType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a coaching option</option>
                      <option value="Initial Consultation">Initial Consultation (30 min)</option>
                      <option value="Single Coaching Session">Single Coaching Session (60 min)</option>
                      <option value="Coaching Package">Coaching Package (4 sessions)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-2">Preferred Date & Time</label>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      placeholder="e.g., Weekdays after 6pm, or Sat mornings"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="concerns" className="block text-gray-700 font-medium mb-2">What are your main parenting concerns or goals?</label>
                    <textarea
                      id="concerns"
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Fields marked with * are required</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-700 mb-4">Coaching sessions are available via:</p>
                    <div className="flex space-x-4 mb-6">
                      <div className="flex items-center">
                        <FaVideo className="text-blue-600 mr-2" />
                        <span>Video Call</span>
                      </div>
                      <div className="flex items-center">
                        <FaPhone className="text-blue-600 mr-2" />
                        <span>Phone Call</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Book Your Session
                    </button>
                  </div>
                </form>
              )}

              {formStatus.submitted && formStatus.success && (
                <div className="text-center py-8">
                  <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Received!</h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for scheduling a coaching session. We'll contact you within 24 hours to confirm your appointment and provide further details.
                  </p>
                  <Link 
                    href="/" 
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Parents Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6 italic">
                "The coaching sessions have completely transformed how I approach discipline with my 4-year-old. The personalized strategies were exactly what we needed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">RM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ritu M.</h4>
                  <p className="text-sm text-gray-600">Mother of two</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6 italic">
                "I was struggling with my teenager's behavior. The coach helped me understand the root causes and gave me practical tools to rebuild our connection."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ajay K.</h4>
                  <p className="text-sm text-gray-600">Father of a teenager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6 italic">
                "The coaching package was the best investment in our family. We've established healthy routines, improved communication, and parenting feels more joyful now."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">SS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sanjana & Suresh</h4>
                  <p className="text-sm text-gray-600">Parents of three</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens during a coaching session?</h3>
                <p className="text-gray-700">
                  Each session begins with discussing your current challenges and progress since the last session (if applicable). Your coach will listen attentively, ask clarifying questions, and work with you to develop strategies tailored to your family's needs. Sessions end with clear action steps to implement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know which coaching option is right for me?</h3>
                <p className="text-gray-700">
                  If you're new to coaching or have a specific issue to address, start with an Initial Consultation. For a focused challenge, a Single Coaching Session is ideal. If you're facing multiple parenting challenges or want comprehensive support, the Coaching Package offers the most value and sustained guidance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  We understand that life can be unpredictable with children. You can reschedule or cancel your session up to 24 hours in advance at no charge. Cancellations made less than 24 hours before the scheduled time may incur a 50% fee.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can both parents attend the coaching session?</h3>
                <p className="text-gray-700">
                  Absolutely! We encourage both parents to participate when possible. Consistent approaches between parents are crucial for effective implementation of strategies. There's no additional charge for both parents to attend the same session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Parenting Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward more confident, effective, and joyful parenting with personalized coaching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#booking" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Book Your Session Now
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 