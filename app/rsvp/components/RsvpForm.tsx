'use client';

import { FormEvent, useMemo, useState } from 'react';

import { rsvpConfig, type MealOptionValue } from '@/app/lib/rsvp-config';

type SearchResult = {
  id: string;
  displayName: string;
  partySize: number;
  matchedGuestName: string | null;
};

type HouseholdGuest = {
  id: string;
  fullName: string;
  attending: boolean | null;
  entree: MealOptionValue | null;
  note: string | null;
};

type Household = {
  id: string;
  displayName: string;
  guests: HouseholdGuest[];
};

type GuestResponse = {
  guestId: string;
  attending: boolean | null;
  entree: string;
  note: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function RsvpForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [household, setHousehold] = useState<Household | null>(null);
  const [responses, setResponses] = useState<Record<string, GuestResponse>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const orderedResponses = useMemo(() => {
    if (!household) {
      return [];
    }

    return household.guests.map((guest) => responses[guest.id]);
  }, [household, responses]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setMessage('Enter a name to search for your invitation.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');
    setHousehold(null);

    const response = await fetch(`/api/rsvp/search?q=${encodeURIComponent(trimmedQuery)}`);
    const data = await response.json();

    if (!response.ok) {
      setStatus('error');
      setMessage(data.error ?? 'Unable to search invitations right now.');
      return;
    }

    setResults(data.results ?? []);
    setStatus('idle');

    if ((data.results ?? []).length === 0) {
      setMessage(rsvpConfig.copy.noResults);
    }
  }

  async function loadHousehold(id: string) {
    setStatus('loading');
    setMessage('');

    const response = await fetch(`/api/rsvp/household/${id}`);
    const data = await response.json();

    if (!response.ok) {
      setStatus('error');
      setMessage(data.error ?? 'Unable to load this invitation.');
      return;
    }

    const loadedHousehold = data.household as Household;
    const initialResponses = loadedHousehold.guests.reduce<Record<string, GuestResponse>>(
      (accumulator, guest) => {
        accumulator[guest.id] = {
          guestId: guest.id,
          attending: guest.attending,
          entree: guest.entree ?? '',
          note: guest.note ?? '',
        };
        return accumulator;
      },
      {},
    );

    setHousehold(loadedHousehold);
    setResponses(initialResponses);
    setResults([]);
    setStatus('idle');
  }

  function updateResponse(guestId: string, patch: Partial<GuestResponse>) {
    setResponses((current) => {
      const existing = current[guestId];
      const next = {
        ...existing,
        ...patch,
      };

      if (patch.attending === false) {
        next.entree = '';
      }

      return {
        ...current,
        [guestId]: next,
      };
    });
  }

  function validateClient() {
    if (!household) {
      return 'Choose your invitation before submitting.';
    }

    for (const guest of household.guests) {
      const response = responses[guest.id];

      if (!response || typeof response.attending !== 'boolean') {
        return `Please choose yes or no for ${guest.fullName}.`;
      }

      if (response.attending && !response.entree) {
        return `Please choose an entree for ${guest.fullName}.`;
      }
    }

    return '';
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationMessage = validateClient();

    if (validationMessage) {
      setStatus('error');
      setMessage(validationMessage);
      return;
    }

    setStatus('loading');
    setMessage('');

    const response = await fetch('/api/rsvp/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        householdId: household?.id,
        responses: orderedResponses.map((guestResponse) => ({
          guestId: guestResponse.guestId,
          attending: guestResponse.attending,
          entree: guestResponse.attending ? guestResponse.entree : null,
          note: guestResponse.note,
        })),
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      setStatus('error');
      setMessage(data.errors?.join(' ') ?? data.error ?? 'Unable to save your RSVP.');
      return;
    }

    setStatus('success');
    setMessage(rsvpConfig.copy.success);
  }

  const isLoading = status === 'loading';

  return (
    <div className="rounded-md border border-gold-300/60 bg-ivory-50 p-5 shadow-sm md:p-8">
      <form onSubmit={handleSearch} className="space-y-4">
        <label className="block text-xs uppercase tracking-[0.16em] text-sage-800" htmlFor="rsvp-search">
          Find Your Invitation
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="rsvp-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={rsvpConfig.copy.searchPlaceholder}
            className="min-h-12 flex-1 rounded border border-sage-200 bg-white px-4 text-base text-charcoal outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="min-h-12 rounded bg-sage-600 px-6 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-sage-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Search
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <div className="mt-5 space-y-2">
          {results.map((result) => (
            <button
              key={result.id}
              type="button"
              onClick={() => loadHousehold(result.id)}
              className="block w-full rounded border border-ivory-300 bg-white p-4 text-left transition hover:border-gold-400 hover:bg-ivory-100"
            >
              <span className="block font-display text-xl text-charcoal">{result.displayName}</span>
              <span className="mt-1 block text-sm text-charcoal/70">
                {result.partySize} {result.partySize === 1 ? 'guest' : 'guests'}
                {result.matchedGuestName ? ` · matched ${result.matchedGuestName}` : ''}
              </span>
            </button>
          ))}
        </div>
      )}

      {household && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-gold-600">Invitation</p>
            <h2 className="font-display text-3xl text-charcoal">{household.displayName}</h2>
          </div>

          <div className="space-y-4">
            {household.guests.map((guest) => {
              const response = responses[guest.id];
              const attending = response?.attending;

              return (
                <div key={guest.id} className="rounded border border-sage-200 bg-white p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-charcoal">{guest.fullName}</h3>
                      <div className="mt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={() => updateResponse(guest.id, { attending: true })}
                          className={`rounded border px-4 py-2 text-sm transition ${
                            attending === true
                              ? 'border-sage-600 bg-sage-600 text-white'
                              : 'border-sage-200 bg-ivory-50 text-charcoal hover:border-sage-400'
                          }`}
                        >
                          Attending
                        </button>
                        <button
                          type="button"
                          onClick={() => updateResponse(guest.id, { attending: false })}
                          className={`rounded border px-4 py-2 text-sm transition ${
                            attending === false
                              ? 'border-charcoal bg-charcoal text-white'
                              : 'border-sage-200 bg-ivory-50 text-charcoal hover:border-sage-400'
                          }`}
                        >
                          Declines
                        </button>
                      </div>
                    </div>

                    <div className="w-full md:max-w-xs">
                      <label
                        className="block text-xs uppercase tracking-[0.16em] text-sage-800"
                        htmlFor={`entree-${guest.id}`}
                      >
                        Entree
                      </label>
                      <select
                        id={`entree-${guest.id}`}
                        value={response?.entree ?? ''}
                        onChange={(event) => updateResponse(guest.id, { entree: event.target.value })}
                        disabled={attending !== true}
                        className="mt-2 min-h-11 w-full rounded border border-sage-200 bg-ivory-50 px-3 text-sm text-charcoal outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select one</option>
                        {rsvpConfig.mealOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <label
                    className="mt-4 block text-xs uppercase tracking-[0.16em] text-sage-800"
                    htmlFor={`note-${guest.id}`}
                  >
                    Note
                  </label>
                  <textarea
                    id={`note-${guest.id}`}
                    value={response?.note ?? ''}
                    onChange={(event) => updateResponse(guest.id, { note: event.target.value })}
                    rows={2}
                    className="mt-2 w-full rounded border border-sage-200 bg-ivory-50 px-3 py-2 text-sm text-charcoal outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="min-h-12 w-full rounded bg-gold-500 px-6 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Save RSVP
          </button>
        </form>
      )}

      {message && (
        <p
          className={`mt-5 rounded border px-4 py-3 text-sm ${
            status === 'success'
              ? 'border-sage-200 bg-sage-200/30 text-sage-800'
              : 'border-blush-300 bg-blush-100 text-charcoal'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
