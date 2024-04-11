import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./DisconnectedComponents.module.css";

const DisconnectedComponents: FunctionComponent = () => {
  return (
    <section className={styles.disconnectedComponents}>
      <div className={styles.frameParent}>
        <GroupComponent />
        <GroupComponent propHeight="148px" />
        <GroupComponent propHeight="unset" />
      </div>
    </section>
  );
};

export default DisconnectedComponents;
