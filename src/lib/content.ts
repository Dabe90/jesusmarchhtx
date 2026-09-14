import { links } from "@/lib/links";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/therec", label: "The Rec" },
  { href: "/programs", label: "Programs" },
  { href: "/getinvolved", label: "Get Involved" },
  { href: "/vision", label: "Vision" },
] as const;

export const homeShortcuts = [
  {
    href: "/gallery",
    title: "Gallery",
    body: "Experience our joy, worship, and God through sights and sounds.",
  },
  {
    href: "/programs",
    title: "Programs",
    body: "Class of David training and The Rec Podcast.",
  },
  {
    href: "/getinvolved",
    title: "Get involved",
    body: "Partner, pray, give, and volunteer with the March.",
  },
  {
    href: "/therec",
    title: "The Rec",
    body: "Reconcile, recreate, and recommit with young people in Houston.",
    featured: true,
  },
] as const;

export const nigeriaCities = [
  "Lagos",
  "Ibadan",
  "Benin",
  "Abuja",
  "Port Harcourt",
] as const;

export const marches = [
  {
    slug: "houston",
    city: "Houston",
    title: "Jesus March Houston",
    kicker: "A movement of faith and revival",
    subtitle:
      "One of the best things to ever happen to Houston started under the conviction of the Holy Spirit.",
    body: [
      "Started under the direction of the Holy Spirit, Jesus March Houston began on November 18, 2023, as a powerful expression of love for our Lord Jesus and a bold declaration of His unfailing love to the world.",
      "This movement is more than just a march; it is a time of worship, intercession, prayer, and evangelism, uniting believers to lift up our city and take spiritual authority over every work of the enemy.",
    ],
    cta: "Join us for the next Jesus March Houston and be part of this incredible move of God. Watch testimonies and see pictures from past events. Let’s stand together in faith and proclaim the name of Jesus over our city.",
    images: [
      "/images/houston-1.jpg",
      "/images/houston-2.jpg",
      "/images/houston-3.jpg",
      "/images/houston-4.jpg",
    ],
  },
  {
    slug: "dc",
    city: "Washington, D.C.",
    title: "Jesus March D.C.",
    kicker: "A nation united in Christ",
    subtitle: "Son, can you go to D.C. to march for me? Yes, Lord.",
    body: [
      "After the incredible success of Jesus March Houston 2023, the Lord gave our leader a new assignment: Go to Washington, DC, and hold a march for Him. We obeyed. The instructions were clear — “Make My name known in DC.”",
      "The date was set for October 19, 2024, the only weekend without a major Christian event in the area — another confirmation that God was leading the way.",
      "Now we have a new challenge: gather one million people to march in DC, lifting up the name of Jesus and praying over our nation. The United States is a shining light on a hill.",
    ],
    cta: "Join us Saturday, October 17, 2026 at Washington Circle in Washington, D.C.",
    images: ["/images/dc-1.jpg", "/images/gallery/g23.jpg", "/images/gallery/g21.jpg"],
  },
  {
    slug: "tulsa",
    city: "Tulsa",
    title: "Jesus March Tulsa",
    kicker: "This city will never be the same again",
    subtitle: "Bringing God’s light to the city",
    body: [
      "In November 2024, the Tulsa City Council invited a priestess to lead the opening prayer, invoking the spirit of the serpent and essentially dedicating the city to darkness.",
      "Many people voiced their discomfort, but the Lord challenged our leader with a question: “Will you just complain, or will you take action?” We chose action.",
      "Thus, Jesus March Tulsa was born — a movement to bring the light of God into the city through worship, prayer, and bold proclamation of the gospel. In December 2024, we held the first Jesus March Tulsa, and this is just the beginning.",
    ],
    cta: "Join us Saturday, September 26, 2026 at 12PM at Tulsa City Hall.",
    images: [
      "/images/gallery/g06.jpg",
      "/images/gallery/g10.jpg",
      "/images/gallery/g13.jpg",
      "/images/gallery/g14.jpg",
    ],
  },
  {
    slug: "nigeria",
    city: "Nigeria",
    title: "Jesus March Nigeria",
    kicker: "A nation ablaze for Christ",
    subtitle: "This is an incredible move for God",
    body: [
      "Returning to the birthplace of the Dear Daughter Bible Study, Jesus March Nigeria has now become a nationwide movement, held every last Saturday in January.",
      "On this day, we take to the streets to share the love of Christ and proclaim His name boldly. In almost every major city, the light of God is breaking through, transforming lives and bringing hope.",
      "This is just the beginning. We are committed to taking the undiluted Word of God to all nations, teaching them to walk in His ways.",
    ],
    cta: "Join us as we march for Jesus, lifting His name high across Nigeria and beyond.",
    images: ["/images/dc-4.jpg", "/images/tulsa-flag-1.png", "/images/tulsa-flag-2.png"],
    href: links.prayerCity,
  },
] as const;

