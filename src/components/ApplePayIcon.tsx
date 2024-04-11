import { FunctionComponent } from "react";
import styles from "./ApplePayIcon.module.css";

const ApplePayIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.applepayIcon}
      loading="lazy"
      alt=""
      src="/applepay@2x.png"
    />
  );
};

export default ApplePayIcon;
