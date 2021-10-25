import img from "./index.svg";

import styles from "./index.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={img} alt="" />
    </div>
  );
};

export default Logo;
