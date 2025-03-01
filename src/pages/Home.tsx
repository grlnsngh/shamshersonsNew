import React from "react";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url('https://picsum.photos/1280/720')` }}
      >
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Welcome to Shamshersons – Your Trusted Piano Experts Since 1930
          </h1>
          <h2 className={styles.subheadline}>
            With over eight decades of experience, we provide professional piano
            tuning, repair, restoration, and more.
          </h2>
          <button className={styles.button}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
