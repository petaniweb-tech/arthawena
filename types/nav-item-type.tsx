export type NavItemType = {
  title: string;
  path: string;
  submenu?: boolean;
  subMenuItems?: NavItemType[];
};
