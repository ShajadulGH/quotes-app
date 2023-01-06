import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
const MainNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
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
          {authCtx.isLoggedIn && (
            <li>
              <NavLink activeClassName={styles.active} to="/profile">
                Profile
              </NavLink>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li>
              <NavLink activeClassName={styles.active} to="/auth">
                Log In
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <button className={styles.logOut} onClick={logoutHandler}>
                Log Out
              </button>
            </li>
          )}
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
