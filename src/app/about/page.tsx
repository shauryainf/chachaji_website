import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'About Saarathi - Our Mission & Values',
  description: 'Learn about Saarathi, our mission, vision, and the team behind our comprehensive parenting guidance services.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Saarathi</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover our story, mission, and the passionate team behind our comprehensive parenting guidance services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Saarathi was born from a simple yet profound observation: parents today are navigating an increasingly complex world while raising their children, often with less community support than previous generations enjoyed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded by a team of experienced educators, child development specialists, and parents, Saarathi aims to bridge this gap by providing comprehensive guidance that combines traditional wisdom with modern research.
              </p>
              <p className="text-lg text-gray-700">
                Our name "Saarathi" - meaning "charioteer" or "guide" in Sanskrit - reflects our commitment to guiding parents through the beautiful yet challenging journey of raising well-rounded, confident, and resilient children.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <p className="text-blue-500 font-medium">Founder Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To empower parents with knowledge, tools, and community support that enables them to raise children who are physically healthy, emotionally intelligent, socially skilled, and intellectually curious.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Provide age-appropriate, evidence-based parenting guidance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Create a supportive community for parents to share and learn</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Offer personalized coaching that addresses unique family dynamics</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Vision</h3>
              <p className="text-lg text-gray-700 mb-6">
                A world where parents feel confident and supported in their role, creating nurturing environments where children thrive and develop to their full potential.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Children growing up with strong foundations in life skills and resilience</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Parents experiencing joy and fulfillment in their parenting journey</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Families building strong, loving relationships that last a lifetime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PASA Explained Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What is PASA?</h2>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold">PASA</span> stands for <span className="font-bold">P</span>arents <span className="font-bold">A</span>s <span className="font-bold">S</span>aarathis <span className="font-bold">A</span>cademy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that while we provide guidance and resources, ultimately parents themselves become the true "Saarathis" (guides) in their children's lives. Our academy equips parents with the knowledge, strategies, and community support to excel in this important role.
              </p>
              <p className="text-lg text-gray-700">
                Through PASA, we offer structured learning paths, practical tools, and personalized coaching that transforms parenting from a series of reactions to intentional, informed guidance that shapes the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Can be added in the future */}
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Parenting Community?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect with other parents, access our resources, and begin your journey towards more confident and effective parenting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/join" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Join Our Community
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 