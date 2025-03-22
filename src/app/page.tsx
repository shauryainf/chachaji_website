import Link from 'next/link';
import { FaAngleRight, FaVideo, FaBook, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">Saarathi</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Your trusted guide in the beautiful journey of parenting, providing comprehensive support for your child's development.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/services" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Explore Our Services
                  <FaAngleRight className="ml-2" />
                </Link>
                <Link 
                  href="/join" 
                  className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <p className="text-blue-500 font-medium">Parent-Child Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saarathi Meaning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Saarathi: Meaning & Significance</h2>
            <p className="text-lg text-gray-700 mb-8">
              "Saarathi" in Sanskrit means "charioteer" or "guide." Just as a charioteer guides a chariot with wisdom and skill, 
              we aim to guide parents through the journey of raising children with knowledge, patience, and understanding.
              Our mission is to empower parents to nurture well-rounded, confident, and resilient children.
            </p>
          </div>
        </div>
      </section>

      {/* Why PASA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why PASA?</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                PASA stands for <strong>P</strong>arents <strong>A</strong>s <strong>S</strong>aarathis <strong>A</strong>cademy. We believe that parents are the true guides 
                in their children's lives. Our academy equips parents with the knowledge, tools, and community support to excel in this role.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Expert guidance from certified parenting coaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Research-backed approaches to child development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Supportive community of like-minded parents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Holistic development focus - physical, mental, emotional, and social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section (Video & Blog) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FaVideo className="text-blue-600 w-6 h-6 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Featured Video</h3>
              </div>
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded-lg">
                {/* Replace with actual video embed */}
                <div className="flex items-center justify-center h-56">
                  <p className="text-gray-500">Video Player Placeholder</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Watch our latest video on effective parenting techniques that help build stronger connections with your children.
              </p>
              <Link href="/videos" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                View More Videos
                <FaAngleRight className="ml-1" />
              </Link>
            </div>

            {/* Blog Section */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FaBook className="text-purple-600 w-6 h-6 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Latest Blog</h3>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">5 Ways to Encourage Healthy Eating Habits</h4>
                <p className="text-sm text-gray-500 mb-4">Published: June 10, 2023</p>
                <p className="text-gray-700 mb-4">
                  Discover practical strategies to help your children develop a positive relationship with nutritious food, without the struggles and resistance...
                </p>
              </div>
              <Link href="/blog" className="text-purple-600 font-medium inline-flex items-center hover:text-purple-700">
                Read More Blogs
                <FaAngleRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaUsers className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Join Our Parenting Community</h2>
            </div>
            <p className="text-lg mb-8">
              Connect with like-minded parents, share experiences, and gain access to exclusive resources and support to enhance your parenting journey.
            </p>
            <Link 
              href="/join" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors inline-block"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Service</h3>
              <p className="text-gray-700">
                Select from our comprehensive parenting services based on your child's age and your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect With Experts</h3>
              <p className="text-gray-700">
                Work with our trained parenting coaches who provide personalized guidance and resources.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transform Your Parenting</h3>
              <p className="text-gray-700">
                Implement our strategies and witness positive changes in your child's development and family dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Age-wise comprehensive parenting guidance for your child's overall development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <p className="text-blue-500">Nutrition Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Food and Nutrition</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to include healthy food, remove junk without struggles, and help children develop a love for nutritious eating.
                </p>
                <Link 
                  href="/services/nutrition" 
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <p className="text-green-500">Life Skills Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Life Skills Development</h3>
                <p className="text-gray-700 mb-4">
                  Develop organization, independence, leadership, self-confidence, resilience, and essential survival skills for the future.
                </p>
                <Link 
                  href="/services/life-skills" 
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <p className="text-purple-500">Fitness Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental & Physical Fitness</h3>
                <p className="text-gray-700 mb-4">
                  Holistic approaches to develop both mental and physical fitness for a balanced lifestyle and overall wellbeing.
                </p>
                <Link 
                  href="/services/fitness" 
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </div>

            {/* More services button */}
            <div className="md:col-span-2 lg:col-span-3 text-center mt-8">
              <Link 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center bg-blue-50 rounded-lg overflow-hidden">
            <div className="lg:w-1/2 p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1-on-1 Parent Coaching</h2>
              <p className="text-lg text-gray-700 mb-6">
                Book your session with our ILA-trained Coaches to set and meet your goals as parents or just to get a headstart on your journey.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">We Can Help With:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Anger management strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Positive discipline techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Addressing behavioral challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Creating effective daily routines</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/coaching" 
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Book a Session
              </Link>
            </div>
            <div className="lg:w-1/2 bg-blue-100 h-80 flex items-center justify-center">
              <p className="text-blue-500">Coaching Session Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Products <span className="text-blue-600">(Coming Soon)</span></h2>
            <p className="text-lg text-gray-700 mb-8">
              We're developing practical tools to support your parenting journey. Stay tuned for our upcoming products:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nutrition Tracker</h3>
                <p className="text-gray-700">Track and balance your child's daily nutrition needs with our easy-to-use tool.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Feelings Chart</h3>
                <p className="text-gray-700">Help children identify and express their emotions with our interactive feelings chart.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample Day Plan</h3>
                <p className="text-gray-700">Age-appropriate daily schedules to create balanced routines for your child.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Holiday Plan</h3>
                <p className="text-gray-700">Engaging activities and plans to make holidays both fun and developmentally beneficial.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal Setting Tools</h3>
                <p className="text-gray-700">Templates to set and track yearly, quarterly, monthly, and weekly goals for your family.</p>
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
