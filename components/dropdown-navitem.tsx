import Link from "next/link";

// Import Components //
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import Icons //
import { TriangleDownIcon } from "@radix-ui/react-icons";

interface DropdownNavItemProps {
  text: string;
  path: string;
  subMenus: { text: string; path: string }[];
  isOpen: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const DropdownNavItem = ({
  text,
  path,
  subMenus,
  isOpen,
  handleMouseEnter,
  handleMouseLeave,
}: DropdownNavItemProps) => (
  <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="relative"
  >
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger
        className={`text-[13px] font-medium tracking-wide flex gap-[5px] items-center justify-center py-4 focus:outline-none cursor-pointer ${
          isOpen ? "text-primary" : "text-charcoal"
        } `}
      >
        {text}
        <TriangleDownIcon
          className={`text-charcoal h-[17px] w-[17px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } `}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="z-50"
        style={{
          transition: "opacity 1s ease, transform 1s ease",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {subMenus.map((submenu, index) => (
          <DropdownMenuItem key={index}>
            <Link href={submenu.path}>{submenu.text}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default DropdownNavItem;
