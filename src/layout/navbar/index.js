import Logo from "../logo";

import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
    </div>
  );
};

export default Navbar;
