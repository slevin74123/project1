'use client';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  subtitle: string;
  faqs: FaqItem[];
}

export default function FaqSection({ title, subtitle, faqs }: FaqSectionProps) {
  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {firstHalf.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {secondHalf.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 