import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNav = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Daily Qoutes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/qoutes">
              All Qoutes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/new-qoutes">
              Add Qoute
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNav;
