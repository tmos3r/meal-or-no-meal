import { ThemeProvider } from "@mui/material/styles";

import Navbar from "./navbar";
import Menu from "./menu";

import Theme from "./theme";

import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.nonNavbarContainer}>
          <Menu />
          <div className={styles.mainContentContainer}>{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
