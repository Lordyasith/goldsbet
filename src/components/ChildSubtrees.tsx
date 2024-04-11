import { FunctionComponent } from "react";
import styles from "./ChildSubtrees.module.css";

const ChildSubtrees: FunctionComponent = () => {
  return (
    <section className={styles.childSubtrees}>
      <div className={styles.dataSorterParent}>
        <div className={styles.dataSorter}>
          <div className={styles.wrapperRectangle14}>
            <img
              className={styles.wrapperRectangle14Child}
              alt=""
              src="/rectangle-14-1@2x.png"
            />
          </div>
          <img className={styles.dataSorterChild} alt="" />
          <img
            className={styles.dataSorterItem}
            alt=""
            src="/group-5-1@2x.png"
          />
          <img
            className={styles.dataSorterInner}
            alt=""
            src="/group-6-1@2x.png"
          />
        </div>
        <div className={styles.flowControllerParent}>
          <div className={styles.flowController}>
            <div className={styles.valueTransformer}>
              <img
                className={styles.peopleIcon}
                loading="lazy"
                alt=""
                src="/people.svg"
              />
              <div className={styles.k}>3K</div>
            </div>
            <h1 className={styles.dataRetriever}>+</h1>
          </div>
          <h1 className={styles.twitchUser}>Twitch User</h1>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.sendSquareParent}>
              <img
                className={styles.sendSquareIcon}
                loading="lazy"
                alt=""
                src="/sendsquare.svg"
              />
              <div className={styles.k1}>21K</div>
            </div>
            <h1 className={styles.h1}>+</h1>
          </div>
          <h1 className={styles.totalDeposit}>Total Deposit</h1>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.receiveSquareParent}>
              <img
                className={styles.receiveSquareIcon}
                loading="lazy"
                alt=""
                src="/receivesquare.svg"
              />
              <div className={styles.k2}>38K</div>
            </div>
            <h1 className={styles.h11}>+</h1>
          </div>
          <h1 className={styles.totalWithdrawl}>Total Withdrawl</h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.shieldParent}>
                <img
                  className={styles.shieldIcon}
                  loading="lazy"
                  alt=""
                  src="/shield.svg"
                />
                <div className={styles.years}>
                  <span>{`2 `}</span>
                  <span className={styles.years1}>Years</span>
                </div>
              </div>
            </div>
            <h1 className={styles.ofTrust}>Of Trust</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSubtrees;
