import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export const BILLING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 9.99,
    priceId: process.env.STRIPE_PRICE_STARTER!,
    features: ['Basic API access', '1,000 requests/month'],
    monthlyLimit: 1000,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29.99,
    priceId: process.env.STRIPE_PRICE_PRO!,
    features: ['Advanced API access', '10,000 requests/month', 'Analytics'],
    monthlyLimit: 10000,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99.99,
    priceId: process.env.STRIPE_PRICE_ENTERPRISE!,
    features: ['Unlimited API access', '100,000 requests/month', 'Priority support'],
    monthlyLimit: 100000,
  },
];

// Mock usage - înlocuiește cu PostHog API pentru usage real
export async function getCurrentUsage(userId: string) {
  // TODO: Fetch usage from PostHog
  return {
    current: 123,
    limit: 1000,
    remaining: 877,
  };
}