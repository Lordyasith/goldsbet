import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DataLoader.module.css";

export type DataLoaderType = {
  dataUnloader?: string;
  canIChangeMyPlanLater?: string;
  ofCourseOurPricingScalesW?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const DataLoader: FunctionComponent<DataLoaderType> = ({
  dataUnloader,
  canIChangeMyPlanLater,
  ofCourseOurPricingScalesW,
  propWidth,
  propPadding,
}) => {
  const dataLoaderStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className={styles.dataLoader} style={dataLoaderStyle}>
      <img
        className={styles.dataUnloaderIcon}
        loading="lazy"
        alt=""
        src={dataUnloader}
      />
      <h3 className={styles.canIChange}>{canIChangeMyPlanLater}</h3>
      <div className={styles.ofCourseOur}>{ofCourseOurPricingScalesW}</div>
    </div>
  );
};

export default DataLoader;
