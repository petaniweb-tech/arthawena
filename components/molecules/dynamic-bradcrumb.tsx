"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { NAV_ITEMS } from "@/constants/nav-item";

// Import Components //
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface DynamicBreadcrumbProps {
  backgroundColor: string;
  breadcrumbColor: string;
  breadcrumbPageColor: string;
  fontWeight?: string;
  blackFontHover?: string;
  whiteFontHover?: string;
}

/**
 * 
 * @param param - DynamicBreadcrumbProps
 * @returns React.JSX.Element
 * 
 * @example
 * ```ts
 * <DynamicBreadcrumb
    backgroundColor="bg-background"
    breadcrumbColor="text-charcoal/75"
    breadcrumbPageColor="text-charcoal"
    fontWeight="font-medium"
    blackFontHover="lg:hover:text-charcoal duration-300"
  />
 * ```
 */
const DynamicBreadcrumb = ({
  backgroundColor,
  breadcrumbColor,
  breadcrumbPageColor,
  fontWeight,
  blackFontHover,
  whiteFontHover,
}: DynamicBreadcrumbProps) => {
  const path = usePathname();

  // Split the pathname into segments
  const pathnames = path.split("/").filter((x: string) => x);

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

  // Generate breadcrumb items based on the path segments
  const breadcrumbItems = pathnames.map((value, index) => {
    // Build the URL for each breadcrumb item
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const label = value.replace(/-/g, " ");

    // Check if it's the last segment
    const isLast = index === pathnames.length - 1;

    // Find the corresponding main menu item
    const navItem = NAV_ITEMS.find((item) =>
      item.subMenuItems?.some((sub) => sub.path.includes(value))
    );

    // Determine the link for the main menu item
    const breadcrumbLink =
      navItem && index === 0 ? (navItem.path === "#" ? "#" : to) : to;

    return (
      <React.Fragment key={to}>
        <BreadcrumbItem>
          {isLast ? (
            // Render text for the last segment
            <BreadcrumbPage className={`uppercase ${breadcrumbPageColor}`}>
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </BreadcrumbPage>
          ) : (
            // Render link for other segments
            <BreadcrumbLink
              asChild
              className={`breadcrumb-link ${blackFontHover} ${whiteFontHover}`}
              href={breadcrumbLink}
            >
              <Link href={breadcrumbLink} className="uppercase">
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}{" "}
        {/* Add a separator if not the last item */}
      </React.Fragment>
    );
  });

  return (
    <div
      className={cn(
        "fixed w-full z-50 px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl py-7 lg:py-[30px] top-[84px] lg:top-[95px] bg-opacity-20 transition-all duration-300",
        scrolled ? backgroundColor : "bg-transparent",
        scrolled
          ? "backdrop-blur-md lg:backdrop-blur-lg"
          : "backdrop-blur-none",
        fontWeight
      )}
    >
      <Breadcrumb className={`uppercase ${breadcrumbColor}`}>
        <BreadcrumbList>
          {/* Add a Home breadcrumb link */}
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              href={"/"}
              className={`${blackFontHover} ${whiteFontHover}`}
            >
              <Link href={"/"}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathnames.length > 0 && <BreadcrumbSeparator />}{" "}
          {/* Add a separator after Home if there are more segments */}
          {breadcrumbItems}{" "}
          {/* Render the dynamically generated breadcrumb items */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default DynamicBreadcrumb;
