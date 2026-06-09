// ============================================================
// WEDDING SITE CONTENT — Edit this file to update your site
// ============================================================

export const wedding = {
  couple: {
    partner1: {
      name: 'Kristy',        // First name
      fullName: 'Kristy Lok',
    },
    partner2: {
      name: 'Benjamin',
      fullName: 'Benjamin Pogacar',
    },
    // Path to couple photo in /public/images/
    heroPhoto: '/images/couple-hero.jpg',
    engagementPhoto: '/images/couple-engagement.jpg',
  },

  event: {
    date: 'September 4th, 2027',          // Display date
    dateISO: '2027-09-04',             // Machine-readable date
    time: '6:00 PM',
    timezone: 'EST',
    venue: {
      name: 'Atlantic Resort at Wyndham Newport Hotel',
      address: '240 Aquidneck Ave',
      city: 'Middletown',
      state: 'RI',
      zip: '02842',
      googleMapsUrl: 'https://www.google.com/maps/place/Wyndham+Newport+Hotel/@41.4970755,-71.2844049,817m/data=!3m2!1e3!4b1!4m9!3m8!1s0x89e5a8cc36051107:0x6679ec65fbb9707b!5m2!4m1!1i2!8m2!3d41.4970755!4d-71.2844049!16s%2Fg%2F11c6qr16b7?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
    },
  },

  dressCode: {
    style: 'Formal',       // e.g. Black Tie, Cocktail, Semi-Formal, Garden Party
    description:
      'We invite you to dress in your finest. Suggested attire for guests includes long dresses or formal cocktail dresses, and suits + ties/bowties. Please avoid wearing white or ivory.',
    colorPalette: ['Navy', 'Black', 'Blue', 'Tan', 'Grey'],
  },

  itinerary: [
    { time: '5:30 PM', event: 'Guest Arrival & Seating' },
    { time: '6:00 PM', event: 'Ceremony Begins' },
    { time: '6:30 PM', event: 'Cocktail Hour' },
    { time: '7:30 PM', event: 'Reception Doors Open' },
    { time: '8:00 PM', event: 'Dinner Service' },
    { time: '8:30 PM', event: 'First Dance & Toasts' },
    { time: '9:00 PM', event: 'Dancing & Celebration' },
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
      name: 'Kara Moran',
      role: 'Maid of Honor',
      photo: '/images/party/kara.jpg',
      relation: "Kristy's childhood friend",
    },
    {
      name: 'Jillian Pogacar',
      role: 'Bridesmaid',
      photo: '/images/party/jillian.jpg',
      relation: "Benjamin's sister",
    },
    {
      name: 'Kira Gousios',
      role: 'Bridesmaid',
      photo: '/images/party/kira.jpg',
      relation: "Jacob's partner",
    },
    {
      name: 'Victoria Duarte',
      role: 'Bridesmaid',
      photo: '/images/party/victoria.jpg',
      relation: "Kristy's childhood friend",
    },
    {
      name: 'Sree Dasari',
      role: 'Bridesmaid',
      photo: '/images/party/sree.jpg',
      relation: "Kristy's highschool friend",
    },
    {
      name: 'Tiffany Lok',
      role: 'Bridesmaid',
      photo: '/images/party/tiffany.jpg',
      relation: "Kristy's cousin",
    },
    {
      name: 'Kathryn Grupp',
      role: 'Bridesmaid',
      photo: '/images/party/kathryn.jpg',
      relation: "Kristy's highschool friend",
    },
    {
      name: 'Bella MacDonald',
      role: 'Bridesmaid',
      photo: '/images/party/bella.jpg',
      relation: "Benjamin's sister",
    },
    {
      name: 'Jacob Pogacar',
      role: 'Best Man',
      photo: '/images/party/jacob.jpg',
      relation: "Ben's brother",
    },
    {
      name: 'William Allen',
      role: 'Groomsman',
      photo: '/images/party/liam.jpg',
      relation: "Ben's cousin",
    },
    {
      name: 'Edmund Lok',
      role: 'Groomsman',
      photo: '/images/party/ed.jpg',
      relation: "Kristy's brother",
    },
    {
      name: 'Timothy Bowes',
      role: 'Groomsman',
      photo: '/images/party/tim.jpg',
      relation: "Ben's childhood friend",
    },
    {
      name: 'Julian Bowes',
      role: 'Groomsman',
      photo: '/images/party/julian.jpg',
      relation: "Ben's childhood friend",
    },
    {
      name: 'Cortlandt Meyerson',
      role: 'Groomsman',
      photo: '/images/party/cort.jpg',
      relation: "Ben's childhood friend",
    },
  ],

  accommodations: [
    {
      name: 'Atlantic Resort at Wyndham Newport Hotel',
      distance: '0.0 miles from venue',
      address: '240 Aquidneck Ave, Middletown, RI 02842',
      phone: '(401) 236-2020',
      url: 'https://www.wyndhamhotels.com/wyndham/middletown-rhode-island/wyndham-newport-hotel/overview?CID=LC:46q62bu8edfbx3y:45280&iata=00093796',
      notes: 'Use code LOK-POGACAR for a room block discount (available until July 21st)',
      priceRange: '$300-$600/night',
    },
    {
      name: 'Atlantic Beach Hotel Newport',
      distance: '0.6 miles from venue',
      address: '28 Aquidneck Ave, Middletown, RI 02842',
      phone: '(401) 847-5330',
      url: 'https://www.atlanticbeachhotelri.com/',
      notes: 'Walkable to venue, close by',
      priceRange: '$200-$700/night',
    },
    {
      name: 'Island House Newport',
      distance: '1.8 miles from venue',
      address: '37 Memorial Blvd, Newport, RI 02840',
      phone: '(401) 365-1843',
      url: 'https://islandhousenewport.com/',
      notes: 'Transportation to venue not provided',
      priceRange: '$150-$500/night',
    },
  ],

  directions: [
    {
      from: 'Rhode Island T.F. Green International Airport',
      distance: '30 miles',
      duration: '45 mins',
      steps: 'Take I-95S until RI-4S, then take RI-138E until Admiral Kalbfus Rd.',
    },
    {
      from: 'Boston',
      distance: '70 miles',
      duration: '1 hr 30 min',
      steps: 'Take I-93 S to MA-24 S. Take Exit 1 towards Middletown/Newport, then take RI-138 until Aquidneck Ave.',
    },
    {
      from: 'Providence, RI',
      distance: '36 miles',
      duration: '50 mins',
      steps: 'Take I-95S until RI-4S, then take RI-138E until Admiral Kalbfus Rd.',
    },
    {
      from: 'Hartford, CT',
      distance: '88 miles',
      duration: '2 hrs',
      steps: 'Take CT-2 E to I-395 N towards Providence. Follow along CT/RI state highways eastbound until RI-4 S. Then take RI-138E until Admiral Kalbfus Rd.',
    },
  ],

  attractions: [
    {
      name: 'The Newport Mansions',
      category: 'Culture',
      description: 'Take a unique trip through 250 years of American history, architecture, art and landscape design.',
      url: 'https://www.newportmansions.org/',
      distance: '2.7 miles',
    },
    {
      name: 'Newport Cliff Walk',
      category: 'Outdoors',
      description: "3.5-mile Cliff Walk along Newport coastline, with stunning views of the water and walkby of Newport Mansions.",
      url: 'https://www.discovernewport.org/things-to-do/cliff-walk/',
      distance: '1.4 miles',
    },
    {
      name: 'The International Tennis Hall of Fame',
      category: 'Culture',
      description: "Experience world-class tennis, walk the historic grounds, explore the award-winning museum, and attend iconic events.",
      url: 'https://www.tennisfame.com/',
      distance: '2.0 miles',
    },
    {
      name: 'Thames Street',
      category: 'Family',
      description: 'Downtown Newport, great for shopping or grabbing a bite to eat.',
      url: 'https://www.visitrhodeisland.com/things-to-do/trip-ideas-getaways/village-experiences-shops/thames-street-newport/',
      distance: '2.4 miles',
    },
    {
      name: "O'Brien's Pub",
      category: 'Food',
      description: 'Grab a drink at the bar or sit down for a meal with the family.',
      url: 'https://www.theobrienspub.net/',
      distance: '2.7 miles',
    },
    {
      name: 'First Beach (Easton Beach)',
      category: 'Family',
      description: 'Nice beach to take a swim or relax in the sun.',
      url: 'https://www.discovernewport.org/listing/eastons-beach-(first-beach)/318/',
      distance: '0.9 miles',
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
