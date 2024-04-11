import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.dataAggregatorParent}>
      <img
        className={styles.dataAggregatorIcon}
        alt=""
        src="/data-aggregator@2x.png"
      />
      <img
        className={styles.dataAggregatorIcon1}
        alt=""
        src="/data-aggregator@2x.png"
      />
      <img
        className={styles.dataAggregatorIcon2}
        alt=""
        src="/data-aggregator@2x.png"
      />
      <img
        className={styles.dataAggregatorIcon3}
        alt=""
        src="/data-aggregator@2x.png"
      />
      <div className={styles.dataAggregator}>
        <img
          className={styles.dataAggregatorChild}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <h1 className={styles.fortuneGems}>
          <p className={styles.fortune}>FORTUNE</p>
          <p className={styles.gems}>GEMS</p>
        </h1>
      </div>
      <div className={styles.dataAggregator1}>
        <img
          className={styles.dataAggregatorItem}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <h1 className={styles.aviator}>AVIATOR</h1>
      </div>
      <div className={styles.dataAggregator2}>
        <img
          className={styles.dataAggregatorInner}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <h1 className={styles.mines}>MINES</h1>
      </div>
      <div className={styles.dataAggregator3}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-16@2x.png"
        />
        <h1 className={styles.crash}>CRASH</h1>
      </div>
    </div>
  );
};

export default FrameComponent3;
