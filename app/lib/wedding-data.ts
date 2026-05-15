// ============================================================
// WEDDING SITE CONTENT — Edit this file to update your site
// ============================================================

export const wedding = {
  couple: {
    partner1: {
      name: 'Jane',        // First name
      fullName: 'Jane Smith',
    },
    partner2: {
      name: 'John',
      fullName: 'John Doe',
    },
    // Path to couple photo in /public/images/
    heroPhoto: '/images/couple-hero.jpg',
    engagementPhoto: '/images/couple-engagement.jpg',
  },

  event: {
    date: 'October 18, 2025',          // Display date
    dateISO: '2025-10-18',             // Machine-readable date
    time: '4:00 PM',
    timezone: 'EST',
    venue: {
      name: 'The Grand Manor',
      address: '123 Elm Street',
      city: 'Hartford',
      state: 'CT',
      zip: '06101',
      googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Manor+Hartford+CT',
    },
  },

  dressCode: {
    style: 'Black Tie Optional',       // e.g. Black Tie, Cocktail, Semi-Formal, Garden Party
    description:
      'We invite you to dress in your finest. Suggested attire for guests includes formal gowns or cocktail dresses, and suits or tuxedos. Please avoid wearing white or ivory.',
    colorPalette: ['Navy', 'Burgundy', 'Emerald', 'Blush', 'Black', 'Gold'],
  },

  itinerary: [
    { time: '3:30 PM', event: 'Guest Arrival & Seating' },
    { time: '4:00 PM', event: 'Ceremony Begins' },
    { time: '4:45 PM', event: 'Cocktail Hour' },
    { time: '6:00 PM', event: 'Reception Doors Open' },
    { time: '6:30 PM', event: 'Dinner Service' },
    { time: '8:00 PM', event: 'First Dance & Toasts' },
    { time: '8:30 PM', event: 'Dancing & Celebration' },
    { time: '11:00 PM', event: 'Send-Off' },
  ],

  registry: [
    {
      store: 'Crate & Barrel',
      url: 'https://www.crateandbarrel.com/gift-registry/',
      logo: '/images/registry-cb.png',  // optional
    },
    {
      store: 'Williams Sonoma',
      url: 'https://www.williams-sonoma.com/registry/',
      logo: '/images/registry-ws.png',  // optional
    },
    {
      store: 'Amazon',
      url: 'https://www.amazon.com/wedding/',
      logo: '/images/registry-amazon.png', // optional
    },
  ],

  weddingParty: [
    // Repeat this block for each member
    {
      name: 'Emily Carter',
      role: 'Maid of Honor',
      photo: '/images/party/emily.jpg',
      relation: "Jane's sister",
    },
    {
      name: 'Sarah Lee',
      role: 'Bridesmaid',
      photo: '/images/party/sarah.jpg',
      relation: "Jane's college roommate",
    },
    {
      name: 'Michael Doe',
      role: 'Best Man',
      photo: '/images/party/michael.jpg',
      relation: "John's brother",
    },
    {
      name: 'Chris Park',
      role: 'Groomsman',
      photo: '/images/party/chris.jpg',
      relation: "John's childhood friend",
    },
  ],

  accommodations: [
    {
      name: 'The Hartford Marriott Downtown',
      distance: '0.5 miles from venue',
      address: '200 Columbus Blvd, Hartford, CT 06103',
      phone: '(860) 249-8000',
      url: 'https://www.marriott.com/hotels/travel/bdldt-hartford-marriott-downtown/',
      notes: 'Use code SMITH-DOE for a room block discount (available until Sept 15)',
      priceRange: '$189–$229/night',
    },
    {
      name: 'Hilton Hartford',
      distance: '0.8 miles from venue',
      address: '315 Trumbull St, Hartford, CT 06103',
      phone: '(860) 728-5151',
      url: 'https://www.hilton.com/en/hotels/bdlhhhf-hilton-hartford/',
      notes: 'Free shuttle to venue available on wedding day',
      priceRange: '$169–$209/night',
    },
    {
      name: 'Residence Inn Hartford Downtown',
      distance: '1.2 miles from venue',
      address: '942 Main St, Hartford, CT 06103',
      phone: '(860) 524-5550',
      url: 'https://www.marriott.com/hotels/travel/bdlri-residence-inn-hartford-downtown/',
      notes: 'Suites available, great for families',
      priceRange: '$159–$199/night',
    },
  ],

  directions: [
    {
      from: 'New York City',
      distance: '115 miles',
      duration: '2 hrs',
      steps: 'Take I-95 N to I-91 N toward Hartford. Take Exit 29A onto Trumbull St. Follow signs to venue.',
    },
    {
      from: 'Boston',
      distance: '100 miles',
      duration: '1 hr 45 min',
      steps: 'Take I-90 W (Mass Pike) to I-84 W toward Hartford. Take Exit 44 onto Ann Uccello St, then follow signs to venue.',
    },
    {
      from: 'Providence, RI',
      distance: '75 miles',
      duration: '1 hr 15 min',
      steps: 'Take I-95 S to I-395 N, then I-44 W to Hartford. Merge onto I-91 N and take Exit 29A.',
    },
    {
      from: 'Bradley International Airport (BDL)',
      distance: '14 miles',
      duration: '20 min',
      steps: 'Take CT-20 W to I-91 S toward Hartford. Take Exit 33 and follow signs downtown to the venue.',
    },
  ],

  attractions: [
    {
      name: 'Mark Twain House & Museum',
      category: 'Culture',
      description: 'Tour the stunning Victorian home where Samuel Clemens wrote his greatest works.',
      url: 'https://marktwainhouse.org',
      distance: '2 miles',
    },
    {
      name: 'Bushnell Park',
      category: 'Outdoors',
      description: "America's oldest publicly funded park, perfect for a morning stroll.",
      url: 'https://bushnellpark.org',
      distance: '0.3 miles',
    },
    {
      name: 'Wadsworth Atheneum',
      category: 'Culture',
      description: "America's oldest public art museum with an impressive permanent collection.",
      url: 'https://thewadsworth.org',
      distance: '0.5 miles',
    },
    {
      name: 'The Connecticut Science Center',
      category: 'Family',
      description: 'Interactive exhibits spanning science, tech, and natural history.',
      url: 'https://ctsciencecenter.org',
      distance: '0.4 miles',
    },
    {
      name: 'Infinity Music Hall',
      category: 'Entertainment',
      description: 'Catch a live show at this beloved intimate concert venue.',
      url: 'https://infinitymusichall.com',
      distance: '1 mile',
    },
    {
      name: 'New England Air Museum',
      category: 'Family',
      description: 'Explore a massive collection of historic aircraft near Bradley Airport.',
      url: 'https://neam.org',
      distance: '12 miles',
    },
  ],

  rsvp: {
    // Set to true to enable RSVP form (requires backend/API setup)
    enabled: false,
    deadline: 'September 1, 2025',
    // If using a third-party RSVP service like Zola or The Knot, put the URL here
    externalUrl: '',
  },
};
