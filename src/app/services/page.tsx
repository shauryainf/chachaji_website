import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAppleAlt, FaBrain, FaRunning, FaCalendarCheck, FaBook, FaChild, FaHeart } from 'react-icons/fa';

export const metadata = {
  title: 'Our Services - Saarathi Parenting Guidance',
  description: 'Explore our comprehensive parenting guidance services including nutrition, life skills, fitness, habit building, and more for your child\'s overall development.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'nutrition',
      title: 'Food and Nutrition',
      icon: <FaAppleAlt className="w-8 h-8 text-red-500" />,
      color: 'bg-red-50',
      iconColor: 'text-red-500',
      description: 'Comprehensive guidance on developing healthy eating habits without struggles.',
      details: [
        'Age-appropriate nutrition recommendations',
        'Strategies to introduce new foods without resistance',
        'Meal planning for balanced nutrition',
        'Addressing picky eating',
        'Developing a positive relationship with food',
        'Replacing junk food with nutritious alternatives',
      ],
    },
    {
      id: 'life-skills',
      title: 'Life Skills Development',
      icon: <FaBrain className="w-8 h-8 text-green-500" />,
      color: 'bg-green-50',
      iconColor: 'text-green-500',
      description: 'Building essential skills for success in all areas of life.',
      details: [
        'Organization and independence',
        'Leadership and communication skills',
        'Self-confidence and resilience building',
        'Problem-solving strategies',
        'Financial literacy basics',
        'Survival skills and adaptability',
        'Social skills and empathy development',
      ],
    },
    {
      id: 'fitness',
      title: 'Mental & Physical Fitness',
      icon: <FaRunning className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-50',
      iconColor: 'text-blue-500',
      description: 'Holistic approaches to develop both mental and physical well-being.',
      details: [
        'Age-appropriate physical activities',
        'Mindfulness and stress management',
        'Building emotional intelligence',
        'Yoga and meditation for children',
        'Developing sports interests',
        'Establishing healthy screen-time habits',
      ],
    },
    {
      id: 'habits',
      title: 'Habit Building',
      icon: <FaCalendarCheck className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-50',
      iconColor: 'text-purple-500',
      description: 'Creating positive routines and habits that last a lifetime.',
      details: [
        'Establishing effective morning and bedtime routines',
        'Consistent habit formation strategies',
        'Responsibility and accountability development',
        'Time management skills',
        'Self-discipline techniques',
        'Reward systems that work',
      ],
    },
    {
      id: 'academic',
      title: 'Academic Concepts',
      icon: <FaBook className="w-8 h-8 text-yellow-500" />,
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
      description: 'Learning from real life and the world around us for lasting knowledge.',
      details: [
        'Practical application of academic concepts',
        'Making learning engaging and fun',
        'Connecting curriculum to everyday experiences',
        'Developing curiosity and love for learning',
        'Project-based learning approaches',
        'Supporting different learning styles',
      ],
    },
    {
      id: 'engagement',
      title: 'Screen-Free Engagement',
      icon: <FaChild className="w-8 h-8 text-pink-500" />,
      color: 'bg-pink-50',
      iconColor: 'text-pink-500',
      description: 'Entertaining and engaging activities without technology dependence.',
      details: [
        'Age-appropriate screen-free activities',
        'Developing creativity through play',
        'Indoor and outdoor activity ideas',
        'Stimulating toys and games',
        'Family bonding activities',
        'Balancing structured and unstructured play',
      ],
    },
    {
      id: 'relationship',
      title: 'Parent-Child Relationship',
      icon: <FaHeart className="w-8 h-8 text-red-500" />,
      color: 'bg-red-50',
      iconColor: 'text-red-500',
      description: 'Building and strengthening the most important relationship.',
      details: [
        'Effective communication techniques',
        'Quality time strategies',
        'Understanding developmental stages',
        'Positive discipline approaches',
        'Building trust and connection',
        'Managing challenging behaviors with empathy',
        'Creating meaningful family traditions',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Age-wise comprehensive parenting guidance for your child's overall development from infancy through adolescence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Development Approach</h2>
            <p className="text-lg text-gray-700">
              At Saarathi, we believe in nurturing all aspects of a child's development. Our services are designed to provide parents with practical, age-appropriate guidance that creates a foundation for lifelong success and well-being.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`${service.color} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`${service.iconColor} mr-2`}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                    {service.details.length > 3 && (
                      <li className="text-blue-600">+ {service.details.length - 3} more</li>
                    )}
                  </ul>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Age-Specific Guidance</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our services are tailored to address the unique developmental needs of children at different stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Infants (0-1 years)</h3>
              <p className="text-gray-700 mb-4">
                Establishing healthy foundations during this crucial first year of rapid development.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Nutrition and feeding guidance</li>
                <li>• Sleep routines</li>
                <li>• Sensory development activities</li>
                <li>• Milestone tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Toddlers (1-3 years)</h3>
              <p className="text-gray-700 mb-4">
                Supporting independence and language development during these formative years.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Managing tantrums</li>
                <li>• Potty training</li>
                <li>• Early social skills</li>
                <li>• Learning through play</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Preschoolers (3-5 years)</h3>
              <p className="text-gray-700 mb-4">
                Fostering curiosity, creativity, and readiness for school and social environments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• School readiness</li>
                <li>• Emotional regulation</li>
                <li>• Cooperative play</li>
                <li>• Early academic concepts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-red-600 mb-3">School-Age (6-12 years)</h3>
              <p className="text-gray-700 mb-4">
                Building responsibility, confidence, and academic success during elementary years.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Homework strategies</li>
                <li>• Peer relationships</li>
                <li>• Building responsibility</li>
                <li>• Digital citizenship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg overflow-hidden">
            <div className="p-8 md:p-12 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Personalized Guidance?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our 1-on-1 parent coaching sessions provide tailored strategies to address your specific parenting challenges and goals.
              </p>
              <Link 
                href="/coaching" 
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Book a Coaching Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Can be added in the future */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How are services delivered?</h3>
                <p className="text-gray-700">
                  Our services are delivered through a combination of online resources, virtual workshops, one-on-one coaching sessions, and community discussions. We offer both synchronous and asynchronous options to fit your schedule.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Are services customized for each child?</h3>
                <p className="text-gray-700">
                  Yes, we recognize that each child is unique. While we provide age-appropriate guidance, our approach can be tailored to your child's specific temperament, interests, and developmental needs, especially through our coaching services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know which service is right for my family?</h3>
                <p className="text-gray-700">
                  We offer a free initial consultation to understand your parenting goals and challenges. Based on this, we can recommend the most appropriate services for your situation. You can also start with our community membership for access to general resources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can both parents participate?</h3>
                <p className="text-gray-700">
                  Absolutely! We encourage both parents to participate in our programs to ensure consistent approaches at home. Our family membership allows access for both parents at no additional cost.
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
            Join our community of parents who are dedicated to raising happy, healthy, and well-rounded children.
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