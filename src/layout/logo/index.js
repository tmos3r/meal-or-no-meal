import { useHistory } from "react-router-dom";

import img from "./index.svg";

import styles from "./index.module.css";

const Logo = () => {
  let history = useHistory();

  return (
    <div className={styles.logoContainer} onClick={() => history.push("/")}>
      <img className={styles.logo} src={img} alt="" />
    </div>
  );
};

export default Logo;
