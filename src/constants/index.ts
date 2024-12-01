

import type { imageItem } from "~/types";


import {
  discordBlack,
  facebook,
  instagram,
  twitter,
} from "../assets";

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
    members: "name 1, name 2, name 3,.",
  },
];

export const contactUs = ["contact us "];

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
