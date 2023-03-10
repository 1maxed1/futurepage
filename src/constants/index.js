import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

//Navigate on the page
export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "Über uns",
  },
  {
    id: "projects",
    title: "Projekte",
  },
  {
    id: "news",
    title: "Neues",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Title",
    content: "Some content",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Title",
    content: "Some content",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Title",
    content: "Some content",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "RECHTLICHES",
    links: [
      {
        id: "imprint",
        name: "Impressum",
      },
      //Same like HLG
      {
        id: "data",
        name: "Datenschutz",
      },
    ],
  },
  {
    title: "Navigation",
    links: [
      {
        id: "home",
        name: "Home",
      },
      {
        id: "projects",
        name: "Projekte",
      },
      {
        id: "news",
        name: "Neues",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Unser Partner",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    //Paste in the instagram link
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    //Paste in the Facebook link
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    //Paste in the twitter link
    link: "https://www.twitter.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
