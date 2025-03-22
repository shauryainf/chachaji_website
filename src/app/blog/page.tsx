import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';

export const metadata = {
  title: 'Blog - Saarathi Parenting Guidance',
  description: 'Explore our blog for practical parenting tips, expert advice, and guidance on raising happy, healthy, and confident children.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Ways to Encourage Healthy Eating Habits',
      excerpt: 'Discover practical strategies to help your children develop a positive relationship with nutritious food without struggles and resistance.',
      author: 'Dr. Priya Sharma',
      date: 'June 10, 2023',
      category: 'Nutrition',
      image: 'nutrition',
    },
    {
      id: 2,
      title: 'Building Emotional Intelligence in Children',
      excerpt: 'Learn how to help your child recognize, understand, and manage their emotions effectively from an early age.',
      author: 'Sandeep Vyas',
      date: 'May 22, 2023',
      category: 'Emotional Development',
      image: 'emotional',
    },
    {
      id: 3,
      title: 'Screen Time Management: Finding the Right Balance',
      excerpt: 'Practical tips for managing your child\'s screen time while ensuring they benefit from digital literacy in the modern world.',
      author: 'Meera Kapoor',
      date: 'May 5, 2023',
      category: 'Digital Parenting',
      image: 'screen',
    },
    {
      id: 4,
      title: 'The Power of Positive Discipline',
      excerpt: 'Explore effective discipline strategies that focus on teaching rather than punishing, building a stronger parent-child relationship.',
      author: 'Dr. Priya Sharma',
      date: 'April 18, 2023',
      category: 'Discipline',
      image: 'discipline',
    },
    {
      id: 5,
      title: 'Fostering Independence in Toddlers',
      excerpt: 'Age-appropriate ways to encourage self-sufficiency and confidence in your toddler\'s daily activities.',
      author: 'Ankit Patel',
      date: 'April 2, 2023',
      category: 'Toddler Development',
      image: 'toddler',
    },
    {
      id: 6,
      title: 'Creating Effective Bedtime Routines',
      excerpt: 'Strategies for establishing consistent bedtime routines that promote quality sleep and reduce nighttime struggles.',
      author: 'Sandeep Vyas',
      date: 'March 15, 2023',
      category: 'Sleep',
      image: 'sleep',
    },
  ];

  const categories = [
    'All Categories',
    'Nutrition',
    'Emotional Development',
    'Digital Parenting',
    'Discipline',
    'Toddler Development',
    'Sleep',
    'School Readiness',
    'Parenting Tips',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Saarathi <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore practical parenting insights, expert advice, and evidence-based strategies to support your child's development.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className={`h-48 bg-${post.image === 'nutrition' ? 'red' : post.image === 'emotional' ? 'blue' : post.image === 'screen' ? 'purple' : post.image === 'discipline' ? 'green' : post.image === 'toddler' ? 'yellow' : 'indigo'}-100 flex items-center justify-center`}>
                      <p className={`text-${post.image === 'nutrition' ? 'red' : post.image === 'emotional' ? 'blue' : post.image === 'screen' ? 'purple' : post.image === 'discipline' ? 'green' : post.image === 'toddler' ? 'yellow' : 'indigo'}-500`}>{post.category} Image</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {post.date}
                        </span>
                        <span className="mx-2">|</span>
                        <span className="flex items-center">
                          <FaUser className="mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-1">
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Previous</a>
                  <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-md">1</a>
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</a>
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</a>
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Next</a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search Box */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search blog posts..." 
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`flex items-center text-${index === 0 ? 'blue-600 font-medium' : 'gray-700'} hover:text-blue-600 transition-colors`}
                      >
                        {category}
                        {index === 0 && <span className="ml-auto text-sm text-gray-500">(15)</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex items-start">
                      <div className={`w-16 h-16 bg-${post.image === 'nutrition' ? 'red' : post.image === 'emotional' ? 'blue' : 'purple'}-100 rounded flex-shrink-0 flex items-center justify-center mr-3`}>
                        <p className={`text-${post.image === 'nutrition' ? 'red' : post.image === 'emotional' ? 'blue' : 'purple'}-500 text-xs`}>Image</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe Box */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-700 mb-4">
                  Get the latest parenting tips and guidance delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want More Personalized Guidance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of parents to receive tailored advice and support for your specific parenting challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/join" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Join Our Community
            </Link>
            <Link 
              href="/coaching" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Book a Coaching Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 