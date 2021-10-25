import Navbar from "./navbar";
import Menu from "./menu";

import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.belowNavbarContainer}>
        <Menu />
        <div className={styles.mainContentContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
