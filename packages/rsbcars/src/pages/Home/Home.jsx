import React from "react";

import styles from "./Home.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>SEARCH</div>
      <div className={styles.content}>Content</div>
    </div>
  );
};

export default Home;
