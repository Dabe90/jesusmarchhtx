export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/therec", label: "The Rec" },
  { href: "/programs", label: "Programs" },
  { href: "/getinvolved", label: "Get Involved" },
  { href: "/vision", label: "Vision" },
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
    cta: "Join us in this incredible move of God, and check out videos and pictures of what He is doing through His people.",
    images: ["/images/dc-1.jpg", "/images/dc-2.jpg", "/images/dc-3.jpg", "/images/dc-4.jpg"],
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
    cta: "Join us in this powerful move of God and be part of history.",
    images: ["/images/houston-3.jpg", "/images/dc-2.jpg", "/images/houston-4.jpg"],
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
    images: ["/images/card-partners.jpg", "/images/houston-1.jpg", "/images/dc-4.jpg"],
    href: "/jmnigeria",
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
