import { FunctionComponent } from "react";
import styles from "./UnionPayIcon.module.css";

const UnionPayIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.unionpayIcon}
      loading="lazy"
      alt=""
      src="/unionpay.svg"
    />
  );
};

export default UnionPayIcon;
