import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
        <p className="text-lg text-gray-600">We're here to help you with any questions or concerns</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Email Support</h2>
          <p className="text-gray-600 text-center">support@example.com</p>
          <p className="text-sm text-gray-500 text-center mt-2">Response within 24 hours</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
            <Phone className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Phone Support</h2>
          <p className="text-gray-600 text-center">1-800-123-4567</p>
          <p className="text-sm text-gray-500 text-center mt-2">Mon-Fri, 9am-5pm EST</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
            <MessageSquare className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Live Chat</h2>
          <p className="text-gray-600 text-center">Available 24/7</p>
          <p className="text-sm text-gray-500 text-center mt-2">Instant response</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">How do I create an account?</h3>
            <p className="text-gray-600">You can create an account by clicking the "Sign Up" button in the top right corner and following the registration process.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for your convenience.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">How can I update my profile?</h3>
            <p className="text-gray-600">Log into your account, navigate to the profile settings, and you can update your information there.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;