export const volunteerRoles = [
  {
    title: "Prayer partners",
    body: "We believe in the power of prayer. Join the team of prayer warriors who meet virtually to pray for the March, the cities, and the work of the gospel.",
  },
  {
    title: "Lead marchers",
    body: "Can you lead in praise, worship, chants, or the Word? Lead marchers bear the Jesus March flags and banners while the rest of us follow their path and respond to their calls.",
  },
  {
    title: "Welfare guards",
    body: "Do you have a natural care for people? Welfare guards provide assistance and direction to everyone, especially those who need extra help.",
  },
  {
    title: "Media personnel",
    body: "If you do video or photography professionally, serve on the media team. Capture the event and tell a better story through pictures.",
  },
  {
    title: "Medical assistants",
    body: "Are you certified medical personnel? Volunteer to be on the ground for any medical aid while we wait on emergency arrival if needed.",
  },
  {
    title: "Rear marchers",
    body: "Rear marchers stay at the back of the March, making sure no participant is left behind, while also bearing flags and signs.",
  },
  {
    title: "Arrival greeters",
    body: "A lot of people come to the March for the first time. Arrival greeters offer Texas-sized hospitality at the meeting point and give instructions before we begin.",
  },
  {
    title: "Ministry team",
    body: "Born-again, Spirit-filled believers experienced in altar ministry: salvation, sanctification, and the infilling of the Holy Spirit.",
  },
] as const;

export const vendors = [
  { name: "Beach House on the Brazos", phone: "713-261-0010" },
  { name: "Rock Apparel", phone: "713-699-9896" },
  { name: "Cuties by E", phone: "346-252-3469" },
] as const;

export const shirtArt = [
  { title: "Follow Jesus", note: "Best on white", src: "/images/gallery/g30.png" },
  { title: "Jesus Saves", note: "Best on white", src: "/images/gallery/g31.jpg" },
  { title: "King Jesus", note: "Best on white", src: "/images/gallery/g32.jpg" },
  { title: "Jesus Lives", note: "Best on white", src: "/images/gallery/g33.jpg" },
  { title: "Jesus March", note: "Best on black", src: "/images/gallery/g34.jpg" },
  { title: "Jesus Lives", note: "Best on black", src: "/images/gallery/g35.jpg" },
  { title: "Dear Daughter HTX", note: "Print ready", src: "/images/gallery/g36.jpg" },
  { title: "Follow Jesus ALT", note: "Best on black", src: "/images/gallery/g37.jpg" },
  { title: "Jesus Saves ALT", note: "Best on black", src: "/images/gallery/g38.jpg" },
] as const;

export const signs = [
  "Jesus Over Everything",
  "Jesus loves you",
  "You met Jesus",
  "Jesus died for you",
  "Follow Jesus",
  "Jesus the light",
  "King Jesus",
  "Jesus Saves",
  "Jesus is coming",
] as const;

export const dailyBlessings = [
  {
    ref: "Isaiah 61:1",
    verse:
      "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor.",
  },
  {
    ref: "Matthew 5:14",
    verse: "You are the light of the world. A city on a hill cannot be hidden.",
  },
  {
    ref: "Acts 1:8",
    verse:
      "You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
  },
  {
    ref: "Psalm 122:6–7",
    verse: "Pray for the peace of the city. May those who love you be secure. May there be peace within your walls.",
  },
  {
    ref: "2 Chronicles 7:14",
    verse:
      "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven.",
  },
  {
    ref: "John 8:12",
    verse: "I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.",
  },
  {
    ref: "Mark 16:15",
    verse: "Go ye into all the world, and preach the gospel to every creature.",
  },
] as const;

