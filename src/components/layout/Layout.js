import { Fragment } from "react";
import MainNav from "./MainNav";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
