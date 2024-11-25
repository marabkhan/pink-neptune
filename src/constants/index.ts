import first from '../assets/first.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

import type { imageItem } from '~/types';

export const contactPeople = [
  {
    id: "0",
    type: "board",
    name: "Board of Directors",
    email: "bod@plfrva.com",
  },
  {
    id: "1",
    type: "director",
    name: "Ryan Bowman",
    title: "President & Director of Events, Sound Lead Manager",
    email: "bowman@plfrva.com",
  },
  {
    id: "2",
    type: "director",
    name: "Kristen Marie",
    title: "Secretary & Director of Performance Arts, Fire Lead Manager",
    email: "kristen@plfrva.com",
  },
  {
    id: "3",
    type: "committee",
    title:
      "For all sound, event, and general entertainment inquiries, please email our Event and Sound Committee at",
    email: "events@plfrva.com",
  },
  {
    id: "4",
    type: "committee",
    title:
      "For all fire spinning, dance, and performance art inquiries, please email our Fire and Performance Art Committee at",
    email: "fire@plfrva.com",
  },
  {
    id: "5",
    type: "currentMember",
    title: "Fire and Performance Art Committee:",
    members: "Kristen Marie, Matthew Sosticky, Ginnie Fae, Steven Warrick.",
  },
  {
    id: "6",
    type: "currentMember",
    title: "Event and Sound Committee:",
    members:
      "Ryan Bowman, Ryan Betancourt, Daniel Burke, Josh Crenshaw, Kat Gavino.",
  },
];

export const contactUs = [
  "Questions about an upcoming event? Want to get involved? Email any of our Directors or BOD@PLFRVA.COM anytime and we will get back to you as soon as we can! Our committees and BOD are growing as we expand to meet the needs of the community. We want to genuinely thank everyone who has supported us, shown us grace and patience, and contributed to the growth of this organization. Our doors are always open.",
];

export const pages = [
  {
    id: "0",
    title: "Home",
    url: "/"
  },
  {
    id: "1",
    title: "Events",
    url: "/events"
  },
  {
    id: "2",
    title: "Images",
    url: "/images"
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact"
  },
];


export const images: imageItem[] = [
  {
    id: "1",
    imgs: image1,
    title: "First Image",
    description: "Description of the first image.",
    dateTime: "12:30",
  },
  {
    id: "2",
    imgs: image2,
    title: "Second Image",
    description: "Description of the second image.",
    dateTime: "1:30",
  },
  {
    id: "3",
    imgs: image3,
    title: "Third Image",
    description: "Description of the third image.",
    dateTime: "2:30",
  },
  {
    id: "4",
    imgs: image4,
    title: "Third Image",
    description: "Description of the third image.",
    dateTime: "2:30",
  },
  {
    id: "5",
    imgs: image5,
    title: "Third Image",
    description: "Description of the third image.",
    dateTime: "2:30",
  },

];