export const houstonPrayer =
  "Father, bless Houston. Fill our streets with worship, our neighborhoods with revival, and every heart with the love of Jesus. Let this city shine with Your light. Amen.";

export const salvationPrayer =
  "Lord Jesus, I believe You died for me and rose again. I turn from sin and receive You as my Savior and Lord. Fill me with Your Holy Spirit, and teach me to walk in Your Word. Amen.";

export const organizer = {
  name: "Dear Daughter Bible Study Group",
  credit: "Jesus March is organized by Dear Daughter Bible Study Group.",
  summary:
    "A Spirit-led, non-denominational Bible study open to men and women of all ages. Young people carrying Scripture — the same Spirit that moved the early church moves us today.",
  body: [
    "Dear Daughter Bible Study Group exists to teach the undiluted Word of God and reach every nation with the gospel of Jesus Christ.",
    "We meet in the Word together: weekly materials and discussion guides, Class of David training for Glory-Carriers, and daily prayer for Houston and the nations.",
    "From this study flow Jesus March, Houston Prayer City, The Rec, and Global 360 Partners. You can request a gathering in your community — and we will come.",
  ],
  verses: [
    { ref: "Psalm 119:11", text: "I have hidden your word in my heart." },
    { ref: "2 Timothy 3:16", text: "All Scripture is God-breathed." },
    { ref: "Colossians 3:16", text: "Let the message of Christ dwell among you." },
  ],
} as const;

export const whatWeDo = [
  {
    title: "Citywide Marches",
    body: "Walking downtown streets, speaking the Word, and taking spiritual authority over depression, addiction, and violence.",
    href: "/gallery",
    image: "/images/houston-1.jpg",
  },
  {
    title: "Dear Daughter Bible Study",
    body: "Weekly Scripture, discussion guides, and discipleship. Young people carrying the Word — the same Spirit that moved the early church moves us today.",
    href: "/chapters",
    image: "/images/houston-2.jpg",
  },
  {
    title: "Global Impact & Global 360",
    body: "Reaching Houston, D.C., and Tulsa, and lifting Jesus high across Nigeria and the nations through prayer and partnership.",
    href: "/getinvolved",
    image: "/images/dc-1.jpg",
  },
] as const;

export const marchStories = [
  {
    slug: "houston",
    city: "Houston",
    summary: "A Holy Spirit movement of worship, prayer, and evangelism in Houston’s streets.",
    video: "/videos/hero.mp4",
    poster: "/images/houston-1.jpg",
    photos: ["/images/houston-1.jpg", "/images/houston-2.jpg", "/images/houston-3.jpg"],
  },
  {
    slug: "dc",
    city: "Washington, D.C.",
    summary: "The Lord said go to D.C. and make His name known — and we obeyed.",
    video: "/videos/dc.mp4",
    poster: "/images/gallery/g23.jpg",
    photos: ["/images/dc-1.jpg", "/images/gallery/g21.jpg", "/images/gallery/g23.jpg"],
  },
  {
    slug: "tulsa",
    city: "Tulsa",
    summary: "When darkness was invited in, we chose action and brought God’s light to the city.",
    poster: "/images/gallery/g06.jpg",
    photos: ["/images/gallery/g06.jpg", "/images/gallery/g10.jpg", "/images/gallery/g13.jpg", "/images/gallery/g14.jpg"],
  },
  {
    slug: "nigeria",
    city: "Nigeria",
    summary: "A nationwide January march from the birthplace of Dear Daughter Bible Study.",
    poster: "/images/tulsa-flag-1.png",
    photos: ["/images/dc-4.jpg", "/images/tulsa-flag-1.png", "/images/tulsa-flag-2.png"],
  },
] as const;

