import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/billing';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 });
  }

  const body = await req.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: 'Webhook signature verification failed.' }, { status: 400 });
  }

  // Procesează evenimentele relevante
  switch (event.type) {
    case 'checkout.session.completed': {
      // TODO: Salvează/actualizează abonamentul userului în DB
      break;
    }
    case 'invoice.payment_succeeded': {
      // TODO: Poți marca abonamentul ca activ
      break;
    }
    case 'customer.subscription.updated': {
      // TODO: Actualizează planul userului
      break;
    }
    case 'customer.subscription.deleted': {
      // TODO: Dezactivează abonamentul userului
      break;
    }
    // Adaugă și alte evenimente relevante dacă ai nevoie
  }

  return NextResponse.json({ received: true });
} 