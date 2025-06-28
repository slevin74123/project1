'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FaqSection from '../../components/FaqSection';
import InfoSection from '../../components/InfoSection';

interface DeepfakeResult {
  sightengine: {
    deepfake_score: number;
    prediction: 'original' | 'deepfake';
  };
}

const deepfakeFaqs = [
  {
    question: 'How accurate is the deepfake detection?',
    answer:
      'Our deepfake detection model uses advanced algorithms to analyze images for signs of AI manipulation. While it has a high accuracy rate, results should be used as a strong indicator rather than absolute proof.',
  },
  {
    question: 'What kind of images can I analyze?',
    answer:
      'The tool works best with clear, high-resolution images of faces. It supports common image formats like JPEG and PNG, provided as a public URL.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we prioritize your privacy and security. The images you provide are sent to our analysis provider and are not stored permanently on our servers. We have strict data handling policies in place.',
  },
  {
    question: 'What does the "deepfake score" mean?',
    answer:
      'The deepfake score is a percentage indicating the likelihood that an image is a deepfake. A higher score (e.g., above 80%) suggests a high probability of AI manipulation, while a low score suggests the image is likely authentic.',
  },
];

const deepfakeInfo = {
  howItWorks: (
    <>
      <p className="text-sm mb-2">
        Our deepfake detection tool uses sophisticated AI models to analyze
        visual artifacts, inconsistencies in lighting, and other subtle clues
        that are characteristic of AI-generated or manipulated images.
      </p>
      <p className="text-sm">
        The system processes the image from the provided URL and compares its
        features against known deepfake patterns to determine its authenticity.
      </p>
    </>
  ),
  tips: (
    <ul className="list-disc list-inside text-sm space-y-2">
      <li>Use direct links to image files (e.g., ending in .jpg, .png).</li>
      <li>
        Higher resolution images generally provide more accurate results.
      </li>
      <li>The tool is most effective on images containing faces.</li>
      <li>
        Results are not 100% guaranteed and should be used as a strong
        indicator, not definitive proof.
      </li>
    </ul>
  ),
};

export default function DeepfakeDetectionPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DeepfakeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/deepfake-detection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file_url: imageUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred during detection.');
      }

      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred during detection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Deepfake Image Detection
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Analyze an image to detect if it has been generated or manipulated
            by AI.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || !imageUrl.trim()}
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                loading || !imageUrl.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Analyzing Image...' : 'Detect Deepfake'}
            </button>
          </form>
        </div>

        <InfoSection
          howItWorksContent={deepfakeInfo.howItWorks}
          tipsContent={deepfakeInfo.tips}
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
              Detection Results
            </h2>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Deepfake Score
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.sightengine.deepfake_score > 0.5
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {(result.sightengine.deepfake_score * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    result.sightengine.deepfake_score > 0.5
                      ? 'bg-red-600'
                      : 'bg-green-600'
                  }`}
                  style={{
                    width: `${result.sightengine.deepfake_score * 100}%`,
                  }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600 capitalize">
                Prediction:{' '}
                <span className="font-semibold">
                  {result.sightengine.prediction}
                </span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {result.sightengine.deepfake_score > 0.5
                  ? 'This image is likely AI-generated or manipulated (deepfake).'
                  : 'This image appears to be original.'}
              </p>
            </div>
            {imageUrl && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Analyzed Image
                </h3>
                <Image
                  src={imageUrl}
                  alt="Analyzed"
                  width={500}
                  height={300}
                  className="rounded-lg max-w-full h-auto mx-auto shadow-md"
                />
              </div>
            )}
          </div>
        )}

        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Learn more about our Deepfake Image Detection tool."
          faqs={deepfakeFaqs}
        />
      </div>
    </div>
  );
} 