import { FunctionComponent } from "react";
import styles from "./ProcessingStation.module.css";

const ProcessingStation: FunctionComponent = () => {
  return (
    <section className={styles.processingStation}>
      <div className={styles.connectorParent}>
        <button className={styles.connector}>
          <img className={styles.splitterIcon} alt="" src="/splitter@2x.png" />
        </button>
        <div className={styles.conditional}>
          <div className={styles.loop}>
            <div className={styles.sequence}>
              <div className={styles.function}>
                <div className={styles.signIn}>Sign In</div>
              </div>
              <img
                className={styles.logoutIcon}
                loading="lazy"
                alt=""
                src="/logout.svg"
              />
            </div>
          </div>
          <img
            className={styles.operatorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.loop1}>
            <button className={styles.frameParent}>
              <div className={styles.signUpWrapper}>
                <div className={styles.signUp}>Sign Up</div>
              </div>
              <img className={styles.editIcon} alt="" src="/edit.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingStation;
