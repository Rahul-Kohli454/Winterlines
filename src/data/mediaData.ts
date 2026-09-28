export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'standard';
  price: number;
  originalPrice?: number;
  tagline: string;
  capacity: string;
  bedType: string;
  images: string[];
  features: string[];
  popular?: boolean;
}

export interface Adventure {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  distance?: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  price?: number;
  description: string;
  highlights: string[];
  image: string;
  color: string;
}

export interface TrekPhoto {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  category: 'all' | 'gear' | 'trail' | 'camp' | 'views' | 'orchard';
  categoryLabel: string;
  description: string;
}

export interface TrekStep {
  number: string;
  title: string;
  stageName: string;
  duration: string;
  altitude: string;
  description: string;
  howWeDoIt: string[];
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'rooms' | 'treks' | 'camping' | 'scenic' | 'food';
  description?: string;
}

export const HOST_INFO = {
  name: 'Homestay Winter Line',
  legalName: 'Homestay Winter Line Dhanaulti',
  hostName: 'Rahul Kohli',
  contactNumber: '6398634291',
  internationalPhone: '+916398634291',
  email: 'rahulkohlirahulkohli79@gmail.com',
  location: 'Dhanaulti, Uttarakhand 249180, India',
  googleMapsUrl: 'https://maps.google.com/?q=Dhanaulti+Uttarakhand',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  altitude: '2,286 meters (7,500 ft)',
  bestSeason: 'Year-Round (Winter Line: Oct - Feb, Snow: Dec - Feb, Summer: Mar - Jun)',
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Himalayan View Room',
    category: 'deluxe',
    price: 2500,
    originalPrice: 3200,
    tagline: 'Expansive corner windows framing Dhanaulti mist & pine valleys',
    capacity: '2 - 3 Guests',
    bedType: 'King Size Comfort Bed',
    popular: true,
    images: [
      './media/winterline-54.jpg', // WhatsApp Image 2026-09-18 at 09.48.28.jpeg
      './media/winterline-41.jpg', // WhatsApp Image 2026-09-18 at 09.48.20.jpeg
      './media/winterline-01.jpg', // WhatsApp Image 2026-09-18 at 09.47.50.jpeg
      './media/winterline-28.jpg', // WhatsApp Image 2026-09-18 at 09.48.11 (2).jpeg (dining / view)
    ],
    features: [
      'Panoramic Mountain Valley View from window',
      'King-size bed with orthopedic mattress & warm duvets',
      'Attached modern bathroom with 24/7 hot water geyser',
      'Access to sunset observation deck & glass dining hall',
      'High-speed complimentary Wi-Fi',
      'Pahadi hot masala chai upon arrival',
      'Room service for hot homestyle meals',
      'Electric kettle & charging stations'
    ]
  },
  {
    id: 'normal-room',
    name: 'Standard Cozy Mountain Room',
    category: 'standard',
    price: 2000,
    originalPrice: 2600,
    tagline: 'Warm wooden aesthetic crafted for mountain peace & trekkers',
    capacity: '2 Guests',
    bedType: 'Queen Double Bed',
    popular: false,
    images: [
      './media/winterline-55.jpg', // WhatsApp Image 2026-09-18 at 09.48.29 (1).jpeg
      './media/winterline-17.jpg', // WhatsApp Image 2026-09-18 at 09.48.03.jpeg
      './media/winterline-06.jpg', // WhatsApp Image 2026-09-18 at 09.47.52.jpeg
      './media/winterline-27.jpg', // WhatsApp Image 2026-09-18 at 09.48.11.jpeg
    ],
    features: [
      'Cozy wooden headboard & peaceful mountain ambiance',
      'Plush double bedding with extra thermal blankets',
      'Private attached bathroom with instant hot water',
      'Direct walk-out to common scenic balcony',
      'High-speed Wi-Fi',
      'Fresh spring-water drinking supply',
      'Authentic Ghar-ka-khana dining service'
    ]
  }
];

