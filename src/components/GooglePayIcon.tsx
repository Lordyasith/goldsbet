import { FunctionComponent } from "react";
import styles from "./GooglePayIcon.module.css";

const GooglePayIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.googlepayIcon}
      loading="lazy"
      alt=""
      src="/googlepay@2x.png"
    />
  );
};

export default GooglePayIcon;
