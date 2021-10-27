import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import { getIcon } from "../../utility/icons";

import { menuOptions } from "../../constants/menuOptions";

import styles from "./index.module.css";

const Menu = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className={styles.menuContainer}>
      {menuOptions.map((x) => {
        return (
          <div
            key={x.title}
            className={classnames(styles.menuOption, {
              [styles.currentlySelected]: location.pathname.includes(x.path),
            })}
            onClick={() => {
              history.push(x.path);
            }}
          >
            <div className={styles.menuOptionIcon}>
              <FontAwesomeIcon icon={getIcon(x.icon)} size="2x" />
            </div>
            <div className={styles.menuOptionTitle}>{x.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