export const ADVENTURES: Adventure[] = [
  {
    id: 'top-tibba-trek',
    title: 'Top Tibba Alpine Ridge Trek',
    subtitle: '8 Kilometer Himalayan Ridge & Oak Forest Expedition',
    badge: '8 KM ROUND-TRIP',
    distance: '8 km',
    duration: '4 - 5 Hours',
    difficulty: 'Moderate',
    color: 'from-amber-600/30 to-amber-950/60',
    image: './media/new-trek-03.jpg', // Rahul Kohli leading trek on ridge
    description: 'A signature Dhanaulti trek scaling the ancient forest trails of Top Tibba. Ascend past tall deodar, oak, and wild rhododendron canopies to reach an open alpine ridge boasting unobstructed 360-degree views of Himalayan snow peaks.',
    highlights: [
      'Guided trail with local Himalayan mountain leader Rahul Kohli',
      'Unmatched panoramic view of Garhwal Himalayan range',
      'Enchanting deodar & oak forest shade trails',
      'Energy snacks, fresh mountain water & packed trail lunch available',
      'Perfect for photography, bird watching & pristine solitude'
    ]
  },
  {
    id: 'night-camping',
    title: 'Starlit Mountain Cliff Camping',
    subtitle: 'Sleep Beneath the Himalayan Milky Way & Roaring Bonfire',
    badge: 'UNDER THE STARS',
    duration: 'Overnight Experience',
    difficulty: 'Easy',
    color: 'from-indigo-600/30 to-slate-950/60',
    image: './media/new-trek-05.jpg', // Quechua tents on ridge cliff with trekking group
    description: 'Pitch genuine high-grade Quechua dome tents atop the mountain ridge overlooking the twinkling valley lights. Cozy up around a crackling wood campfire with acoustic mountain tunes and hot pahadi dinner.',
    highlights: [
      'Weather-resistant Quechua waterproof dome tents',
      'High-altitude thermal sleeping bags & insulated foam mattresses',
      'Warm wood campfire under zero-pollution starry galaxy',
      'Delicious Pahadi dinner & morning sunrise tea with breakfast',
      'Safe, guided campsite with on-ground host assistance'
    ]
  },
  {
    id: 'river-night-camping',
    title: 'River Night Camping & Downhill Trek',
    subtitle: '4 KM Descent into the Untouched River Valley & Riverside Camp',
    badge: '4 KM DOWN TREK',
    distance: '4 km descent',
    duration: 'Overnight Adventure',
    difficulty: 'Moderate',
    color: 'from-emerald-600/30 to-teal-950/60',
    image: './media/winterline-71.jpg', // Trek group & suspension bridge
    description: 'An unforgettable wilderness descent: hike 4 kilometers down into the secluded Dhanaulti river canyon. Camp right on the banks of a babbling glacial mountain stream with the symphony of rushing water lulling you to sleep.',
    highlights: [
      'Scenic 4km guided downhill nature trek through river gorges',
      'Riverside tent camping beside crystal-clear mountain streams',
      'Evening riverbank bonfire & barbecue experience',
      'Dip in natural crystal rock pools during sunny mornings',
      'Full equipment support, guides, and porter coordination'
    ]
  }
];

