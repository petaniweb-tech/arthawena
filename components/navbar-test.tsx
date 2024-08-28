"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Components //
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropdownNavItem from "./dropdown-navitem";

// Import Icons //
import {
  HamburgerMenuIcon,
  Cross2Icon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/img-logo.png";

function NavbarTest() {
  // Navbar Links //
  const navLinks = [
    {
      text: "ABOUT US",
      path: "/about-us",
      subMenus: [
        {
          text: "ARTHAWENA AT GLANCE",
          path: "/about-us/arthwena-at-glance",
        },
        {
          text: "CERTIFICATION",
          path: "/about-us/certification",
        },
      ],
    },
    {
      text: "OUR BUSINESS",
      path: "/our-business",
      subMenus: [
        {
          text: "OUR PRODUCT",
          path: "/our-business/our-product",
        },
        {
          text: "TECHNOLOGY",
          path: "/our-business/technology",
        },
      ],
    },
    {
      text: "CAREERS",
      path: "/careers",
      subMenus: [
        {
          text: "CULTURE",
          path: "/careers/culture",
        },
        {
          text: "JOIN US",
          path: "/careers/join-us",
        },
      ],
    },
    {
      text: "SUSTAINABILITY",
      path: "/sustainability",
      subMenus: [
        {
          text: "ARTHAWENA FOR SUSTAINABILITY",
          path: "/sustainability/arthawena-for-sustainability",
        },
        {
          text: "ARTHAWENA 2030 GOALS",
          path: "/sustainability/arthawena-2030-goals",
        },
        {
          text: "CSR PROGRAMS",
          path: "/sustainability/csr-programs",
        },
      ],
    },
    {
      text: "CONTACT",
      path: "/contact",
      subMenus: [],
    },
  ];

  // Navbar Mobile View //
  const [isOpen, setOpen] = useState(false);

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  // Navbar Toggle //
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Close menu when navigating //
  const closeMenu = () => {
    setOpen(false);
  };

  // Dropdown Handlers
  const handleMouseEnter = (index: number) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };

  interface NavItemProps {
    text: string;
    path: string;
  }
  const NavItem = ({ text, path }: NavItemProps) => {
    return (
      <Link href={path} onClick={closeMenu}>
        {text}
      </Link>
    );
  };

  return (
    <>
      {/* <-- ==== Navbar Mobile Start ==== --> */}
      <nav className="fixed block w-full z-[100] lg:hidden">
        <div className="flex items-center justify-between w-full py-6 bg-white px-content-padding-sm">
          <Link href="/">
            <Image
              src={logo}
              alt="Arthawena Logo"
              priority={true}
              className="w-auto h-10"
            />
          </Link>

          <div
            onClick={toggleMenu}
            className="relative flex items-center justify-center w-fit h-fit"
          >
            <HamburgerMenuIcon
              className={`w-[34px] h-[34px] text-primary transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "transform scale-0 opacity-0"
                  : "transform scale-100 opacity-100"
              }`}
            />

            <Cross2Icon
              className={`w-[34px] h-[34px] text-primary transition-transform duration-300 ease-in-out absolute ${
                isOpen
                  ? "transform scale-100 opacity-100"
                  : "transform scale-0 opacity-0"
              }`}
            />
          </div>
        </div>
      </nav>

      {/* <-- ==== Navbar Open Start ==== --> */}
      <div
        className={`fixed w-full h-screen z-[90] lg:hidden
            ${
              isOpen
                ? "top-0 left-0 transition-all duration-500 ease-in-out"
                : "-top-full left-0 -translate-y-16 transition-all duration-500 ease-in-out"
            }`}
      >
        <div className="flex flex-col items-start justify-start w-full h-full pb-24 bg-white px-content-padding-sm pt-36">
          <h1 className="text-2xl text-charcoal">Navbar open</h1>
        </div>
      </div>
      {/* <-- ==== Navbar Open End ==== --> */}
      {/* <-- ==== Navbar Mobile End ==== --> */}

      {/* <-- ==== Navbar Desktop Start ==== --> */}
      <nav className="hidden lg:flex fixed items-center justify-between z-40 w-full py-[22px] bg-white px-content-padding-lg 2xl:px-content-padding-2xl">
        <Link href="/">
          <Image
            src={logo}
            alt="Arthawena Logo"
            priority={true}
            className="w-auto h-[42px]"
          />
        </Link>

        {/* <-- === Navbar Links Start === --> */}
        <div className="flex items-center justify-center gap-6 text-[13px] font-medium tracking-wide text-charcoal">
          {navLinks.map((navItem, index) =>
            navItem.subMenus.length > 0 ? (
              <DropdownNavItem
                key={index}
                text={navItem.text}
                path={navItem.path}
                subMenus={navItem.subMenus}
                isOpen={dropdownIndex === index}
                handleMouseEnter={() => handleMouseEnter(index)}
                handleMouseLeave={handleMouseLeave}
              />
            ) : (
              <div className="hover:text-primary duration-300">
                <NavItem key={index} text={navItem.text} path={navItem.path} />
              </div>
            )
          )}
        </div>
        {/* <-- === Navbar Links End === --> */}
      </nav>
      {/* <-- ==== Navbar Desktop End ==== --> */}
    </>
  );
}

export default NavbarTest;