export const volunteerMarchRoles = [
  "Lead Marcher",
  "Rear Marcher",
  "Worship Chants",
] as const;

export const partnerWays = [
  "Monthly Global Prayer Zoom",
  "Outreach & Bible Sponsor Support",
  "Connections and advisory",
] as const;

export const nextPrograms = [
  {
    city: "Tulsa",
    title: "Jesus March Tulsa",
    when: "Saturday, 26 September 2026 · 12PM",
    where: "Tulsa City Hall, Tulsa, Oklahoma",
    href: "/tulsa",
    image: "/images/flyer-tulsa.jpg",
  },
  {
    city: "Washington, D.C.",
    title: "Jesus March Washington DC",
    when: "Saturday, 17 October 2026",
    where: "Washington Circle, Washington D.C.",
    href: "/dc",
    image: "/images/gallery/g23.jpg",
  },
  {
    city: "Nigeria",
    title: "Jesus March Nigeria",
    when: "January 2027 · last Saturday of the month",
    where: "Lagos, Ibadan, Benin, Abuja, Port Harcourt, and more",
    href: links.prayerCity,
    image: "/images/tulsa-flag-1.png",
  },
] as const;

export const tulsaPhotos = [
  "/images/gallery/g06.jpg",
  "/images/gallery/g07.jpg",
  "/images/gallery/g08.jpg",
  "/images/gallery/g09.jpg",
  "/images/gallery/g10.jpg",
  "/images/gallery/g11.jpg",
  "/images/gallery/g12.jpg",
  "/images/gallery/g13.jpg",
  "/images/gallery/g14.jpg",
  "/images/gallery/g42.jpg",
  "/images/gallery/g43.jpg",
  "/images/gallery/g44.jpg",
] as const;

export const tulsaDrivePhotos = [
  "/images/tulsa/d01.jpg",
  "/images/tulsa/d02.jpg",
  "/images/tulsa/d03.jpg",
  "/images/tulsa/d04.jpg",
  "/images/tulsa/d05.jpg",
  "/images/tulsa/d06.jpg",
  "/images/tulsa/d07.jpg",
  "/images/tulsa/d08.jpg",
  "/images/tulsa/d09.jpg",
  "/images/tulsa/d10.jpg",
  "/images/tulsa/d11.jpg",
  "/images/tulsa/d12.jpg",
  "/images/tulsa/d13.jpg",
  "/images/tulsa/d14.jpg",
  "/images/tulsa/d15.jpg",
  "/images/tulsa/d16.jpg",
  "/images/tulsa/d17.jpg",
  "/images/tulsa/d18.jpg",
  "/images/tulsa/d19.jpg",
  "/images/tulsa/d20.jpg",
  "/images/tulsa/d21.jpg",
  "/images/tulsa/d22.jpg",
  "/images/tulsa/d23.jpg",
] as const;

export const dcPhotos = [
  "/images/dc-1.jpg",
  "/images/dc-2.jpg",
  "/images/dc-3.jpg",
  "/images/gallery/g16.jpg",
  "/images/gallery/g17.jpg",
  "/images/gallery/g18.jpg",
  "/images/gallery/g19.jpg",
  "/images/gallery/g21.jpg",
  "/images/gallery/g22.jpg",
  "/images/gallery/g23.jpg",
] as const;

export const dcJoinWays = [
  "I will march with you",
  "Lead Marcher",
  "Rear Marcher",
  "Worship Chants",
  "Prayer Partner",
  "I am bringing a group",
  "I will watch and pray online",
] as const;

export const tulsaJoinWays = [
  "I will march with you",
  "Lead Marcher",
  "Rear Marcher",
  "Worship Chants",
  "Prayer Partner",
  "I am bringing a group",
  "I will watch and pray online",
] as const;

export const joinRoles = [
  "March participant",
  "Lead marchers",
  "Rear marchers",
  "Prayer partners",
  "Arrival greeters",
  "Welfare guards",
  "Media personnel",
  "Medical assistants",
  "Ministry team",
  "Request a Community Bible Study",
] as const;

export const chapterKinds = [
  "City or state chapter",
  "Campus chapter",
  "Not sure yet",
] as const;
