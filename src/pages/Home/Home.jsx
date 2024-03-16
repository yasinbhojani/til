import React from "react";
import "../../Calendar.css";
import styles from "./Home.module.css";

import Calendar from "react-calendar";
import InputBox from "../../components/InputBox/InputBox";

const Home = () => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <h1>Today I learned</h1>
      <main className={styles.main}>
        <Calendar className="calendar" onChange={onChange} />
        <InputBox />
      </main>
    </div>
  );
};

export default Home;
