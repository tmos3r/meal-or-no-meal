import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getIcon } from "../../utility/icons";

import { menuOptions } from "../../constants/menuOptions";

import styles from "./index.module.css";

const Menu = () => {
  let history = useHistory();

  return (
    <div className={styles.menuContainer}>
      {menuOptions.map((x) => {
        return (
          <div
            key={x.title}
            className={styles.menuOption}
            onClick={() => {
              history.push(x.path);
            }}
          >
            <div className={styles.menuOptionIcon}>
              <FontAwesomeIcon icon={getIcon(x.icon)} size="lg" />
            </div>
            <div className={styles.menuOptionTitle}>{x.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
