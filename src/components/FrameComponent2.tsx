import { FunctionComponent } from "react";
import Debugging from "./Debugging";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.errorHandlerWrapper}>
      <div className={styles.errorHandler}>
        <Debugging
          tOPGAMES="LIVE CASINO"
          propWidth="unset"
          propAlignSelf="stretch"
          propWidth1="588px"
        />
        <div className={styles.queueManager}>
          <div className={styles.stackManager}>
            <div className={styles.timer}>
              <img
                className={styles.counterIcon}
                loading="lazy"
                alt=""
                src="/frame-28@2x.png"
              />
              <img
                className={styles.checkerIcon}
                loading="lazy"
                alt=""
                src="/frame-29@2x.png"
              />
              <img
                className={styles.senderIcon}
                loading="lazy"
                alt=""
                src="/frame-30@2x.png"
              />
              <img
                className={styles.receiverIcon}
                loading="lazy"
                alt=""
                src="/frame-32@2x.png"
              />
              <img
                className={styles.pairCreatorIcon}
                loading="lazy"
                alt=""
                src="/frame-33@2x.png"
              />
              <img
                className={styles.pairSplitterIcon}
                alt=""
                src="/pair-splitter@2x.png"
              />
            </div>
          </div>
          <div className={styles.stackManager1}>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-28-1@2x.png"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/frame-29-1@2x.png"
              />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/frame-30-1@2x.png"
              />
              <img
                className={styles.frameIcon}
                loading="lazy"
                alt=""
                src="/frame-32-1@2x.png"
              />
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/frame-33-1@2x.png"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/frame-31-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
