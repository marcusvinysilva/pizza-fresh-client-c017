import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/settings.svg";
import { RoutePath } from "types/routes";

export const navigationItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },
  {
    icon: <Settings />,
    path: RoutePath.SETTINGS,
  },
];
