'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [showPlans, setShowPlans] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
          <p className="text-lg text-gray-600">Here you can manage your account, view your usage, and access exclusive features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            <ul className="text-gray-700">
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Email:</strong> johndoe@example.com</li>
              <li><strong>Plan:</strong> Pro</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <ul className="space-y-4">
              <li>
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  onClick={() => router.push('/tools')}
                >
                  Analyze New Content
                </button>
              </li>
              <li>
                <button
                  className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
                  onClick={() => setShowPlans(true)}
                >
                  Upgrade Plan
                </button>
              </li>
              <li><button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
      {showPlans && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              onClick={() => setShowPlans(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
                <p className="mt-2 text-gray-600">Perfect for individuals and small projects</p>
                <p className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">$9</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Up to 5,000 words per month</li>
                  <li>Basic plagiarism detection</li>
                  <li>AI content analysis</li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Choose Basic</button>
              </div>
              {/* Pro Plan */}
              <div className="rounded-2xl border-2 border-blue-600 p-6 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-2 text-gray-600">Ideal for professionals and growing teams</p>
                <p className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Up to 50,000 words per month</li>
                  <li>Advanced plagiarism detection</li>
                  <li>AI content analysis</li>
                  <li>Detailed reports & analytics</li>
                  <li>Priority support</li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Choose Pro</button>
              </div>
              {/* Enterprise Plan */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
                <p className="mt-2 text-gray-600">For large organizations with custom needs</p>
                <p className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Unlimited words per month</li>
                  <li>Enterprise-grade security</li>
                  <li>Custom API integration</li>
                  <li>Dedicated account manager</li>
                  <li>24/7 priority support</li>
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 