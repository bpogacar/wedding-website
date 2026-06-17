import { NextResponse } from 'next/server';

import { getHouseholdDetails } from '@/app/lib/rsvp';

export const runtime = 'nodejs';

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    const household = await getHouseholdDetails(params.id);

    if (!household) {
      return NextResponse.json({ error: 'Household not found.' }, { status: 404 });
    }

    return NextResponse.json({ household });
  } catch (error) {
    console.error('RSVP household load failed', error);
    return NextResponse.json(
      { error: 'Unable to load this invitation right now.' },
      { status: 500 },
    );
  }
}