export const TREK_STEPS: TrekStep[] = [
  {
    number: '01',
    title: 'Basecamp Assembly & Gear Check',
    stageName: 'Homestay Winter Line Base • 7,500 Ft',
    duration: '45 mins prep',
    altitude: '2,286 m (7,500 ft)',
    description: 'Before setting out, host Rahul Kohli personally inspects trekking boots, fits expedition rucksacks, checks safety harnesses, and distributes lightweight hiking poles and hydration packs.',
    howWeDoIt: [
      'Personal rucksack weight balancing and gear distribution',
      'Trek briefing covering trail gradient, resting stones & safety protocols',
      'Pahadi herbal warm tea & trail energy dry fruits handed out'
    ],
    image: './media/new-trek-01.jpg',
    badge: 'STAGE 1: PREPARATION'
  },
  {
    number: '02',
    title: 'Guided Oak & Deodar Forest Ascent',
    stageName: 'The Top Tibba Mountain Trail',
    duration: '2 - 2.5 Hours',
    altitude: '2,286 m to 2,600 m',
    description: 'Set foot onto peaceful mountain pathways shaded by towering Himalayan deodars and wild oaks. Rahul maintains a steady, rhythmic pace comfortable for beginners and seasoned hikers alike.',
    howWeDoIt: [
      'Gentle pacing with regular breath-catching stops at natural viewpoints',
      'Fresh natural mountain spring water pitstops along shaded trails',
      'Plucking organic wild apples from hillside orchard slopes along the path'
    ],
    image: './media/new-trek-03.jpg',
    badge: 'STAGE 2: THE ASCENT'
  },
  {
    number: '03',
    title: 'Ridge Summit & Quechua Camp Setup',
    stageName: 'High Mountain Ridge Plateau',
    duration: '1 Hour Setup',
    altitude: '2,750 m (9,000+ ft)',
    description: 'Emerge onto the high alpine ridge with unobstructed 360-degree views of Bandarpunch and Swargarohini peaks. Together we pitch authentic waterproof Quechua dome tents and lay thermal insulation.',
    howWeDoIt: [
      'Hands-on pitching of all-weather Quechua double-layer dome tents',
      'Securing high-altitude wind guy lines and ground anchors',
      'Unrolling sub-zero sleeping bags and plush thermal ground mats'
    ],
    image: './media/new-trek-05.jpg',
    badge: 'STAGE 3: CAMP SETUP'
  },
  {
    number: '04',
    title: 'Winter Line Sunset & Starlit Bonfire',
    stageName: 'Front-Row Horizon Twilight',
    duration: 'Evening to Midnight',
    altitude: 'Ridge Campsite',
    description: 'At dusk, watch the legendary Winter Line paint the horizon in fiery amber and violet. As crisp mountain night descends, gather around a roaring wood bonfire for hot Pahadi dinner and stargazing.',
    howWeDoIt: [
      'Unobstructed front-row seat to the rare Dhanaulti Winter Line sunset band',
      'Campfire with fragrant mountain cedar logs to keep everyone warm',
      'Steaming hot Ghar-ka-khana (dal, mountain subzi, rotis) served under the Milky Way'
    ],
    image: './media/new-trek-12.jpg',
    badge: 'STAGE 4: NIGHT CAMP'
  },
  {
    number: '05',
    title: 'River Canyon Descent (4 KM Down)',
    stageName: 'Glacial Stream Valley Floor',
    duration: 'Overnight / Half Day',
    altitude: 'Downhill Gorge Trail',
    description: 'For wilderness lovers seeking water expeditions, descend 4 kilometers into the untouched Dhanaulti river valley to camp beside crystal glacial rock pools and babbling streams.',
    howWeDoIt: [
      'Guided 4 km canyon trail descending through hidden mountain ravines',
      'Riverside tent pitching directly on smooth pebble riverbanks',
      'Morning dip in fresh crystal rock pools and riverbank tea brewing'
    ],
    image: './media/new-trek-06.jpg',
    badge: 'STAGE 5: RIVER VALLEY'
  }
];

