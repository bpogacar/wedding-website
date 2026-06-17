export const rsvpConfig = {
  deadline: 'August 1, 2027',
  deadlineISO: '2027-08-01',
  mealOptions: [
    { value: 'herb-roasted-chicken', label: 'Herb Roasted Chicken' },
    { value: 'atlantic-salmon', label: 'Atlantic Salmon' },
    { value: 'filet-mignon', label: 'Filet Mignon' },
    { value: 'seasonal-vegetarian', label: 'Seasonal Vegetarian' },
  ],
  copy: {
    eyebrow: 'RSVP',
    title: 'We hope you can celebrate with us',
    intro:
      'Search for your name to find your invitation, then respond for each guest in your household.',
    searchPlaceholder: 'Start typing a guest or household name',
    noResults: 'No matching invitations found. Please check the spelling and try again.',
    success: 'Thank you. Your RSVP has been saved.',
  },
} as const;

export type MealOptionValue = (typeof rsvpConfig.mealOptions)[number]['value'];
