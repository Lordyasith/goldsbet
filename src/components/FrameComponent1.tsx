import { FunctionComponent } from "react";
import VisamastercardIcon from "./VisamastercardIcon";
import PaypalIcon from "./PaypalIcon";
import GooglePayIcon from "./GooglePayIcon";
import ApplePayIcon from "./ApplePayIcon";
import EthereumIcon from "./EthereumIcon";
import BitcoinIcon from "./BitcoinIcon";
import MetamaskIcon from "./MetamaskIcon";
import UnionPayIcon from "./UnionPayIcon";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.goldsbetproInner}>
      <div className={styles.frameParent}>
        <div className={styles.visamastercardParent}>
          <VisamastercardIcon />
          <PaypalIcon />
          <GooglePayIcon />
          <ApplePayIcon />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.ethereumParent}>
            <EthereumIcon />
            <BitcoinIcon />
            <MetamaskIcon />
            <UnionPayIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
