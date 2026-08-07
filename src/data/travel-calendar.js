/**
 * Where Ebuka is, on a schedule.
 *
 * Each entry means: from `from` (inclusive) until the next entry's `from`, the
 * city is where I am. Keep the list sorted by date, oldest first — add a new
 * entry every time a trip is booked and the board takes care of itself.
 *
 * Coming home is just another entry (`{ city: 'Dublin', from: ... }`).
 *
 * Dates are `YYYY-MM-DD` and compared in UTC so the server render and the
 * browser always agree on which entry is current.
 *
 * City names render on a split-flap board that only knows A–Z and spaces —
 * no accents, digits, or punctuation.
 */
export const TRAVEL_CALENDAR = [
  { city: 'Dublin', from: '2026-05-01' },
  { city: 'Paris', from: '2026-07-20' },
  { city: 'London', from: '2026-25-07' },
  { city: 'Manchester', from: '2026-08-10' },
  { city: 'Copenhagen', from: '2026-08-17' },
  { city: 'Dublin', from: '2026-08-29' },
  { city: 'Stockholm', from: '2026-09-06' },
];

function today() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Resolve the calendar against a date (defaults to now).
 * Returns `{ previous, current, next }` — city strings, or null when the
 * calendar doesn't reach that far in either direction.
 */
export function getTravelStatus(date = today()) {
  if (TRAVEL_CALENDAR.length === 0) {
    return { previous: null, current: null, next: null };
  }

  // Last entry that has already started; before the calendar begins, sit on the
  // first entry so the board still shows something sensible.
  let index = 0;
  for (let i = 0; i < TRAVEL_CALENDAR.length; i++) {
    if (TRAVEL_CALENDAR[i].from <= date) index = i;
  }

  return {
    previous: TRAVEL_CALENDAR[index - 1]?.city ?? null,
    current: TRAVEL_CALENDAR[index].city,
    next: TRAVEL_CALENDAR[index + 1]?.city ?? null,
  };
}
