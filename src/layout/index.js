import Div100vh from "react-div-100vh";

import Navbar from "./navbar";
import Menu from "./menu";

import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <Div100vh>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.nonNavbarContainer}>
          <Menu />
          <div className={styles.mainContentContainer}>{children}</div>
        </div>
      </div>
    </Div100vh>
  );
};

export default Layout;
