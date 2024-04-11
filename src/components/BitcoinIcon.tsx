import { FunctionComponent } from "react";
import styles from "./BitcoinIcon.module.css";

const BitcoinIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.bitcoinIcon}
      loading="lazy"
      alt=""
      src="/bitcoin.svg"
    />
  );
};

export default BitcoinIcon;
