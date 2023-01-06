import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNav = () => {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Daily Quotes</div>
      <nav className={styles.nav}>
        <ul
          className={`${isMobile ? styles.navMobileUl : styles.navUl}`}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <NavLink activeClassName={styles.active} to="/qoutes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/new-qoutes">
              Add Quote
            </NavLink>
          </li>
        </ul>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className={styles["mobile-icon"]}
        >
          {isMobile ? <i class="fas fa-times" /> : <i class="fas fa-bars" />}
        </button>
      </nav>
    </header>
  );
};
export default MainNav;
