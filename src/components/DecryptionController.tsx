import { FunctionComponent } from "react";
import DataLoader from "./DataLoader";
import styles from "./DecryptionController.module.css";

const DecryptionController: FunctionComponent = () => {
  return (
    <section className={styles.decryptionController}>
      <div className={styles.signatureVerifier}>
        <DataLoader
          dataUnloader="/frame-39349-3.svg"
          canIChangeMyPlanLater="Can other info be added to an invoice?"
          ofCourseOurPricingScalesW="At the moment, the only way to add additional information to invoices is to add the information to the workspace's name."
          propWidth="unset"
          propPadding="unset"
        />
        <DataLoader
          dataUnloader="/frame-39349-4.svg"
          canIChangeMyPlanLater="How does billing work?"
          ofCourseOurPricingScalesW="Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
          propWidth="418px"
          propPadding="0px var(--padding-xl) 0px 0px"
        />
        <DataLoader
          dataUnloader="/frame-39349-5.svg"
          canIChangeMyPlanLater="How do I change my account email?"
          ofCourseOurPricingScalesW="You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop."
          propWidth="unset"
          propPadding="unset"
        />
      </div>
    </section>
  );
};

export default DecryptionController;
