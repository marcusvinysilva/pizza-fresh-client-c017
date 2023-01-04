import * as S from "./style";
import logo from "assets/imgs/logo.png";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import { RoutePath } from "types/routes";
import { NavItem } from "./types";

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
}

const Menu = ({ active, navItems }: MenuProps) => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>

        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton active={item.path === active}>
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
      </nav>
      <S.MenuItemLogout>
        <Logout />
      </S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;
