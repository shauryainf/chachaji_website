import React from 'react';
import Link from 'next/link';
import { FaBell, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Products - Saarathi Parenting Tools (Coming Soon)',
  description: 'Explore our upcoming parenting tools and resources designed to support your child\'s development and make parenting more joyful.',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'nutrition-tracker',
      title: 'Nutrition Tracker',
      category: 'Health & Wellness',
      description: 'A comprehensive tool to track and balance your child\'s daily nutrition intake.',
      features: [
        'Age-appropriate nutrition guidelines',
        'Daily, weekly, and monthly tracking',
        'Visual food group balance indicators',
        'Recipe suggestions based on nutritional needs',
        'Customizable for allergies and preferences',
      ],
      image: 'nutrition',
      color: 'bg-red-50',
      iconColor: 'text-red-500',
      comingSoon: true,
    },
    {
      id: 'feelings-chart',
      title: 'Feelings Chart',
      category: 'Emotional Development',
      description: 'An interactive tool to help children identify, express, and manage their emotions effectively.',
      features: [
        'Age-appropriate emotion vocabulary',
        'Visual representations of different emotions',
        'Coping strategies for difficult feelings',
        'Progress tracking for emotional awareness',
        'Customizable for different developmental stages',
      ],
      image: 'emotional',
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
      comingSoon: true,
    },
    {
      id: 'day-plan',
      title: 'Sample Day Plan',
      category: 'Routine & Structure',
      description: 'Customizable daily schedules to establish healthy routines for children of all ages.',
      features: [
        'Age-appropriate daily routines',
        'Visual schedule templates',
        'Balance between activities and rest',
        'Customizable for school days and weekends',
        'Transition time suggestions',
      ],
      image: 'schedule',
      color: 'bg-green-50',
      iconColor: 'text-green-500',
      comingSoon: true,
    },
    {
      id: 'holiday-plan',
      title: 'Holiday Plan',
      category: 'Activities & Engagement',
      description: 'Comprehensive guides and activity plans to make holidays both enjoyable and developmentally beneficial.',
      features: [
        'Age-appropriate activity suggestions',
        'Indoor and outdoor activity ideas',
        'Learning opportunities integrated with fun',
        'Screen-free entertainment options',
        'Family bonding activities',
      ],
      image: 'holiday',
      color: 'bg-purple-50',
      iconColor: 'text-purple-500',
      comingSoon: true,
    },
    {
      id: 'goal-setting',
      title: 'Goal Setting Tools',
      category: 'Family Development',
      description: 'Templates and guides to help families set and achieve meaningful goals together.',
      features: [
        'Age-appropriate goal setting frameworks',
        'Visual progress tracking tools',
        'Family meeting templates',
        'Celebration suggestions for achievements',
        'Adaptable for different family structures',
      ],
      image: 'goals',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
      comingSoon: true,
    },
    {
      id: 'parenting-journal',
      title: 'Parenting Journal',
      category: 'Reflection & Growth',
      description: 'A structured journal to document your parenting journey, reflect on challenges, and celebrate successes.',
      features: [
        'Guided reflection prompts',
        'Milestone tracking sections',
        'Challenge resolution frameworks',
        'Gratitude and celebration pages',
        'Digital and physical versions available',
      ],
      image: 'journal',
      color: 'bg-pink-50',
      iconColor: 'text-pink-500',
      comingSoon: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Our <span className="text-blue-600">Products</span>
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-6">Coming Soon</p>
            <p className="text-lg text-gray-700 mb-8">
              We're developing practical tools and resources to support your parenting journey. Stay tuned for our upcoming product releases!
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className={`${product.color} rounded-lg shadow-md overflow-hidden relative`}>
                {product.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className={`h-48 ${product.color} flex items-center justify-center border-b border-gray-100`}>
                  <p className={`${product.iconColor} font-medium text-xl`}>{product.title}</p>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className={`text-sm font-medium ${product.iconColor} px-2.5 py-0.5 rounded bg-white`}>
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-700 mb-4">
                    {product.description}
                  </p>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`${product.iconColor} mr-2`}>•</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors cursor-not-allowed opacity-70">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FaBell className="text-blue-600 w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Be the first to know when our products are launched. Subscribe to our newsletter to receive updates and early access opportunities.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscribe to Product Updates</h3>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <FaEnvelope className="mr-2" />
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Request Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Product</h2>
            <p className="text-lg text-gray-700 mb-8">
              Is there a specific parenting tool or resource you wish existed? We'd love to hear your ideas and suggestions.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              Share Your Product Ideas
            </Link>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want Early Access to Our Products?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of parents to be the first to try our new products and provide valuable feedback.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/join" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Join Our Community
            </Link>
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