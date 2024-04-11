import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.errorHandlerParent}>
        <div className={styles.errorHandler}>
          <img
            className={styles.icon}
            alt=""
            src="/1708385906518212610-133506-1@2x.png"
          />
          <div className={styles.safeProtectedConnection}>
            100% SAFE Protected connection and encrypted data.
          </div>
          <div className={styles.frameParent}>
            <div className={styles.callCallingParent}>
              <img
                className={styles.callCallingIcon}
                alt=""
                src="/callcalling.svg"
              />
              <b className={styles.b}>9570557936</b>
            </div>
            <div className={styles.smsParent}>
              <img className={styles.smsIcon} alt="" src="/sms.svg" />
              <b className={styles.officilgoldsbetgmailcom}>
                officilgoldsbet@gmail.com
              </b>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.companyParent}>
              <h3 className={styles.company}>COMPANY</h3>
              <div className={styles.gettingStartedParent}>
                <div className={styles.gettingStarted}>Getting Started</div>
                <div className={styles.about}>About</div>
                <div className={styles.faq}>FAQ</div>
                <div
                  className={styles.termsConditions}
                >{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className={styles.playParent}>
              <h3 className={styles.play}>PLAY</h3>
              <div className={styles.frameContainer}>
                <div className={styles.cricketParent}>
                  <div className={styles.cricket}>Cricket</div>
                  <div className={styles.soccer}>Soccer</div>
                  <div className={styles.tennis}>Tennis</div>
                  <div className={styles.casino}>Casino</div>
                  <div className={styles.election}>Election</div>
                  <div className={styles.events}>Events</div>
                  <div className={styles.specialMarket}>Special Market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.disclaimerPleaseNoteThatParent}>
          <div className={styles.disclaimerPlease}>
            Disclaimer : Please note that Gambling involves a financial risk and
            could be addictive over time if not practised within limits. Only
            18+ people should use the services and should use it responsibly.
            Players should be aware of any financial risk and govern themselves
            accordingly.
          </div>
          <div className={styles.copyright2022GoldsbetAllWrapper}>
            <div className={styles.copyright2022GoldsbetAll}>
              Copyright © 2022 Goldsbet® All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
