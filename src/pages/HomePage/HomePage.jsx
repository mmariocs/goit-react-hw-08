import React from "react";
import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to the Contact Manager App</h1>
      <p className={s.text}>This is your personal app for managing contacts.</p>
    </div>
  );
};

export default HomePage;
