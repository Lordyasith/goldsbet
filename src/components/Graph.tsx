import { FunctionComponent } from "react";
import styles from "./Graph.module.css";

const Graph: FunctionComponent = () => {
  return (
    <section className={styles.graph}>
      <div className={styles.tree} />
      <img className={styles.graphChild} alt="" src="/group-39246.svg" />
      <img className={styles.graphItem} alt="" src="/group-39266.svg" />
      <div className={styles.tree1} />
      <div className={styles.tree2} />
      <div className={styles.tree3} />
      <img className={styles.graphInner} alt="" src="/group-39247.svg" />
      <div className={styles.tree4} />
    </section>
  );
};

export default Graph;
