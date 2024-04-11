import { FunctionComponent } from "react";
import styles from "./VisamastercardIcon.module.css";

const VisamastercardIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.visamastercardIcon}
      loading="lazy"
      alt=""
      src="/visamastercard@2x.png"
    />
  );
};

export default VisamastercardIcon;
