import { discordBlack, facebook, instagram, twitter } from "../assets";

import {
  flyer1,
  flyer2,
  flyer3,
  flyer4,
  flyer5,
  flyer6,
} from "~/assets/index.js";

import {
  IMG_146,
  IMG_1023,
  IMG_3103,
  IMG_3123,
  IMG_3132,
  IMG_3413,
  IMG_3913,
  IMG_4912,
  IMG_4913,
  Wax0,
  wax1,
  wax2,
} from "~/assets/index.js";

export const contact = [
  {
    email: "wmtechnosociety@gmail.com",
    instagramHandle: "wmtechno",
    instagramUrl: `https://instagram.com/wmtechno`,
  },
];

export const contactUsBii = ["contact us "];

export const pages = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Events",
    url: "/events",
  },
  {
    id: "2",
    title: "Images",
    url: "/images",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact",
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    icon: instagram,
    url: "",
  },
  {
    id: "1",
    title: "Twitter",
    icon: twitter,
    url: "",
  },
  {
    id: "2",
    title: "Facebook",
    icon: facebook,
    url: "/images",
  },
  {
    id: "3",
    title: "Contact",
    icon: discordBlack,
    url: "/contact",
  },
];

export const images = [
  { src: IMG_146, alt: "Description of IMG_146" },
  { src: IMG_1023, alt: "Description of IMG_1023" },
  { src: IMG_3103, alt: "Description of IMG_3103" },
  { src: IMG_3123, alt: "Description of IMG_3123" },
  { src: IMG_3132, alt: "Description of IMG_3132" },
  { src: IMG_3413, alt: "Description of IMG_3413" },
  { src: IMG_3913, alt: "Description of IMG_3913" },
  { src: IMG_4912, alt: "Description of IMG_4912" },
  { src: IMG_4913, alt: "Description of IMG_4913" },
  { src: Wax0, alt: "Description of Wax0" },
  { src: wax1, alt: "Description of Wax1" },
  { src: wax2, alt: "Description of Wax2" },
];

export const logo = [{ src: "", alt: "logo" }];

export const previousEventFlyers = [
  {
    src: flyer1,
    alt: "Flyer 1",
    title: "Event 1",
    description: "Description of Event 1",
  },
  {
    src: flyer2,
    alt: "Flyer 2",
    title: "Event 2",
    description: "Description of Event 2",
  },
  {
    src: flyer3,
    alt: "Flyer 3",
    title: "Event 3",
    description: "Description of Event 3",
  },
  {
    src: flyer4,
    alt: "Flyer 4",
    title: "Event 4",
    description: "Description of Event 4",
  },
  {
    src: flyer5,
    alt: "Flyer 5",
    title: "Event 5",
    description: "Description of Event 5",
  },
  {
    src: flyer6,
    alt: "Flyer 6",
    title: "Event 6",
    description: "Description of Event 6",
  },
];

export const missionStatement = `
  Our goal is to cultivate a community centered around the creation of shared experiences in and
  around Williamsburg, Virginia. We aim to foster collaboration, creativity, and connection among 
  electronic music artists and listeners alike

  `;


  
  export const nextEvent = {
    title: "Event Title",
    description: "Description of the event goes here.",
    location: "Main Hall",
    date: "December 5, 2024",
    image: flyer1 as ImageMetadata,
  };
  