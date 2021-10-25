import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getIcon } from "../../utility/icons";

import { menuOptions } from "../../constants/menuOptions";

import styles from "./index.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      {menuOptions.map((x) => {
        return (
          <div key={x.title} className={styles.menuOption}>
            <div className={styles.menuOptionIcon}>
              <FontAwesomeIcon icon={getIcon(x.icon)} size="lg" />
            </div>
            <div className={styles.menuOptionTitle}>
              <Link to={x.path}>{x.title}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
