import React from 'react';

interface InfoSectionProps {
  howItWorksContent: React.ReactNode;
  tipsContent: React.ReactNode;
}

export default function InfoSection({
  howItWorksContent,
  tipsContent,
}: InfoSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 shadow">
        <h2 className="text-lg font-semibold mb-3">How It Works</h2>
        {howItWorksContent}
      </div>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 shadow">
        <h2 className="text-lg font-semibold mb-3">Tips for Best Results</h2>
        {tipsContent}
      </div>
    </div>
  );
} 