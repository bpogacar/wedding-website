import { NextResponse } from 'next/server';

import {
  getHouseholdDetails,
  upsertRsvpResponses,
  validateSubmission,
  type RsvpSubmission,
} from '@/app/lib/rsvp';

export const runtime = 'nodejs';

type RawResponse = {
  guestId?: unknown;
  attending?: unknown;
  entree?: unknown;
  note?: unknown;
};

function parseSubmission(body: unknown): RsvpSubmission | null {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const candidate = body as { householdId?: unknown; responses?: unknown };

  if (typeof candidate.householdId !== 'string' || !Array.isArray(candidate.responses)) {
    return null;
  }

  return {
    householdId: candidate.householdId,
    responses: candidate.responses.map((response: RawResponse) => ({
      guestId: typeof response.guestId === 'string' ? response.guestId : '',
      attending: typeof response.attending === 'boolean' ? response.attending : null,
      entree: typeof response.entree === 'string' ? response.entree : null,
      note: typeof response.note === 'string' ? response.note : null,
    })),
  };
}

export async function POST(request: Request) {
  let submission: RsvpSubmission | null = null;

  try {
    submission = parseSubmission(await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid RSVP payload.' }, { status: 400 });
  }

  if (!submission) {
    return NextResponse.json({ error: 'Invalid RSVP payload.' }, { status: 400 });
  }

  try {
    const household = await getHouseholdDetails(submission.householdId);

    if (!household) {
      return NextResponse.json({ error: 'Household not found.' }, { status: 404 });
    }

    const errors = validateSubmission(submission, household);

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    await upsertRsvpResponses(submission);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('RSVP submit failed', error);
    return NextResponse.json(
      { error: 'Unable to save your RSVP right now.' },
      { status: 500 },
    );
  }
}
