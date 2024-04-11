import { FunctionComponent } from "react";
import DataLoader from "./DataLoader";
import styles from "./ErrorReporter.module.css";

const ErrorReporter: FunctionComponent = () => {
  return (
    <section className={styles.errorReporter}>
      <div className={styles.dataExpanderParent}>
        <div className={styles.dataExpander}>
          <div className={styles.dataTrimmer}>
            <img
              className={styles.dataTrimmerChild}
              loading="lazy"
              alt=""
              src="/frame-39349.svg"
            />
            <h3 className={styles.isThereA}>
              Is there a free trial available?
            </h3>
            <div className={styles.yesYouCan}>
              Yes, you can try us for free for 30 days. Our friendly team will
              work with you to get you up and running as soon as possible.
            </div>
          </div>
        </div>
        <DataLoader
          dataUnloader="/frame-39349-1.svg"
          canIChangeMyPlanLater="Can I change my plan later?"
          ofCourseOurPricingScalesW="Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
        />
        <DataLoader
          dataUnloader="/frame-39349-2.svg"
          canIChangeMyPlanLater="What is your cancellation policy?"
          ofCourseOurPricingScalesW="We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."
          propWidth="unset"
          propPadding="unset"
        />
      </div>
    </section>
  );
};

export default ErrorReporter;
