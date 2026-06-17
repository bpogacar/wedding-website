import 'server-only';

import { getSql } from './db';
import { rsvpConfig, type MealOptionValue } from './rsvp-config';

export type HouseholdSearchResult = {
  id: string;
  displayName: string;
  partySize: number;
  matchedGuestName: string | null;
};

export type HouseholdGuest = {
  id: string;
  fullName: string;
  attending: boolean | null;
  entree: MealOptionValue | null;
  note: string | null;
};

export type HouseholdDetails = {
  id: string;
  displayName: string;
  guests: HouseholdGuest[];
};

export type RsvpSubmission = {
  householdId: string;
  responses: {
    guestId: string;
    attending: boolean | null;
    entree: string | null;
    note?: string | null;
  }[];
};

type HouseholdSearchRow = {
  id: string;
  display_name: string;
  party_size: number | string | null;
  matched_guest_name: string | null;
};

type HouseholdGuestRow = {
  household_id: string;
  display_name: string;
  guest_id: string;
  full_name: string;
  attending: boolean | null;
  entree: string | null;
  note: string | null;
};

const mealOptionValues = new Set<string>(rsvpConfig.mealOptions.map((option) => option.value));

export function normalizeSearchQuery(query: string) {
  return query.trim().replace(/\s+/g, ' ');
}

export function isMealOption(value: string): value is MealOptionValue {
  return mealOptionValues.has(value);
}

export async function searchHouseholds(query: string): Promise<HouseholdSearchResult[]> {
  const normalizedQuery = normalizeSearchQuery(query);

  if (!normalizedQuery) {
    return [];
  }

  const sql = getSql();
  const rows = (await sql.query(
    `
      SELECT
        h.id::text,
        h.display_name,
        COALESCE(h.party_size, COUNT(g.id)) AS party_size,
        MIN(g.full_name) FILTER (WHERE g.full_name ILIKE $1) AS matched_guest_name
      FROM rsvp_households h
      JOIN rsvp_guests g ON g.household_id = h.id
      WHERE h.display_name ILIKE $1 OR g.full_name ILIKE $1
      GROUP BY h.id, h.display_name, h.party_size
      ORDER BY h.display_name ASC
      LIMIT 8
    `,
    [`%${normalizedQuery}%`],
  )) as HouseholdSearchRow[];

  return rows.map((row) => ({
    id: row.id,
    displayName: row.display_name,
    partySize: Number(row.party_size ?? 0),
    matchedGuestName: row.matched_guest_name,
  }));
}

export async function getHouseholdDetails(householdId: string): Promise<HouseholdDetails | null> {
  const sql = getSql();
  const rows = (await sql.query(
    `
      SELECT
        h.id::text AS household_id,
        h.display_name,
        g.id::text AS guest_id,
        g.full_name,
        rr.attending,
        rr.entree,
        rr.note
      FROM rsvp_households h
      JOIN rsvp_guests g ON g.household_id = h.id
      LEFT JOIN rsvp_responses rr ON rr.guest_id = g.id
      WHERE h.id = $1
      ORDER BY g.sort_order ASC, g.full_name ASC
    `,
    [householdId],
  )) as HouseholdGuestRow[];

  if (rows.length === 0) {
    return null;
  }

  return {
    id: rows[0].household_id,
    displayName: rows[0].display_name,
    guests: rows.map((row) => ({
      id: row.guest_id,
      fullName: row.full_name,
      attending: row.attending,
      entree: row.entree && isMealOption(row.entree) ? row.entree : null,
      note: row.note,
    })),
  };
}

export function validateSubmission(
  submission: RsvpSubmission,
  household: HouseholdDetails,
): string[] {
  const errors: string[] = [];
  const householdGuestIds = new Set(household.guests.map((guest) => guest.id));
  const submittedGuestIds = new Set<string>();

  if (submission.householdId !== household.id) {
    errors.push('Household does not match this invitation.');
  }

  for (const response of submission.responses) {
    if (!householdGuestIds.has(response.guestId)) {
      errors.push('Submitted guests must belong to the selected household.');
      continue;
    }

    if (submittedGuestIds.has(response.guestId)) {
      errors.push('Each guest may only have one response.');
    }

    submittedGuestIds.add(response.guestId);

    if (typeof response.attending !== 'boolean') {
      errors.push('Attendance is required for each guest.');
      continue;
    }

    if (response.attending && (!response.entree || !isMealOption(response.entree))) {
      errors.push('Each attending guest must choose an entree.');
    }
  }

  for (const guestId of Array.from(householdGuestIds)) {
    if (!submittedGuestIds.has(guestId)) {
      errors.push('Attendance is required for each guest.');
    }
  }

  return Array.from(new Set(errors));
}

export async function upsertRsvpResponses(submission: RsvpSubmission) {
  const sql = getSql();

  await sql.transaction((tx) =>
    submission.responses.map((response) =>
      tx.query(
        `
          INSERT INTO rsvp_responses (guest_id, attending, entree, note)
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (guest_id)
          DO UPDATE SET
            attending = EXCLUDED.attending,
            entree = EXCLUDED.entree,
            note = EXCLUDED.note,
            updated_at = now()
        `,
        [
          response.guestId,
          response.attending,
          response.attending ? response.entree : null,
          response.note?.trim() || null,
        ],
      ),
    ),
  );
}
