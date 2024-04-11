import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  propHeight,
}) => {
  const utEnimAdStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.theBestWebflowTemplatesParent}>
          <h3 className={styles.theBestWebflow}>
            “The best Webflow Templates”
          </h3>
          <div className={styles.utEnimAd} style={utEnimAdStyle}>
            Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat aute irure sint amet
            occaecat cupidatat non proident”
          </div>
        </div>
        <div className={styles.frameParent}>
          <img className={styles.frameItem} alt="" src="/group-38145@2x.png" />
          <div className={styles.frameContainer}>
            <div className={styles.johnCarterParent}>
              <b className={styles.johnCarter}>John Carter</b>
              <div className={styles.ceoAtWebflow}>CEO at Webflow Agency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
