CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS rsvp_households (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name text NOT NULL,
  party_size integer,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS rsvp_guests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  household_id uuid NOT NULL REFERENCES rsvp_households(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS rsvp_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_id uuid NOT NULL REFERENCES rsvp_guests(id) ON DELETE CASCADE,
  attending boolean NOT NULL,
  entree text,
  note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT rsvp_responses_one_current_response UNIQUE (guest_id),
  CONSTRAINT rsvp_responses_entree_when_attending CHECK (
    (attending = true AND entree IS NOT NULL)
    OR (attending = false AND entree IS NULL)
  )
);

CREATE INDEX IF NOT EXISTS rsvp_guests_household_id_idx ON rsvp_guests(household_id);
CREATE INDEX IF NOT EXISTS rsvp_guests_full_name_idx ON rsvp_guests(full_name);
CREATE INDEX IF NOT EXISTS rsvp_households_display_name_idx ON rsvp_households(display_name);
