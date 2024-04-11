import { FunctionComponent } from "react";
import ProcessingStation from "../components/ProcessingStation";
import FrameComponent4 from "../components/FrameComponent4";
import Graph from "../components/Graph";
import Debugging from "../components/Debugging";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import DisconnectedComponents from "../components/DisconnectedComponents";
import ChildSubtrees from "../components/ChildSubtrees";
import ErrorReporter from "../components/ErrorReporter";
import DecryptionController from "../components/DecryptionController";
import DataBackup from "../components/DataBackup";
import FrameComponent from "../components/FrameComponent";
import styles from "./Goldsbetpro.module.css";

const Goldsbetpro: FunctionComponent = () => {
  return (
    <div className={styles.goldsbetpro}>
      <section className={styles.logicGate} />
      <section className={styles.logicGate1} />
      <section className={styles.logicGate2} />
      <ProcessingStation />
      <div className={styles.wrapperGroup469315}>
        <img
          className={styles.wrapperGroup469315Child}
          alt=""
          src="/group-469315.svg"
        />
      </div>
      <FrameComponent4 />
      <section className={styles.matrix}>
        <div className={styles.matrixChild} />
        <div className={styles.array} />
      </section>
      <section className={styles.logicGate3} />
      <Graph />
      <div className={styles.wrapperGroup3}>
        <img
          className={styles.wrapperGroup3Child}
          alt=""
          src="/group-3@2x.png"
        />
      </div>
      <img className={styles.goldsbetproChild} alt="" src="/group-6@2x.png" />
      <section className={styles.wrapperRectangle14Parent}>
        <div className={styles.wrapperRectangle14}>
          <img
            className={styles.wrapperRectangle14Child}
            alt=""
            src="/rectangle-14@2x.png"
          />
        </div>
        <img className={styles.frameChild} alt="" src="/group-5@2x.png" />
      </section>
      <div className={styles.wrapperGroup4}>
        <img
          className={styles.wrapperGroup4Child}
          alt=""
          src="/group-4@2x.png"
        />
      </div>
      <div className={styles.debuggingWrapper}>
        <Debugging tOPGAMES="TOP GAMES" />
      </div>
      <div className={styles.dataHub}>
        <FrameComponent3 />
      </div>
      <FrameComponent2 />
      <div className={styles.logicBranch}>
        <h1 className={styles.weAcceptPayments}>We accept payments</h1>
      </div>
      <div className={styles.logicBranch1}>
        <h3 className={styles.nequePulvinarVestibulum}>
          Neque, pulvinar vestibulum non aliquam.
        </h3>
      </div>
      <FrameComponent1 />
      <section className={styles.goldsbetproInner}>
        <div className={styles.parent}>
          <img
            className={styles.icon}
            alt=""
            src="/1708385906518212610-133506-1@2x.png"
          />
          <div className={styles.wrapper081}>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/08-1@2x.png"
            />
          </div>
          <div className={styles.wrapper031}>
            <img
              className={styles.icon2}
              loading="lazy"
              alt=""
              src="/03-1@2x.png"
            />
          </div>
        </div>
      </section>
      <div className={styles.logicBranch2}>
        <h1 className={styles.whatOurClients}>WHAT CLIENTS SAY</h1>
      </div>
      <div className={styles.logicBranch3}>
        <h3 className={styles.nequePulvinarVestibulum1}>
          Neque, pulvinar vestibulum non aliquam.
        </h3>
      </div>
      <DisconnectedComponents />
      <ChildSubtrees />
      <div className={styles.logicBranch4}>
        <div className={styles.faqs}>FAQs</div>
      </div>
      <div className={styles.logicBranch5}>
        <h1 className={styles.frequentAskQustions}>Frequent ask qustions</h1>
      </div>
      <div className={styles.inputValidator}>
        <h3 className={styles.haveQuestionsWere}>
          Have questions? We’re here to help.
        </h3>
      </div>
      <section className={styles.iterationManager}>
        <div className={styles.searchFieldDefault}>
          <input
            className={styles.dataSwitcher}
            placeholder="Search..."
            type="text"
          />
          <img
            className={styles.uiIconsearchhugeIcon}
            alt=""
            src="/ui-iconsearchhugeicon.svg"
          />
        </div>
      </section>
      <ErrorReporter />
      <DecryptionController />
      <DataBackup />
      <FrameComponent />
    </div>
  );
};

export default Goldsbetpro;
