import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Debugging.module.css";

export type DebuggingType = {
  tOPGAMES?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
};

const Debugging: FunctionComponent<DebuggingType> = ({
  tOPGAMES,
  propWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const debuggingStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const tOPGAMESStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.debugging} style={debuggingStyle}>
      <h1 className={styles.topGames} style={tOPGAMESStyle}>
        {tOPGAMES}
      </h1>
      <button className={styles.evaluating}>
        <div className={styles.visualizing}>
          <div className={styles.seeAllGames}>See all Games</div>
          <img
            className={styles.arrowSquareRightIcon}
            alt=""
            src="/arrowsquareright.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default Debugging;
