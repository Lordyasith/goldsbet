import { FunctionComponent } from "react";
import styles from "./EthereumIcon.module.css";

const EthereumIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.ethereumIcon}
      loading="lazy"
      alt=""
      src="/ethereum.svg"
    />
  );
};

export default EthereumIcon;
