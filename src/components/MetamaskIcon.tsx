import { FunctionComponent } from "react";
import styles from "./MetamaskIcon.module.css";

const MetamaskIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.metamaskIcon}
      loading="lazy"
      alt=""
      src="/metamask.svg"
    />
  );
};

export default MetamaskIcon;
