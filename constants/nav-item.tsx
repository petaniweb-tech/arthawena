import { NavItemType } from "../types/nav-item-type";

export const NAV_ITEMS: NavItemType[] = [
  {
    title: "ABOUT US",
    path: "#",
    submenu: true,
    subMenuItems: [
      {
        title: "ARTHAWENA AT GLANCE",
        path: "/about-us/arthawena-at-glance",
      },
      {
        title: "CERTIFICATION",
        path: "/about-us/certification",
      },
    ],
  },
  {
    title: "OUR BUSINESS",
    path: "#",
    submenu: true,
    subMenuItems: [
      {
        title: "OUR PRODUCT",
        path: "/our-business/our-product",
      },
      {
        title: "TECHNOLOGY",
        path: "/our-business/technology",
      },
    ],
  },
  {
    title: "CAREERS",
    path: "#",
    submenu: true,
    subMenuItems: [
      {
        title: "CULTURE",
        path: "/careers/culture",
      },
      {
        title: "JOIN US",
        path: "/careers/join-us",
      },
    ],
  },
  {
    title: "SUSTAINABILITY",
    path: "#",
    submenu: true,
    subMenuItems: [
      {
        title: "ARTHAWENA FOR SUSTAINABILITY",
        path: "/sustainability/arthawena-for-sustainability",
      },
      {
        title: "ARTHAWENA 2030 GOALS",
        path: "/sustainability/arthawena-2030-goals",
      },
      {
        title: "CSR PROGRAMS",
        path: "/sustainability/csr-programs",
      },
    ],
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
];