export const TREK_PHOTOS: TrekPhoto[] = [
  {
    id: 'trek-01',
    url: './media/new-trek-01.jpg',
    title: 'Expedition Rucksacks & Stone Trail',
    subtitle: 'Basecamp Preparation',
    category: 'gear',
    categoryLabel: 'Basecamp & Gear',
    description: 'Fully packed trekking rucksacks and mountain poles resting on the ancient stone paths of Homestay Winter Line before morning departure.'
  },
  {
    id: 'trek-02',
    url: './media/new-trek-02.jpg',
    title: 'Himalayan Ridge Pathway',
    subtitle: 'Top Tibba Trail Contour',
    category: 'trail',
    categoryLabel: 'Forest Trails',
    description: 'The winding mountain pathway leading up towards Top Tibba, framed by deodar ridges and cool mountain air.'
  },
  {
    id: 'trek-03',
    url: './media/new-trek-03.jpg',
    title: 'Host Rahul Kohli Leading The Ascent',
    subtitle: 'Native Mountain Guide',
    category: 'trail',
    categoryLabel: 'Forest Trails',
    description: 'Rahul Kohli personally leading the trekking group along the high alpine ridge during golden hour with complete gear and safety equipment.'
  },
  {
    id: 'trek-04',
    url: './media/new-trek-04.jpg',
    title: 'Rustic Stone Cottage & Quechua Base',
    subtitle: 'Pahadi Village Camping',
    category: 'camp',
    categoryLabel: 'Camping & Tents',
    description: 'Weatherproof Quechua dome tent pitched beside an authentic Garhwali stone cottage in the tranquil Dhanaulti hills.'
  },
  {
    id: 'trek-05',
    url: './media/new-trek-05.jpg',
    title: 'Ridge Cliff Campsite & Trekkers',
    subtitle: 'Panoramic Mountain Camp',
    category: 'camp',
    categoryLabel: 'Camping & Tents',
    description: 'Trekkers gathered outside high-altitude dome tents pitched right on the mountain ridge overlooking rolling clouds and deep valley lights.'
  },
  {
    id: 'trek-06',
    url: './media/new-trek-06.jpg',
    title: 'Alpine Forest Ridges & Vistas',
    subtitle: 'Himalayan Landscape',
    category: 'views',
    categoryLabel: 'Panoramic Views',
    description: 'Sweeping vistas of layered pine forests, terraced hillside villages, and snow-kissed peaks of the Garhwal range.'
  },
  {
    id: 'trek-07',
    url: './media/new-trek-07.jpg',
    title: 'Ancient Deodar Forest Walk',
    subtitle: 'Shaded Pine Canopies',
    category: 'trail',
    categoryLabel: 'Forest Trails',
    description: 'Hikers navigating through centuries-old deodars and wild oak woods with sunbeams piercing through emerald green leaves.'
  },
  {
    id: 'trek-08',
    url: './media/new-trek-08.jpg',
    title: 'Meadow Tents by Mountain Hamlets',
    subtitle: 'Village Peace & Solitude',
    category: 'camp',
    categoryLabel: 'Camping & Tents',
    description: 'Dome tents pitched in an alpine meadow surrounded by ancient slate-roofed cottages offering total tranquility.'
  },
  {
    id: 'trek-09',
    url: './media/new-trek-09.jpg',
    title: 'Sunlit Forest Path to the Summit',
    subtitle: 'Paced Elevation Gain',
    category: 'trail',
    categoryLabel: 'Forest Trails',
    description: 'Shaded stone and pine needle trail with gentle slopes, safe and enjoyable for both beginner trekkers and families.'
  },
  {
    id: 'trek-10',
    url: './media/new-trek-10.jpg',
    title: 'Guided Group Along Mountain Slopes',
    subtitle: 'Safe Wayfinding',
    category: 'trail',
    categoryLabel: 'Forest Trails',
    description: 'Trek group moving steadily along the forested contours under the attentive guidance of native Dhanaulti mountaineers.'
  },
  {
    id: 'trek-11',
    url: './media/new-trek-11.jpg',
    title: 'High Altitude Valley Lookout',
    subtitle: 'Mid-Trek Scenic Halt',
    category: 'views',
    categoryLabel: 'Panoramic Views',
    description: 'Resting point midway through the ridge trek with endless views across the valleys leading down toward Mussoorie and Dehradun.'
  },
  {
    id: 'trek-12',
    url: './media/new-trek-12.jpg',
    title: 'Dusk Overlook from Cliffside Tent',
    subtitle: 'Front-Row Winter Line Horizon',
    category: 'camp',
    categoryLabel: 'Camping & Tents',
    description: 'Watching the sunset fade into deep amber and violet twilight directly from inside the Quechua tent, preparing for the night campfire.'
  },
  {
    id: 'trek-13',
    url: './media/new-trek-13.jpg',
    title: 'Summit Crest Viewpoint',
    subtitle: 'Top Tibba 360° Panorama',
    category: 'views',
    categoryLabel: 'Panoramic Views',
    description: 'The exhilarating high point of the 8km Top Tibba trek where trekkers celebrate panoramic vistas of the Great Himalayan arc.'
  },
  {
    id: 'trek-14',
    url: './media/new-trek-14.jpg',
    title: 'Fresh Mountain Apple Harvest',
    subtitle: 'Organic Trail Bounty',
    category: 'orchard',
    categoryLabel: 'Trail Orchard',
    description: 'Crisp organic red apples plucked fresh from traditional hillside orchards along the mountain trekking route.'
  },
  {
    id: 'trek-15',
    url: './media/new-trek-15.jpg',
    title: 'Crisp Hillside Orchard Harvest',
    subtitle: 'Pure Dhanaulti Apples',
    category: 'orchard',
    categoryLabel: 'Trail Orchard',
    description: 'Sharing freshly picked, sweet and crunchy mountain apples straight from high-altitude trees during our trail hydration stop.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', url: './media/winterline-81.jpg', title: 'Mountain Cliff Quechua Camping', category: 'camping', description: 'Tents pitched on the Dhanaulti ridge under open blue skies' },
  { id: '2', url: './media/winterline-84.jpg', title: 'Top Tibba Pine & Oak Trail', category: 'treks', description: 'Trekkers making their way up the 8km Top Tibba forest path' },
  { id: '3', url: './media/winterline-71.jpg', title: 'Expedition Team & Suspension Bridge', category: 'treks', description: 'Adventure group geared with harnesses for alpine rope bridges' },
  { id: '4', url: './media/winterline-54.jpg', title: 'Deluxe Room Valley Window', category: 'rooms', description: 'King size bedding with breathtaking Dhanaulti morning views' },
  { id: '5', url: './media/winterline-28.jpg', title: 'Panoramic Dining Glasshouse', category: 'scenic', description: 'Floor-to-ceiling glass dining overlooking the terraced hills' },
  { id: '6', url: './media/winterline-44.jpg', title: 'Fresh Mountain Apple Harvest', category: 'food', description: 'Crisp organic apples plucked right from surrounding orchards' },
  { id: '7', url: './media/winterline-45.jpg', title: 'Authentic Hot Pahadi Thali', category: 'food', description: 'Home-cooked dal, fresh subzi, chutney, and steaming rotis' },
  { id: '8', url: './media/winterline-49.jpg', title: 'Morning Tea on Balcony', category: 'scenic', description: 'Hot chai with a view of endless green Himalayan ranges' },
  { id: '9', url: './media/winterline-41.jpg', title: 'Deluxe Suite Marble Bedframe', category: 'rooms', description: 'Spotless linen, private bath, and warm mountain comfort' },
  { id: '10', url: './media/winterline-79.jpg', title: 'Sunset Glow through Deodars', category: 'scenic', description: 'The famous amber and crimson horizon dusk of Dhanaulti' },
  { id: '11', url: './media/winterline-88.jpg', title: 'Family Tent in Mountain Village', category: 'camping', description: 'Peaceful campsite by ancient Garhwali stone cottages' },
  { id: '12', url: './media/winterline-82.jpg', title: 'Eco Park Group Gathering', category: 'treks', description: 'Large trekking and student groups hosted with safety' }
];

