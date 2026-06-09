import { NextResponse } from 'next/server';

import { normalizeSearchQuery, searchHouseholds } from '@/app/lib/rsvp';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = normalizeSearchQuery(searchParams.get('q') ?? '');

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  try {
    const results = await searchHouseholds(query);
    return NextResponse.json({ results });
  } catch (error) {
    console.error('RSVP search failed', error);
    return NextResponse.json(
      { error: 'Unable to search invitations right now.' },
      { status: 500 },
    );
  }
}
