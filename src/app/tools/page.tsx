'use client';

import React, { useEffect, useState } from 'react';
import { BILLING_PLANS } from '@/lib/billing';

export default function BillingPage() {
  const [usage, setUsage] = useState<any>(null);
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/usage')
      .then(res => res.json())
      .then(data => {
        setUsage(data.usage);
        setPlan(data.plan);
      });
  }, []);

  const handleUpgrade = async (planId: string) => {
    setLoading(true);
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId, email: 'user@email.com' }), // TODO: email din sesiune
    });
    const data = await res.json();
    setLoading(false);
    if (data.url) window.location.href = data.url;
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Subscription & Usage</h1>
      {plan && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold">{plan.name} Plan</h2>
          <ul className="list-disc ml-6">
            {plan.features.map((f: string) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      )}
      {usage && (
        <div className="mb-8">
          <h3 className="font-semibold">Usage this month</h3>
          <div>{usage.current} / {usage.limit} requests</div>
          <div>Remaining: {usage.remaining}</div>
        </div>
      )}
      <div className="space-y-4">
        {BILLING_PLANS.map(p => (
          <button
            key={p.id}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            onClick={() => handleUpgrade(p.id)}
            disabled={loading}
          >
            Upgrade to {p.name} (${p.price}/month)
          </button>
        ))}
      </div>
    </div>
  );
} 