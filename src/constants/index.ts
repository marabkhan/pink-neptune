import first from '../assets/first.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

import type { imageItem } from '~/types';

export const contactPeople = [
  {
    id: "0",
    type: "board",
    name: "Name",
    email: "email",
  },
  {
    id: "1",
    type: "director",
    name: "Name",
    title: "Position",
    email: "Email",
  },
  {
    id: "2",
    type: "director",
    name: "Name",
    title: "Position",
    email: "Email",
  },
  {
    id: "3",
    type: "committee",
    title: "title",
    email: "email",
  },
  {
    id: "4",
    type: "committee",
    title: "title",
    email: "email",
  },
  {
    id: "5",
    type: "currentMember",
    title: "title",
    email: "email",
  },
  {
    id: "6",
    type: "currentMember",
    title: "Member(s):",
    members:
      "name 1, name 2, name 3,.",
  },
];

export const contactUs = [
"contact us "];

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