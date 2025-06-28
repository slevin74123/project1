import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Detect Plagiarism & AI-Generated Content
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Ensure the authenticity of your content with our advanced plagiarism detection and AI content analysis tools.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/analyze" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Now
          </Link>
          <Link 
            href="/pricing" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Plagiarism Detection</h3>
            <p className="text-gray-600">Comprehensive scanning against billions of web pages and academic papers.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Content Analysis</h3>
            <p className="text-gray-600">Advanced algorithms to detect AI-generated content with high accuracy.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Detailed Reports</h3>
            <p className="text-gray-600">Get comprehensive reports with highlighted matches and similarity scores.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <p className="mt-4 text-gray-600">Perfect for individuals and small projects</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$9</span>
                <span className="text-gray-600">/month</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Up to 5,000 words per month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Basic plagiarism detection</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">AI content analysis</span>
                </li>
              </ul>
              <Link
                href="/signup?plan=basic"
                className="mt-8 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="rounded-2xl border-2 border-blue-600 p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <p className="mt-4 text-gray-600">Ideal for professionals and growing teams</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Up to 50,000 words per month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Advanced plagiarism detection</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">AI content analysis</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Detailed reports & analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Priority support</span>
                </li>
              </ul>
              <Link
                href="/signup?plan=pro"
                className="mt-8 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-gray-600">For large organizations with custom needs</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Unlimited words per month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Enterprise-grade security</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Custom API integration</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">24/7 priority support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our service
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How accurate is the plagiarism detection?</h3>
                <p className="mt-2 text-gray-600">
                  Our plagiarism detection system scans against billions of web pages and academic papers, achieving over 99% accuracy. We use advanced algorithms to identify both exact matches and paraphrased content.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How does the AI content detection work?</h3>
                <p className="mt-2 text-gray-600">
                  Our AI detection uses sophisticated language models to analyze text patterns, writing style, and content structure. It can identify content generated by various AI models with high accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Can I upgrade or downgrade my plan?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, you can change your plan at any time. When upgrading, you&apos;ll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What happens if I exceed my word limit?</h3>
                <p className="mt-2 text-gray-600">
                  If you exceed your monthly word limit, you&apos;ll be notified and can either upgrade your plan or wait until your next billing cycle. Any words over the limit will be processed at a pay-as-you-go rate.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Is my content secure?</h3>
                <p className="mt-2 text-gray-600">
                  Absolutely. We use enterprise-grade encryption and security measures. Your content is never shared or stored permanently, and we comply with all major data protection regulations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Do you offer refunds?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, we offer a 14-day money-back guarantee for all plans. If you&apos;re not satisfied with our service, you can request a full refund within the first two weeks of your subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to ensure your content&apos;s authenticity?
          </h2>
          <Link 
            href="/signup" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
