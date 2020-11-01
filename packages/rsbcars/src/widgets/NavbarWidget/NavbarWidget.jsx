import React from "react";

import NavBar from "./components/NavBar/NavBar";
import NavItem from "./components/NavItem/NavItem";

const NavbarWidget = ({ widgetConfig: { navItems } }) => {
  return (
    <NavBar>
      {navItems.map(({ navItemName, navItemRedirectPath, id }) => (
        <NavItem key={id} redirectPath={navItemRedirectPath}>
          {navItemName}
        </NavItem>
      ))}
    </NavBar>
  );
};

export default NavbarWidget;
