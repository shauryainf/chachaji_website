'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blogs', path: '/blog' },
        { name: 'Join Community', path: '/join' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Parenting Guidance', path: '/services' },
        { name: '1-on-1 Coaching', path: '/coaching' },
        { name: 'Products', path: '/products' },
        { name: 'Resources', path: '/resources' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Refund Policy', path: '/refund-policy' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Saarathi</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Empowering parents with age-wise comprehensive guidance for children's
              overall development - nutrition, life skills, fitness, and more.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/yourphonenumber" 
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            &copy; {currentYear} Saarathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 