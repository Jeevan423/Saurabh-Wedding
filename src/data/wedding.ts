// Central wedding configuration. Edit these to personalize the invitation.
import { FaSpa, FaHandHoldingHeart, FaMusic, FaRing, FaGlassCheers, FaHeart } from "react-icons/fa";

export const wedding = {
  bride: {
    name: "Vaishnavi",
    fullName: "Vaishnavi Dattatray Homkar",
    parents: "Daughter of Mrs. Rohini & Mr. Dattatray Vasantrav Homkar",
    about:
      "A grace-filled soul with a love for Marathi music, art and warm gatherings. She lights up every room she enters.",
  },
  groom: {
    name: "Saurabh",
    fullName: "Saurabh Kailas Gangavane",
    parents: "Son of Mrs. Pratiksha & Mr. Kailas Sriram Gangavane",
    about:
      "A gentle dreamer who cherishes tradition, family and quiet mornings by the temple. Kind, devoted and steadfast.",
  },
  hashtag: "#SaurabhWedsVaishnavi",
  // Wedding date used for the countdown.
  date: "2026-07-09T13:21:00+05:30",
  dateLabel: "9th July 2026",
  city: "Pandharpur, Solapur",
  venue: {
    name: "Santraj Mangal Karyalay",
    address: "Opposite Bullet Showroom, Isbavi, Tal. Pandharpur, Dist. Solapur",
    mapsQuery: "Santraj+Mangal+Karyalay+Pandharpur",
    mapsEmbed:
      "https://www.google.com/maps?q=Santraj+Mangal+Karyalay+Pandharpur&output=embed",
  },
  contact: {
    phone: "+919000000000",
    whatsapp: "919000000000",
  },
};

export const events = [
  {
    name: "Mehendi",
    icon: FaHandHoldingHeart,
    date: "7th July 2026",
    time: "4:00 PM",
    venue: "Residence, Tal. Sinnar, Dist. Nashik",
    desc: "Intricate henna, laughter, and joyous celebrations with the womenfolk.",
  },
  {
    name: "Engagement",
    icon: FaRing,
    date: "8th July 2026",
    time: "9:00 AM",
    venue: "Santraj Mangal Karyalay, Pandharpur",
    desc: "Exchanging rings and promising a lifetime of love and togetherness.",
  },
  {
    name: "Haldi",
    icon: FaSpa,
    date: "8th July 2026",
    time: "10:30 AM",
    venue: "Santraj Mangal Karyalay, Pandharpur",
    desc: "A golden turmeric ceremony blessing the couple with joy and radiance.",
  },
  {
    name: "Shubh Vivah Sohala",
    icon: FaHeart,
    date: "9th July 2026",
    time: "1:21 PM",
    venue: "Santraj Mangal Karyalay, Pandharpur",
    desc: "The sacred antarpat drops as two souls become one in the holy land of Lord Vitthal-Rukmini.",
  }
];

export const loveStory = [
  {
    title: "First Meeting",
    year: "2021",
    text: "A chance darshan at the Vitthal temple in Pandharpur — two strangers, one shared prayer.",
  },
  {
    title: "Friendship",
    year: "2022",
    text: "Long walks by the Chandrabhaga, endless conversations, and a friendship that felt like home.",
  },
  {
    title: "The Proposal",
    year: "2024",
    text: "Under a sky full of diyas during Kartiki Ekadashi, a question was asked and a heart said yes.",
  },
  {
    title: "Engagement",
    year: "2025",
    text: "Two families united in blessings, laughter and the sweetness of pedhe.",
  },
  {
    title: "The Wedding",
    year: "2026",
    text: "And now, with your blessings, forever begins.",
  },
];

export const nav = [
  { label: "Home", id: "home" },
  { label: "Couple", id: "couple" },
  { label: "Invitation", id: "invitation" },
  { label: "Events", id: "events" },
  { label: "Venue", id: "venue" },
];

export const families = {
  bride: {
    side: "Bride's Family",
    house: "Homkar Parivar",
    members: [
      { name: "Sau. Rohini & Shri. Dattatray Vasantrav Homkar", relation: "Parents" },
      { name: "Isbavi, Tal. Pandharpur, Dist. Solapur", relation: "Residence" },
    ],
  },
  groom: {
    side: "Groom's Family",
    house: "Gangavane Parivar",
    members: [
      { name: "Sau. Pratibha & Shri. Kailas Sriram Gangavane", relation: "Parents" },
      { name: "Tal. Sinnar, Dist. Nashik", relation: "Residence" },
    ],
  },
};
