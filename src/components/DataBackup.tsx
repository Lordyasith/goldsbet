import { FunctionComponent } from "react";
import styles from "./DataBackup.module.css";

const DataBackup: FunctionComponent = () => {
  return (
    <section className={styles.dataBackup}>
      <div className={styles.dataProcessor}>
        <div className={styles.stillHaveQuestionsParent}>
          <h3 className={styles.stillHaveQuestions}>Still have questions?</h3>
          <div className={styles.cantFindThe}>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </div>
        </div>
        <div className={styles.valueAggregator}>
          <div className={styles.button}>
            <div className={styles.buttonChild} />
            <img
              className={styles.contentIcon}
              loading="lazy"
              alt=""
              src="/content-1@2x.png"
            />
            <h3 className={styles.getInTouch}>Get in Touch</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBackup;
