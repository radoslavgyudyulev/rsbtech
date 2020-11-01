import React, { useState } from "react";

import styles from "./Home.scss";


const Home = () => {
  const [image, setImage] = useState(null);

  const saveImage = (event) => {
    // console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };
  const handleSubmit = async () => {
    const data = new FormData();
		data.append("file", image);
		console.log({image})
		console.log(data)
    await fetch("http://localhost:8000/api/test/all", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: data,
    });
  };

  return (
    <>
      <input name="file" type="file" onChange={saveImage} />
      <button onClick={handleSubmit}>Submit</button>
      <div className={styles.container}>
        <div className={styles.searchBar}>SEARCH</div>
        <div className={styles.content}>Content</div>
      </div>
    </>
  );
};

export default Home;
