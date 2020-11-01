import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavItem.scss";

const NavItem = ({ children, redirectPath }) => {
  return (
    <span className={styles.navItem}>
      <Link className={styles.navItemLink} to={redirectPath}>
        {children}
      </Link>
    </span>
  );
};

export default NavItem;