export const WINTER_LINE_FACTS = [
  {
    title: 'A Rare Global Phenomenon',
    desc: 'The Winter Line is an atmospheric illusion visible from only two known regions worldwide: parts of Switzerland and the Dhanaulti-Mussoorie ridge in Uttarakhand.'
  },
  {
    title: 'The Magic Horizon Band',
    desc: 'At dusk between October and February, dust particles and cold air layers refract sunlight into a sharp, straight, multi-colored band of fiery amber, crimson, and violet.'
  },
  {
    title: 'Front-Row Balcony Seat',
    desc: 'Homestay Winter Line is situated at an unobstructed elevation of 2,286m, giving you front-row sunset views without the tourist rush.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Aakash Verma',
    city: 'Delhi NCR',
    comment: 'The 8km Top Tibba trek guided by Rahul was unforgettable! We also stayed in the deluxe room for ₹2500 and the valley view at sunrise with hot chai was pure bliss. Must visit!',
    rating: 5,
    tag: 'Top Tibba Trek & Deluxe Room'
  },
  {
    name: 'Priyanka & Saurabh',
    city: 'Chandigarh',
    comment: 'River night camping was the highlight of our Uttarakhand road trip! Trekking 4km down into the valley and sleeping beside the sound of water was surreal. Rahul bhaiya made delicious dinner.',
    rating: 5,
    tag: 'River Night Camping'
  },
  {
    name: 'Vikram Negi',
    city: 'Dehradun',
    comment: 'Real authentic pahadi hospitality. Very clean rooms, piping hot geyser water in freezing weather, and watching the Winter Line sunset right from the glass dining area. 10/10.',
    rating: 5,
    tag: 'Winter Line Sunset & Stay'
  }
];

