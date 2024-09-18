"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import Components //
import DropdownNavItem from "../atoms/dropdown-nav-item";
import { NAV_ITEMS } from "@/constants/nav-item";

// Import Icons //
import {
  ChevronDownIcon,
  TriangleRightIcon,
  HamburgerMenuIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/img-logo.png";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const submenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set a threshold for when the background color should appear
      const threshold = 100; // Adjust this value as needed
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu: string | null) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  const handleNavbarToggle = () => {
    if (isOpen) {
      closeMenu(); // Close dropdown when closing the navbar
    } else {
      setOpen(true);
    }
  };

  // Dropdown Desktop Handlers
  const handleMouseEnter = (index: number) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };

  return (
    <>
      {/* <-- ==== Navbar Mobile Start ==== --> */}
      <nav className="fixed top-0 left-0 right-0 w-full z-[100] block lg:hidden">
        <div
          className={cn(
            "flex items-center justify-between w-full py-[22px] z-[90] px-content-padding-sm bg-white transition-all duration-200",
            scrolled ? "bg-opacity-70 backdrop-blur-md" : "bg-opacity-100",
            isOpen && "bg-opacity-100"
          )}
        >
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logo}
              alt="Arthawena Logo"
              priority={true}
              className="w-auto h-10"
            />
          </Link>

          <div
            onClick={handleNavbarToggle}
            className="flex items-center justify-center w-fit h-fit"
          >
            <HamburgerMenuIcon
              className={`w-[34px] h-[34px] text-primary transition-transform duration-500 ease-in-out ${
                isOpen
                  ? "transform scale-0 opacity-0"
                  : "transform scale-100 opacity-100"
              }`}
            />

            <Cross2Icon
              className={`w-[34px] h-[34px] text-primary transition-transform duration-500 ease-in-out absolute ${
                isOpen
                  ? "transform scale-100 opacity-100"
                  : "transform scale-0 opacity-0"
              }`}
            />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-content-padding-sm pt-14 pb-3 space-y-6 h-screen">
            {NAV_ITEMS.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className="flex justify-between items-center w-full text-left text-[17px] text-charcoal font-medium"
                    >
                      <span>{item.title}</span>
                      <ChevronDownIcon
                        className={`text-charcoal h-5 w-5 transition-transform duration-200 ${
                          openMenu === item.title ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    <div
                      ref={(el) => {
                        submenuRefs.current[item.title] = el;
                      }}
                      className={`overflow-hidden transition-[max-height] duration-500 ease-in-out pt-1 text-[15px] ${
                        openMenu === item.title ? "max-h-fit" : "max-h-0"
                      }`}
                      style={{
                        maxHeight:
                          openMenu === item.title
                            ? `${submenuRefs.current[item.title]?.scrollHeight}px`
                            : "0",
                      }}
                    >
                      {item.subMenuItems?.map((subItem) => (
                        <Link
                          href={subItem.path}
                          key={subItem.title}
                          onClick={closeMenu}
                          className="py-1 pt-4 border-b border-charcoal border-opacity-30 flex items-center justify-between"
                        >
                          <span>{subItem.title}</span>
                          <TriangleRightIcon className="text-charcoal h-5 w-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={closeMenu}
                    className="flex justify-between w-full text-left text-[17px] text-charcoal font-medium"
                  >
                    <span>{item.title}</span>
                    <TriangleRightIcon className="text-charcoal h-5 w-5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* <-- ==== Navbar Mobile End ==== --> */}

      {/* <-- ==== Navbar Desktop Start ==== --> */}
      <nav
        className={cn(
          "hidden lg:flex fixed top-0 left-0 right-0 items-center justify-between z-[99] w-screen overflow-hidden py-[22px] bg-white px-content-padding-lg 2xl:px-content-padding-2xl transition-all duration-200",
          scrolled ? "bg-opacity-70 backdrop-blur-md" : "bg-opacity-100"
        )}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Arthawena Logo"
            priority={true}
            className="w-auto h-[42px]"
          />
        </Link>

        {/* <-- === Navbar Links Start === --> */}
        <div className="flex items-center justify-center gap-6 text-sm font-medium tracking-wide text-charcoal">
          {NAV_ITEMS.map((navItem, index) =>
            navItem.submenu ? (
              <DropdownNavItem
                key={index}
                navItem={navItem}
                isOpen={dropdownIndex === index}
                handleMouseEnter={() => handleMouseEnter(index)}
                handleMouseLeave={handleMouseLeave}
              />
            ) : (
              <Link
                key={index}
                href={navItem.path}
                className="hover:text-primary duration-300"
              >
                {navItem.title}
              </Link>
            )
          )}
        </div>
        {/* <-- === Navbar Links End === --> */}
      </nav>
      {/* <-- ==== Navbar Desktop End ==== --> */}
    </>
  );
}

export default Navbar;
