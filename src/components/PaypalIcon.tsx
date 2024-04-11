import { FunctionComponent } from "react";
import styles from "./PaypalIcon.module.css";

const PaypalIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.paypalIcon}
      loading="lazy"
      alt=""
      src="/paypal.svg"
    />
  );
};

export default PaypalIcon;
