-- Replace this sample data with the real invitation list before production use.
-- Keep guest list seed files server-side and do not import them into app code.

WITH household AS (
  INSERT INTO rsvp_households (display_name, party_size, notes)
  VALUES ('Example Household', 2, 'Sample RSVP seed data')
  RETURNING id
)
INSERT INTO rsvp_guests (household_id, full_name, sort_order)
SELECT household.id, guest.full_name, guest.sort_order
FROM household
CROSS JOIN (
  VALUES
    ('Example Guest One', 1),
    ('Example Guest Two', 2)
) AS guest(full_name, sort_order);
