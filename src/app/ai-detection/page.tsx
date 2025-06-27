'use client';

import { useState } from 'react';
import FaqSection from '@/components/FaqSection';
import InfoSection from '@/components/InfoSection';
import Link from 'next/link';

interface DetectionResult {
  winstonai: {
    ai_score: number;
    items: Array<{
      text: string;
      prediction: 'ai-generated' | 'original';
      ai_score: number;
      ai_score_detail: number;
    }>;
  };
}

const aiDetectionFaqs = [
  {
    question: 'How accurate is the AI text detection?',
    answer:
      'Our tool uses advanced algorithms trained on vast datasets of human and AI-generated text to achieve high accuracy. However, no tool is perfect, and the result should be used as a strong indicator, not a definitive conclusion.',
  },
  {
    question: 'What is the minimum amount of text required?',
    answer:
      'For the best results, we recommend analyzing at least 100 characters of text. Shorter texts may not provide enough data for an accurate analysis.',
  },
  {
    question: 'Does this tool detect content from all AI models?',
    answer:
      'Our system is designed to detect patterns common to most major language models, including those from OpenAI, Google, and others. We continuously update our models to keep up with new advancements in AI writing.',
  },
  {
    question: 'Can I use this for academic or professional purposes?',
    answer:
      'Yes, this tool can be a valuable asset for educators, editors, and publishers to ensure content authenticity. However, we recommend using it as part of a broader review process and not as a sole basis for academic or professional judgment.',
  },
];

const aiDetectionInfo = {
  howItWorks: (
    <>
      <p className="text-sm mb-2">
        Our AI detection tool uses advanced machine learning algorithms to
        analyze text patterns, structural elements, and other linguistic
        features that are characteristic of AI-generated content.
      </p>
      <p className="text-sm">
        The system compares your text against models trained on millions of
        examples of both human-written and AI-generated content to provide
        accurate detection results.
      </p>
    </>
  ),
  tips: (
    <ul className="list-disc list-inside text-sm space-y-2">
      <li>
        Provide at least 100 characters of text for more accurate analysis.
      </li>
      <li>Include complete sentences and paragraphs rather than fragments.</li>
      <li>
        For academic content, consider also using our{' '}
        <Link
          href="/analyze"
          className="text-blue-400 underline hover:text-blue-300"
        >
          plagiarism detection tool
        </Link>
        .
      </li>
      <li>
        Results are not 100% guaranteed and should be used as guidance only.
      </li>
    </ul>
  ),
};

export default function AIDetection() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/ai-detection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your text
              </label>
              <textarea
                id="text"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || !text.trim()}
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                loading || !text.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Analyzing...' : 'Analyze Text'}
            </button>
          </form>
        </div>

        <InfoSection
          howItWorksContent={aiDetectionInfo.howItWorks}
          tipsContent={aiDetectionInfo.tips}
        />

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {result && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Analysis Results
            </h2>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Overall AI Score
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.winstonai.ai_score > 0.5
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {(result.winstonai.ai_score * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    result.winstonai.ai_score > 0.5 ? 'bg-red-600' : 'bg-green-600'
                  }`}
                  style={{ width: `${result.winstonai.ai_score * 100}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {result.winstonai.ai_score > 0.5
                  ? 'This text is likely AI-generated'
                  : 'This text is likely human-written'}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Detailed Analysis
              </h3>
              <div className="space-y-4">
                {result.winstonai.items.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">
                        Segment {index + 1}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.prediction === 'ai-generated'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {item.prediction === 'ai-generated' ? 'AI-Generated' : 'Human-Written'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.text}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${
                          item.prediction === 'ai-generated'
                            ? 'bg-red-600'
                            : 'bg-green-600'
                        }`}
                        style={{ width: `${item.ai_score_detail * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our AI Text Detection feature."
          faqs={aiDetectionFaqs}
        />
      </div>
    </div>
  );
} 